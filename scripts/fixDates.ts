import * as fs from 'fs';
import * as glob from 'glob';
import matter from 'gray-matter';
import { execSync } from 'child_process';

const getModifiedMdFiles = () => {
  const result = execSync('git status --porcelain "*.md"')
    .toString()
    .trim();
  return result
    ? result
        .split('\n')
        .map(line => line.slice(3))
        .filter(file => file.startsWith('src/content/blog/'))
    : [];
};

const modifiedFiles = getModifiedMdFiles();

modifiedFiles.forEach(file => {
  // Read the original file as plain text
  const originalContent = fs.readFileSync(file, 'utf-8');
  
  // Find the frontmatter section
  const matches = originalContent.match(/^---\n([\s\S]*?)\n---/);
  if (!matches) return;
  
  // Update only modDatetime in the frontmatter
  let frontmatter = matches[1];
  const today = new Date().toISOString().split('T')[0];
  
  if (frontmatter.includes('modDatetime:')) {
    // Replace existing modDatetime
    frontmatter = frontmatter.replace(
      /modDatetime:.*(\r?\n|$)/,
      `modDatetime: ${today}\n`
    );
  } else {
    // Add modDatetime if it doesn't exist
    // Ensure there's a newline before and after the new entry
    frontmatter = frontmatter.trim() + `\nmodDatetime: ${today}`;
  }
  
  // Reconstruct the file with proper spacing
  const newContent = originalContent.replace(
    /^---\n[\s\S]*?\n---/,
    `---\n${frontmatter}\n---`
  );
  
  fs.writeFileSync(file, newContent);
  execSync(`git add ${file}`);
}); 