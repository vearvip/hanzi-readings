# hanzi-readings

`@vearvip/hanzi-readings` 是一个npm包，提供了一种简便方法来查询汉字在多种方言和语言中的读音，包括普通话、粤语、日语（音读/训读）、韩语、越南语等，基于Unihan数据库。

## 特性

- 支持查询汉字在多种方言和语言中的读音
- 提供简单易用的异步API
- 基于Unihan数据库

## 安装

通过npm安装：

```bash
npm install @vearvip/hanzi-readings
```

通过yarn安装：

```bash
yarn add @vearvip/hanzi-readings
```

## 使用

```javascript
import { queryReading } from '@vearvip/hanzi-readings';

// 查询普通话读音
const mandarinReading = await queryReading('汉', 'mandarin');
console.log(`Mandarin reading of 汉: ${mandarinReading}`);
// Mandarin reading of 汉: hàn

// 查询粤语读音
const cantoneseReading = await queryReading('汉', 'cantonese');
console.log(`Cantonese reading of 汉: ${cantoneseReading}`);
// Cantonese reading of 汉: hon3

// 查询日语音读
const japaneseOnReading = await queryReading('漢', 'japaneseOn');
console.log(`Japanese On reading of 漢: ${japaneseOnReading}`);
// Japanese On reading of 漢: KAN

// 查询日语训读
const japaneseKunReading = await queryReading('漢', 'japaneseKun');
console.log(`Japanese Kun reading of 漢: ${japaneseKunReading}`);
// Japanese Kun reading of 漢: KARA

// 查询韩语读音
const koreanReading = await queryReading('汉', 'korean');
console.log(`Korean reading of 汉: ${koreanReading}`);
// Korean reading of 汉: 未找到 汉 在 korean 中的读音。

// 查询越南语读音
const vietnameseReading = await queryReading('漢', 'vietnamese');
console.log(`Vietnamese reading of 漢: ${vietnameseReading}`);
// Vietnamese reading of 漢: hán
 
```

## API

### `queryReading`

```javascript
queryReading(char: string, dialect: string): Promise<string | undefined>
```

查询给定汉字在指定方言/语言中的读音。`dialect` 参数是一个字符串，指定了要查询的方言，例如 `'mandarin'`、`'cantonese'` 等。函数返回一个Promise，在找到读音时会解析为读音字符串，否则解析为`undefined`。
 
 
## 支持的方言/语言

当前包支持以下方言/语言的读音查询：

- 普通话（`mandarin`）
- 粤语（`cantonese`）
- 日语音读（`japaneseOn`）
- 日语训读（`japaneseKun`）
- 韩语（`korean`）
- 越南语（`vietnamese`） 

## 贡献

如果您对改进此包有任何建议或想要报告bug，请随时打开issue或提交pull request。

## 许可证

此项目遵循MIT许可证发布。更多详情请查看[LICENSE](LICENSE)文件。

 
