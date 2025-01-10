import * as fs from 'fs';
import * as glob from 'glob';
import matter from 'gray-matter';
import { execSync } from 'child_process';

// Get only staged markdown files
const getStagedMdFiles = () => {
  const result = execSync('git diff --cached --name-only --diff-filter=ACM "*.md"')
    .toString()
    .trim();
  return result ? result.split('\n') : [];
};

// Format date as YYYY-MM-DD
const formatDate = (date: Date) => {
  return date.toISOString().split('T')[0];
};

const stagedFiles = getStagedMdFiles();

stagedFiles.forEach(file => {
  if (!file.startsWith('src/content/blog/')) return;
  
  const content = fs.readFileSync(file, 'utf-8');
  const { data, content: markdown } = matter(content);
  
  // Update modDatetime
  data.modDatetime = formatDate(new Date());
  
  const updatedContent = matter.stringify(markdown, data);
  fs.writeFileSync(file, updatedContent);
  
  // Stage the updated file
  execSync(`git add ${file}`);
}); 