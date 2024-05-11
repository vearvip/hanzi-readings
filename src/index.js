import { promises as fs } from "fs";
import { fileURLToPath, dirname } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mandarinReadingsPath = path.join(
  __dirname,
  "Unihan_Mandarin_Readings.json",
);
// 普通话查询函数
export async function queryMandarin(char) {
  try {
    const data = await fs.readFile(mandarinReadingsPath, { encoding: "utf8" });
    const readings = JSON.parse(data);

    return readings[char];
  } catch (error) {
    console.error("查询普通话读音时发生错误:", error);
  }
}

const cantoneseReadingsPath = path.join(
  __dirname,
  "Unihan_Cantonese_Readings.json",
);

// 粤语查询函数
export async function queryCantonese(char) {
  try {
    const data = await fs.readFile(cantoneseReadingsPath, { encoding: "utf8" });
    const readings = JSON.parse(data);

    return readings[char];
  } catch (error) {
    console.error("查询粤语读音时发生错误:", error);
  }
}
