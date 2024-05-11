const fs = require("fs");
const readline = require("readline");
const path = require("path");

const inputFilePath = path.join(__dirname, "Unihan_Readings.txt");
const outputMandarinFilePath = path.join(
  __dirname,
  "Unihan_Mandarin_Readings.json",
);
const outputCantoneseFilePath = path.join(
  __dirname,
  "Unihan_Cantonese_Readings.json",
);
const outputJapaneseKunFilePath = path.join(
  __dirname,
  "Unihan_JapaneseKun_Readings.json",
);
const outputJapaneseOnFilePath = path.join(
  __dirname,
  "Unihan_JapaneseOn_Readings.json",
);
const outputKoreanFilePath = path.join(
  __dirname,
  "Unihan_Korean_Readings.json",
);
const outputVietnameseFilePath = path.join(
  __dirname,
  "Unihan_Vietnamese_Readings.json",
);

async function convertUnihanReadingsToJson(inputPath, outputPaths) {
  const fileStream = fs.createReadStream(inputPath, { encoding: "utf8" });
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const readings = {
    mandarin: {},
    cantonese: {},
    japaneseKun: {},
    japaneseOn: {},
    korean: {},
    vietnamese: {},
  };

  for await (const line of rl) {
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

            switch (property) {
              case "kMandarin":
                readings.mandarin[char] = value;
                break;
              case "kCantonese":
                readings.cantonese[char] = value;
                break;
              case "kJapaneseKun":
                readings.japaneseKun[char] = value;
                break;
              case "kJapaneseOn":
                readings.japaneseOn[char] = value;
                break;
              case "kKorean":
                readings.korean[char] = value;
                break;
              case "kVietnamese":
                readings.vietnamese[char] = value;
                break;
            }
          }
        }
      }
    }
  }

  rl.close();
  fileStream.close();

  // 将结果写入到对应的输出文件
  await Promise.all(
    Object.entries(outputPaths).map(([key, filePath]) =>
      fs.promises.writeFile(filePath, JSON.stringify(readings[key], null, 2)),
    ),
  );

  console.log("转换完成，输出文件保存在指定的路径。");
}

convertUnihanReadingsToJson(inputFilePath, {
  mandarin: outputMandarinFilePath,
  cantonese: outputCantoneseFilePath,
  japaneseKun: outputJapaneseKunFilePath,
  japaneseOn: outputJapaneseOnFilePath,
  korean: outputKoreanFilePath,
  vietnamese: outputVietnameseFilePath,
}).catch((error) => {
  console.error("An error occurred:", error);
});
