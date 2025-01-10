import * as fs from 'fs';
import * as glob from 'glob';
import matter from 'gray-matter';
import { execSync } from 'child_process';

// Get modified AND staged markdown files
const getModifiedMdFiles = () => {
  const result = execSync('git status --porcelain "*.md"')
    .toString()
    .trim();
  console.log('Modified MD files:', result);
  return result
    ? result
        .split('\n')
        .map(line => line.slice(3))
        .filter(file => file.startsWith('src/content/blog/'))
    : [];
};

const modifiedFiles = getModifiedMdFiles();
console.log('Processing files:', modifiedFiles);

modifiedFiles.forEach(file => {
  console.log(`Processing ${file}`);
  
  // Read the file content as plain text
  const content = fs.readFileSync(file, 'utf-8');
  
  // Parse frontmatter while preserving original format
  const { data, content: markdown } = matter(content, {
    engines: {
      yaml: {
        stringify: (obj) => {
          const lines = [];
          for (const [key, value] of Object.entries(obj)) {
            // Keep pubDatetime exactly as is
            if (key === 'pubDatetime') {
              lines.push(`${key}: ${data.pubDatetime}`);
            }
            // Add modDatetime in YYYY-MM-DD format
            else if (key === 'modDatetime') {
              lines.push(`${key}: ${new Date().toISOString().split('T')[0]}`);
            }
            // Keep all other fields as they are
            else {
              lines.push(`${key}: ${value}`);
            }
          }
          return lines.join('\n');
        }
      }
    }
  });
  
  // If modDatetime doesn't exist, add it
  if (!data.modDatetime) {
    data.modDatetime = new Date().toISOString().split('T')[0];
  }
  
  const updatedContent = matter.stringify(markdown, data);
  fs.writeFileSync(file, updatedContent);
  
  execSync(`git add ${file}`);
  console.log(`Updated and staged ${file}`);
}); 