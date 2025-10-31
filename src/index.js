import unihanReadingsData from "./dataSource/Unihan_Readings.json" with { type: "json" };
import { propertyList } from "./utils/index.js";

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

// console.log("汉字读音查询工具加载完成。", queryReading('一'))