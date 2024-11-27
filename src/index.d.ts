interface ReadingResult {
    kCantonese?: string;
    kJapaneseKun?: string;
    kJapaneseOn?: string;
    kKorean?: string;
    kMandarin?: string;
    kVietnamese?: string;
  }

  export function queryReading(hanzi: string): ReadingResult;
