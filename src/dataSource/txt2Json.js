const fs = require("fs");
const readline = require("readline");
const path = require("path");
const { propertyList } = require('../utils/index')

const inputFilePath = path.join(__dirname, "Unihan_Readings.txt");
const outputFilePath = path.join(__dirname, "Unihan_Readings.json")


async function convertUnihanReadingsToJson(inputPath, outputPath) {
  const fileStream = fs.createReadStream(inputPath, { encoding: "utf8" });
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const readings = {};

  for await (const line of rl) {
    if (!line) {
      break
    }
    const trimmedLine = line.trim();
    if (trimmedLine) {
      const parts = trimmedLine.split("\t");
      if (parts.length >= 3) {
        const codePointPart = parts[0];
        if (codePointPart.startsWith("U+")) {
          const codePoint = parseInt(codePointPart.substring(2), 16);
          if (!isNaN(codePoint) && codePoint >= 0 && codePoint <= 0x10ffff) {
            const char = String.fromCodePoint(codePoint);
            const property = parts[1];
            const value = parts.slice(2).join(", ");
            if (propertyList.includes(property)) {
              const propertyIndex = propertyList.indexOf(property);
              if (!readings[char]) {
                readings[char] = [];
              } 
              readings[char][propertyIndex] = value;
            }
          }
        }
      }
    }
  }
 

  // 修改为根据输出路径参数写入文件
  await fs.promises.writeFile(outputPath, JSON.stringify(readings, null, 2));

  console.log(`转换完成，输出文件已保存。转换了${Object.keys(readings).length}个有用汉字。`);
}

// 调用函数时可以传入自定义的输出路径，不传则默认保存在同一目录
convertUnihanReadingsToJson(inputFilePath, outputFilePath);