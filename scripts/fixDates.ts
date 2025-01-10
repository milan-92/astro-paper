import fs from "fs";
import matter from "gray-matter";
import { glob } from "glob";

async function fixDates() {
  const files = await glob("src/content/blog/**/*.md");

  files.forEach(file => {
    const content = fs.readFileSync(file, "utf-8");
    const { data, content: markdown } = matter(content);
    let modified = false;

    // Remove quotes from dates if they exist
    if (data.pubDatetime && typeof data.pubDatetime === 'string') {
      data.pubDatetime = data.pubDatetime.replace(/['"]/g, '');
      modified = true;
    }
    
    if (data.modDatetime && typeof data.modDatetime === 'string') {
      data.modDatetime = data.modDatetime.replace(/['"]/g, '');
      modified = true;
    }

    if (modified) {
      const updatedContent = matter.stringify(markdown, data);
      fs.writeFileSync(file, updatedContent);
      console.log(`Fixed dates in ${file}`);
    }
  });
}

fixDates().catch(console.error); 