import fs from "fs/promises";
import path from "path";

export async function readMarkdown(markdownPath: string) {
  const data = await fs.readFile(path.join(process.cwd(), markdownPath));

  return data.toString();
}
