interface LanguageProp {
  id: number;
  name: string;
  code: string;
  flag: string;
  isSelected: boolean;
}

export const languages: LanguageProp[] = [
  {
    id: 1,
    name: "English",
    code: "en",
    isSelected: true,
    flag: "🇬🇧",
  },
  {
    id: 2,
    name: "Spanish",
    code: "es",
    isSelected: false,
    flag: "🇪🇸",
  },
  {
    id: 3,
    name: "French",
    code: "fr",
    flag: "🇫🇷",
    isSelected: false,
  },
  {
    id: 4,
    name: "German",
    code: "de",
    flag: "🇩🇪",
    isSelected: false,
  },
  {
    id: 5,
    name: "Portuguese",
    code: "pt",
    flag: "🇵🇹",
    isSelected: false,
  },
  {
    id: 6,
    name: "Russian",
    code: "ru",
    flag: "🇷🇺",
    isSelected: false,
  },
  {
    id: 7,
    name: "Vietnamese",
    code: "vi",
    flag: "🇻🇳",
    isSelected: false,
  },
  {
    id: 8,
    name: "Indonesian",
    code: "id",
    flag: "🇮🇩",
    isSelected: false,
  },
  {
    id: 9,
    name: "Japanese",
    code: "ja",
    flag: "🇯🇵",
    isSelected: false,
  },
  {
    id: 10,
    name: "Korean",
    code: "ko",
    flag: "🇰🇷",
    isSelected: false,
  },
  {
    id: 11,
    name: "Chinese",
    code: "zh",
    flag: "🇨🇳",
    isSelected: false,
  },
];
