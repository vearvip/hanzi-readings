import mandarin from "./dataSource/Unihan_Mandarin_Readings.json" assert { type: "json" };
import cantonese from "./dataSource/Unihan_Cantonese_Readings.json" assert { type: "json" };
import japaneseOn from "./dataSource/Unihan_JapaneseOn_Readings.json" assert { type: "json" };
import korean from "./dataSource/Unihan_Korean_Readings.json" assert { type: "json" };
import vietnamese from "./dataSource/Unihan_Vietnamese_Readings.json" assert { type: "json" };
import japaneseKun from "./dataSource/Unihan_JapaneseKun_Readings.json" assert { type: "json" };

const dialects = {
  mandarin,
  cantonese,
  japaneseOn,
  korean,
  vietnamese,
  japaneseKun,
}


// 查询函数
export function queryReading(char, dialectName) {
  const dialect = dialects[dialectName]
  if (!dialect) {
    throw new Error(`读音查询不支持此方言: ${dialectName}`);
  } 
  try { 
    return dialect[char]
  } catch (error) {
    console.error(`查询 ${dialectName} 读音时发生错误:`, error);
  }
}
