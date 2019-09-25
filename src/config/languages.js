export const LANGUAGES = 
    [

        {
          "English": "Arabic",
          "alpha2": "AR"
        },
        {
          "English": "Azerbaijani",
          "alpha2": "AZ"
        },
        {
          "English": "Bashkir",
          "alpha2": "ba"
        },
        {
          "English": "Belarusian",
          "alpha2": "be"
        },
        {
          "English": "Bulgarian",
          "alpha2": "BG"
        },
        {
          "English": "Bengali",
          "alpha2": "BN"
        },
        {
          "English": "Catalan",
          "alpha2": "CA"
        },
        {
          "English": "Czech",
          "alpha2": "CS"
        },
        {
          "English": "Danish",
          "alpha2": "DA"
        },
        {
          "English": "German",
          "alpha2": "DE"
        },
        {
          "English": "Greek",
          "alpha2": "EL"
        },
        {
          "English": "English",
          "alpha2": "EN"
        },
        {
          "English": "Spanish",
          "alpha2": "ES"
        },
        {
          "English": "Estonian",
          "alpha2": "ET"
        },
        {
          "English": "Persian",
          "alpha2": "FA"
        },
        {
          "English": "Finnish",
          "alpha2": "FI"
        },
        {
          "English": "French",
          "alpha2": "FR"
        },
        {
          "English": "Hebrew",
          "alpha2": "HE"
        },
        {
          "English": "Hindi",
          "alpha2": "HI"
        },
        {
          "English": "Croatian",
          "alpha2": "HR"
        },
        {
          "English": "Hungarian",
          "alpha2": "HU"
        },
        {
          "English": "Indonesian",
          "alpha2": "ID"
        },
        {
          "English": "Icelandic",
          "alpha2": "IS"
        },
        {
          "English": "Italian",
          "alpha2": "IT"
        },
        {
          "English": "Japanese",
          "alpha2": "JA"
        },
        {
          "English": "Javanese",
          "alpha2": "JV"
        },
        {
          "English": "Korean",
          "alpha2": "KO"
        },
        {
          "English": "Lithuanian",
          "alpha2": "LT"
        },
        {
          "English": "Latvian",
          "alpha2": "LV"
        },
        {
          "English": "Malay",
          "alpha2": "MS"
        },
        {
          "English": "Dutch; Flemish",
          "alpha2": "NL"
        },
        {
          "English": "Norwegian",
          "alpha2": "NO"
        },
        {
          "English": "Polish",
          "alpha2": "PL"
        },
        {
          "English": "Portuguese",
          "alpha2": "PT-BR"
        },
        {
          "English": "Romanian",
          "alpha2": "RO"
        },
        {
          "English": "Russian",
          "alpha2": "RU"
        },
        {
          "English": "Slovak",
          "alpha2": "SK"
        },
        {
          "English": "Slovenian",
          "alpha2": "SL"
        },
        {
          "English": "Albanian",
          "alpha2": "SQ"
        },
        {
          "English": "Swedish",
          "alpha2": "SV"
        },
        {
          "English": "Thai",
          "alpha2": "TH"
        },
        {
          "English": "Tagalog",
          "alpha2": "TL"
        },
        {
          "English": "Turkish",
          "alpha2": "TR"
        },
        {
          "English": "Ukrainian",
          "alpha2": "UK"
        },
        {
          "English": "Urdu",
          "alpha2": "UR"
        },
        {
          "English": "Vietnamese",
          "alpha2": "VI"
        },
        {
          "English": "Chinese",
          "alpha2": "ZH"
        },
      ]

export function switchLanguage(language) {
    const unknown = 'unknown';
    const languagePrint = LANGUAGES.find(object => object.alpha2 === language)
    if (!languagePrint) {
        return unknown;
    } else {
        return languagePrint.English;
    }  
}