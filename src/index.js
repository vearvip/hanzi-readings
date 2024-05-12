import unihanReadingsData from "./dataSource/Unihan_Readings.json" assert { type: "json" };
import { propertyList } from "./utils";

// 查询函数
export function queryReading(char) {
  const readingInfo = unihanReadingsData[char]
  const charInfo = {}

  readingInfo.forEach((ele, index) => {
    charInfo[
      propertyList[index]
    ] = ele ? ele : undefined
  })


  return charInfo
} 