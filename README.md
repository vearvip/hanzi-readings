**README.md**

# @vearvip/hanzi-readings

## 简介

`@vearvip/hanzi-readings` 是一个方便的JavaScript库，旨在提供快速查询汉字在多种东亚语言及方言中读音的功能。此模块基于[Unihan数据库](https://www.unicode.org/charts/unihan.html)构建，封装了一个简洁的API来检索包括粤语、日语、韩语、普通话及越南语在内的多种读音数据，适用于任何需要汉字多语言发音信息的应用场景。

## 安装

使用npm或yarn安装：

```bash
npm install @vearvip/hanzi-readings
# 或者
yarn add @vearvip/hanzi-readings
```

## 快速开始

```javascript
import { queryReading } from '@vearvip/hanzi-readings';

// 查询汉字“一”的粤语、日语、韩语、普通话及越南语读音
const readings = queryReading('一');
console.log(readings);
/*
输出:
{
  kCantonese: "jat1",
  kJapaneseKun: "HITOTSU HITOTABI HAJIME",
  kJapaneseOn: "ICHI ITSU",
  kKorean: "IL",
  kMandarin: "yī",
  kVietnamese: "nhất",
}
*/
```

## API

### `queryReading(character: string): Object | undefined`

- **character**: `string` - 需要查询的单个汉字。
- **返回值**: `Object` 或 `undefined` - 一个对象，包含了字符在不同语言/方言中的读音。如果查询的字符不存在于数据库中，则返回`undefined`。

## 数据来源

本库数据源自Unicode联盟维护的权威[Unihan数据库](https://www.unicode.org/charts/unihan.html)，确保了读音数据的准确性和完整性。

## 反馈
如果您在使用过程中遇到任何问题，或者有新功能需求和建议，欢迎通过GitHub仓库提交Issue或Pull Request，我们非常期待您的参与和反馈。

---

通过以上`README.md`，用户可以清晰地了解到`@vearvip/hanzi-readings`库的安装方法、基本使用示例、提供的API接口以及如何参与项目贡献，从而轻松地将其融入到自己的开发项目中。