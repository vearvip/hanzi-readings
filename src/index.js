import { promises as fs } from "fs";
import { fileURLToPath, dirname } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 指定所有方言读音的文件路径
const readingsPaths = {
  mandarin: path.join(__dirname, "Unihan_Mandarin_Readings.json"),
  cantonese: path.join(__dirname, "Unihan_Cantonese_Readings.json"),
  japaneseOn: path.join(__dirname, "Unihan_JapaneseOn_Readings.json"),
  korean: path.join(__dirname, "Unihan_Korean_Readings.json"),
  vietnamese: path.join(__dirname, "Unihan_Vietnamese_Readings.json"),
  japaneseKun: path.join(__dirname, "Unihan_JapaneseKun_Readings.json"),
  // ...其他方言的路径
};

// 查询函数，根据传入的方言返回对应的读音
export async function queryReading(char, dialect) {
  if (!readingsPaths[dialect]) {
    throw new Error(`读音查询不支持此方言: ${dialect}`);
  }

  try {
    const data = await fs.readFile(readingsPaths[dialect], {
      encoding: "utf8",
    });
    const readings = JSON.parse(data);
    return readings[char];
  } catch (error) {
    console.error(`查询 ${dialect} 读音时发生错误:`, error);
  }
}
