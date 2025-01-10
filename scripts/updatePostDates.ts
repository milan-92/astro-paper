import fs from "fs";
import matter from "gray-matter";
import { glob } from "glob";

async function updatePostDates() {
  const files = await glob("src/content/blog/**/*.md");
  const currentDate = new Date().toISOString().split('T')[0];

  files.forEach(file => {
    const content = fs.readFileSync(file, "utf-8");
    const { data, content: markdown } = matter(content);
    let modified = false;

    // For posts changing from draft to published
    if (data.draft === false && data.pubDatetime === "2024-01-01") {
      data.pubDatetime = currentDate;
      modified = true;
    }

    // For existing posts being modified
    if (data.pubDatetime && data.pubDatetime !== currentDate && !data.draft) {
      data.modDatetime = currentDate;
      modified = true;
    }

    if (modified) {
      const updatedContent = matter.stringify(markdown, data);
      fs.writeFileSync(file, updatedContent);
      console.log(`Updated dates in ${file}`);
    }
  });
}

updatePostDates().catch(console.error); 