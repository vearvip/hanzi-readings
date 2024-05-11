import { promises as fs } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 定义所有方言读音文件的路径
const readingsPaths = {
  mandarin: path.join(__dirname, "dataSource/Unihan_Mandarin_Readings.json"),
  cantonese: path.join(__dirname, "dataSource/Unihan_Cantonese_Readings.json"),
  japaneseOn: path.join(
    __dirname,
    "dataSource/Unihan_JapaneseOn_Readings.json",
  ),
  korean: path.join(__dirname, "dataSource/Unihan_Korean_Readings.json"),
  vietnamese: path.join(
    __dirname,
    "dataSource/Unihan_Vietnamese_Readings.json",
  ),
  japaneseKun: path.join(
    __dirname,
    "dataSource/Unihan_JapaneseKun_Readings.json",
  ),
  // 如果需要，添加其他方言的路径
};

// 查询函数
export async function queryReading(char, dialect) {
  if (!readingsPaths[dialect]) {
    throw new Error(`读音查询不支持此方言: ${dialect}`);
  }

  try {
    const data = await fs.readFile(readingsPaths[dialect], {
      encoding: "utf8",
    });
    const readings = JSON.parse(data);
    return readings[char] || `未找到 ${char} 在 ${dialect} 中的读音。`;
  } catch (error) {
    console.error(`查询 ${dialect} 读音时发生错误:`, error);
  }
}
