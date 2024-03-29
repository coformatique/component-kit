interface Currency {
  symbol: string;
  name: string;
  nativeSymbol: string;
  decimalDigits: number;
  rounding: number;
  code: string;
  nameInPlural: string;
}

export const currencies: Record<string, Currency> = {
  EUR: {
    symbol: '€',
    name: 'Euro',
    nativeSymbol: '€',
    decimalDigits: 2,
    rounding: 0,
    code: 'EUR',
    nameInPlural: 'euros',
  },
  USD: {
    symbol: '$',
    name: 'US Dollar',
    nativeSymbol: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'USD',
    nameInPlural: 'US dollars',
  },
  CAD: {
    symbol: 'CA$',
    name: 'Canadian Dollar',
    nativeSymbol: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'CAD',
    nameInPlural: 'Canadian dollars',
  },
  AED: {
    symbol: 'AED',
    name: 'United Arab Emirates Dirham',
    nativeSymbol: 'د.إ.‏',
    decimalDigits: 2,
    rounding: 0,
    code: 'AED',
    nameInPlural: 'UAE dirhams',
  },
  AFN: {
    symbol: 'Af',
    name: 'Afghan Afghani',
    nativeSymbol: '؋',
    decimalDigits: 0,
    rounding: 0,
    code: 'AFN',
    nameInPlural: 'Afghan Afghanis',
  },
  ALL: {
    symbol: 'ALL',
    name: 'Albanian Lek',
    nativeSymbol: 'Lek',
    decimalDigits: 0,
    rounding: 0,
    code: 'ALL',
    nameInPlural: 'Albanian lekë',
  },
  AMD: {
    symbol: 'AMD',
    name: 'Armenian Dram',
    nativeSymbol: 'դր.',
    decimalDigits: 0,
    rounding: 0,
    code: 'AMD',
    nameInPlural: 'Armenian drams',
  },
  ARS: {
    symbol: 'AR$',
    name: 'Argentine Peso',
    nativeSymbol: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'ARS',
    nameInPlural: 'Argentine pesos',
  },
  AUD: {
    symbol: 'AU$',
    name: 'Australian Dollar',
    nativeSymbol: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'AUD',
    nameInPlural: 'Australian dollars',
  },
  BAM: {
    symbol: 'KM',
    name: 'Bosnia-Herzegovina Convertible Mark',
    nativeSymbol: 'KM',
    decimalDigits: 2,
    rounding: 0,
    code: 'BAM',
    nameInPlural: 'Bosnia-Herzegovina convertible marks',
  },
  BDT: {
    symbol: 'Tk',
    name: 'Bangladeshi Taka',
    nativeSymbol: '৳',
    decimalDigits: 2,
    rounding: 0,
    code: 'BDT',
    nameInPlural: 'Bangladeshi takas',
  },
  BGN: {
    symbol: 'BGN',
    name: 'Bulgarian Lev',
    nativeSymbol: 'лв.',
    decimalDigits: 2,
    rounding: 0,
    code: 'BGN',
    nameInPlural: 'Bulgarian leva',
  },
  BHD: {
    symbol: 'BD',
    name: 'Bahraini Dinar',
    nativeSymbol: 'د.ب.‏',
    decimalDigits: 3,
    rounding: 0,
    code: 'BHD',
    nameInPlural: 'Bahraini dinars',
  },
  BIF: {
    symbol: 'FBu',
    name: 'Burundian Franc',
    nativeSymbol: 'FBu',
    decimalDigits: 0,
    rounding: 0,
    code: 'BIF',
    nameInPlural: 'Burundian francs',
  },
  BND: {
    symbol: 'BN$',
    name: 'Brunei Dollar',
    nativeSymbol: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'BND',
    nameInPlural: 'Brunei dollars',
  },
  BOB: {
    symbol: 'Bs',
    name: 'Bolivian Boliviano',
    nativeSymbol: 'Bs',
    decimalDigits: 2,
    rounding: 0,
    code: 'BOB',
    nameInPlural: 'Bolivian bolivianos',
  },
  BRL: {
    symbol: 'R$',
    name: 'Brazilian Real',
    nativeSymbol: 'R$',
    decimalDigits: 2,
    rounding: 0,
    code: 'BRL',
    nameInPlural: 'Brazilian reals',
  },
  BWP: {
    symbol: 'BWP',
    name: 'Botswanan Pula',
    nativeSymbol: 'P',
    decimalDigits: 2,
    rounding: 0,
    code: 'BWP',
    nameInPlural: 'Botswanan pulas',
  },
  BYN: {
    symbol: 'Br',
    name: 'Belarusian Ruble',
    nativeSymbol: 'руб.',
    decimalDigits: 2,
    rounding: 0,
    code: 'BYN',
    nameInPlural: 'Belarusian rubles',
  },
  BZD: {
    symbol: 'BZ$',
    name: 'Belize Dollar',
    nativeSymbol: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'BZD',
    nameInPlural: 'Belize dollars',
  },
  CDF: {
    symbol: 'CDF',
    name: 'Congolese Franc',
    nativeSymbol: 'FrCD',
    decimalDigits: 2,
    rounding: 0,
    code: 'CDF',
    nameInPlural: 'Congolese francs',
  },
  CHF: {
    symbol: 'CHF',
    name: 'Swiss Franc',
    nativeSymbol: 'CHF',
    decimalDigits: 2,
    rounding: 0.05,
    code: 'CHF',
    nameInPlural: 'Swiss francs',
  },
  CLP: {
    symbol: 'CL$',
    name: 'Chilean Peso',
    nativeSymbol: '$',
    decimalDigits: 0,
    rounding: 0,
    code: 'CLP',
    nameInPlural: 'Chilean pesos',
  },
  CNY: {
    symbol: 'CN¥',
    name: 'Chinese Yuan',
    nativeSymbol: 'CN¥',
    decimalDigits: 2,
    rounding: 0,
    code: 'CNY',
    nameInPlural: 'Chinese yuan',
  },
  COP: {
    symbol: 'CO$',
    name: 'Colombian Peso',
    nativeSymbol: '$',
    decimalDigits: 0,
    rounding: 0,
    code: 'COP',
    nameInPlural: 'Colombian pesos',
  },
  CRC: {
    symbol: '₡',
    name: 'Costa Rican Colón',
    nativeSymbol: '₡',
    decimalDigits: 0,
    rounding: 0,
    code: 'CRC',
    nameInPlural: 'Costa Rican colóns',
  },
  CVE: {
    symbol: 'CV$',
    name: 'Cape Verdean Escudo',
    nativeSymbol: 'CV$',
    decimalDigits: 2,
    rounding: 0,
    code: 'CVE',
    nameInPlural: 'Cape Verdean escudos',
  },
  CZK: {
    symbol: 'Kč',
    name: 'Czech Republic Koruna',
    nativeSymbol: 'Kč',
    decimalDigits: 2,
    rounding: 0,
    code: 'CZK',
    nameInPlural: 'Czech Republic korunas',
  },
  DJF: {
    symbol: 'Fdj',
    name: 'Djiboutian Franc',
    nativeSymbol: 'Fdj',
    decimalDigits: 0,
    rounding: 0,
    code: 'DJF',
    nameInPlural: 'Djiboutian francs',
  },
  DKK: {
    symbol: 'Dkr',
    name: 'Danish Krone',
    nativeSymbol: 'kr',
    decimalDigits: 2,
    rounding: 0,
    code: 'DKK',
    nameInPlural: 'Danish kroner',
  },
  DOP: {
    symbol: 'RD$',
    name: 'Dominican Peso',
    nativeSymbol: 'RD$',
    decimalDigits: 2,
    rounding: 0,
    code: 'DOP',
    nameInPlural: 'Dominican pesos',
  },
  DZD: {
    symbol: 'DA',
    name: 'Algerian Dinar',
    nativeSymbol: 'د.ج.‏',
    decimalDigits: 2,
    rounding: 0,
    code: 'DZD',
    nameInPlural: 'Algerian dinars',
  },
  EEK: {
    symbol: 'Ekr',
    name: 'Estonian Kroon',
    nativeSymbol: 'kr',
    decimalDigits: 2,
    rounding: 0,
    code: 'EEK',
    nameInPlural: 'Estonian kroons',
  },
  EGP: {
    symbol: 'EGP',
    name: 'Egyptian Pound',
    nativeSymbol: 'ج.م.‏',
    decimalDigits: 2,
    rounding: 0,
    code: 'EGP',
    nameInPlural: 'Egyptian pounds',
  },
  ERN: {
    symbol: 'Nfk',
    name: 'Eritrean Nakfa',
    nativeSymbol: 'Nfk',
    decimalDigits: 2,
    rounding: 0,
    code: 'ERN',
    nameInPlural: 'Eritrean nakfas',
  },
  ETB: {
    symbol: 'Br',
    name: 'Ethiopian Birr',
    nativeSymbol: 'Br',
    decimalDigits: 2,
    rounding: 0,
    code: 'ETB',
    nameInPlural: 'Ethiopian birrs',
  },
  GBP: {
    symbol: '£',
    name: 'British Pound Sterling',
    nativeSymbol: '£',
    decimalDigits: 2,
    rounding: 0,
    code: 'GBP',
    nameInPlural: 'British pounds sterling',
  },
  GEL: {
    symbol: 'GEL',
    name: 'Georgian Lari',
    nativeSymbol: 'GEL',
    decimalDigits: 2,
    rounding: 0,
    code: 'GEL',
    nameInPlural: 'Georgian laris',
  },
  GHS: {
    symbol: 'GH₵',
    name: 'Ghanaian Cedi',
    nativeSymbol: 'GH₵',
    decimalDigits: 2,
    rounding: 0,
    code: 'GHS',
    nameInPlural: 'Ghanaian cedis',
  },
  GNF: {
    symbol: 'FG',
    name: 'Guinean Franc',
    nativeSymbol: 'FG',
    decimalDigits: 0,
    rounding: 0,
    code: 'GNF',
    nameInPlural: 'Guinean francs',
  },
  GTQ: {
    symbol: 'GTQ',
    name: 'Guatemalan Quetzal',
    nativeSymbol: 'Q',
    decimalDigits: 2,
    rounding: 0,
    code: 'GTQ',
    nameInPlural: 'Guatemalan quetzals',
  },
  HKD: {
    symbol: 'HK$',
    name: 'Hong Kong Dollar',
    nativeSymbol: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'HKD',
    nameInPlural: 'Hong Kong dollars',
  },
  HNL: {
    symbol: 'HNL',
    name: 'Honduran Lempira',
    nativeSymbol: 'L',
    decimalDigits: 2,
    rounding: 0,
    code: 'HNL',
    nameInPlural: 'Honduran lempiras',
  },
  HRK: {
    symbol: 'kn',
    name: 'Croatian Kuna',
    nativeSymbol: 'kn',
    decimalDigits: 2,
    rounding: 0,
    code: 'HRK',
    nameInPlural: 'Croatian kunas',
  },
  HUF: {
    symbol: 'Ft',
    name: 'Hungarian Forint',
    nativeSymbol: 'Ft',
    decimalDigits: 0,
    rounding: 0,
    code: 'HUF',
    nameInPlural: 'Hungarian forints',
  },
  IDR: {
    symbol: 'Rp',
    name: 'Indonesian Rupiah',
    nativeSymbol: 'Rp',
    decimalDigits: 0,
    rounding: 0,
    code: 'IDR',
    nameInPlural: 'Indonesian rupiahs',
  },
  ILS: {
    symbol: '₪',
    name: 'Israeli New Sheqel',
    nativeSymbol: '₪',
    decimalDigits: 2,
    rounding: 0,
    code: 'ILS',
    nameInPlural: 'Israeli new sheqels',
  },
  INR: {
    symbol: 'Rs',
    name: 'Indian Rupee',
    nativeSymbol: 'টকা',
    decimalDigits: 2,
    rounding: 0,
    code: 'INR',
    nameInPlural: 'Indian rupees',
  },
  IQD: {
    symbol: 'IQD',
    name: 'Iraqi Dinar',
    nativeSymbol: 'د.ع.‏',
    decimalDigits: 0,
    rounding: 0,
    code: 'IQD',
    nameInPlural: 'Iraqi dinars',
  },
  IRR: {
    symbol: 'IRR',
    name: 'Iranian Rial',
    nativeSymbol: '﷼',
    decimalDigits: 0,
    rounding: 0,
    code: 'IRR',
    nameInPlural: 'Iranian rials',
  },
  ISK: {
    symbol: 'Ikr',
    name: 'Icelandic Króna',
    nativeSymbol: 'kr',
    decimalDigits: 0,
    rounding: 0,
    code: 'ISK',
    nameInPlural: 'Icelandic krónur',
  },
  JMD: {
    symbol: 'J$',
    name: 'Jamaican Dollar',
    nativeSymbol: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'JMD',
    nameInPlural: 'Jamaican dollars',
  },
  JOD: {
    symbol: 'JD',
    name: 'Jordanian Dinar',
    nativeSymbol: 'د.أ.‏',
    decimalDigits: 3,
    rounding: 0,
    code: 'JOD',
    nameInPlural: 'Jordanian dinars',
  },
  JPY: {
    symbol: '¥',
    name: 'Japanese Yen',
    nativeSymbol: '￥',
    decimalDigits: 0,
    rounding: 0,
    code: 'JPY',
    nameInPlural: 'Japanese yen',
  },
  KES: {
    symbol: 'Ksh',
    name: 'Kenyan Shilling',
    nativeSymbol: 'Ksh',
    decimalDigits: 2,
    rounding: 0,
    code: 'KES',
    nameInPlural: 'Kenyan shillings',
  },
  KHR: {
    symbol: 'KHR',
    name: 'Cambodian Riel',
    nativeSymbol: '៛',
    decimalDigits: 2,
    rounding: 0,
    code: 'KHR',
    nameInPlural: 'Cambodian riels',
  },
  KMF: {
    symbol: 'CF',
    name: 'Comorian Franc',
    nativeSymbol: 'FC',
    decimalDigits: 0,
    rounding: 0,
    code: 'KMF',
    nameInPlural: 'Comorian francs',
  },
  KRW: {
    symbol: '₩',
    name: 'South Korean Won',
    nativeSymbol: '₩',
    decimalDigits: 0,
    rounding: 0,
    code: 'KRW',
    nameInPlural: 'South Korean won',
  },
  KWD: {
    symbol: 'KD',
    name: 'Kuwaiti Dinar',
    nativeSymbol: 'د.ك.‏',
    decimalDigits: 3,
    rounding: 0,
    code: 'KWD',
    nameInPlural: 'Kuwaiti dinars',
  },
  KZT: {
    symbol: 'KZT',
    name: 'Kazakhstani Tenge',
    nativeSymbol: 'тңг.',
    decimalDigits: 2,
    rounding: 0,
    code: 'KZT',
    nameInPlural: 'Kazakhstani tenges',
  },
  LBP: {
    symbol: 'LB£',
    name: 'Lebanese Pound',
    nativeSymbol: 'ل.ل.‏',
    decimalDigits: 0,
    rounding: 0,
    code: 'LBP',
    nameInPlural: 'Lebanese pounds',
  },
  LKR: {
    symbol: 'SLRs',
    name: 'Sri Lankan Rupee',
    nativeSymbol: 'SL Re',
    decimalDigits: 2,
    rounding: 0,
    code: 'LKR',
    nameInPlural: 'Sri Lankan rupees',
  },
  LTL: {
    symbol: 'Lt',
    name: 'Lithuanian Litas',
    nativeSymbol: 'Lt',
    decimalDigits: 2,
    rounding: 0,
    code: 'LTL',
    nameInPlural: 'Lithuanian litai',
  },
  LVL: {
    symbol: 'Ls',
    name: 'Latvian Lats',
    nativeSymbol: 'Ls',
    decimalDigits: 2,
    rounding: 0,
    code: 'LVL',
    nameInPlural: 'Latvian lati',
  },
  LYD: {
    symbol: 'LD',
    name: 'Libyan Dinar',
    nativeSymbol: 'د.ل.‏',
    decimalDigits: 3,
    rounding: 0,
    code: 'LYD',
    nameInPlural: 'Libyan dinars',
  },
  MAD: {
    symbol: 'MAD',
    name: 'Moroccan Dirham',
    nativeSymbol: 'د.م.‏',
    decimalDigits: 2,
    rounding: 0,
    code: 'MAD',
    nameInPlural: 'Moroccan dirhams',
  },
  MDL: {
    symbol: 'MDL',
    name: 'Moldovan Leu',
    nativeSymbol: 'MDL',
    decimalDigits: 2,
    rounding: 0,
    code: 'MDL',
    nameInPlural: 'Moldovan lei',
  },
  MGA: {
    symbol: 'MGA',
    name: 'Malagasy Ariary',
    nativeSymbol: 'MGA',
    decimalDigits: 0,
    rounding: 0,
    code: 'MGA',
    nameInPlural: 'Malagasy Ariaries',
  },
  MKD: {
    symbol: 'MKD',
    name: 'Macedonian Denar',
    nativeSymbol: 'MKD',
    decimalDigits: 2,
    rounding: 0,
    code: 'MKD',
    nameInPlural: 'Macedonian denari',
  },
  MMK: {
    symbol: 'MMK',
    name: 'Myanma Kyat',
    nativeSymbol: 'K',
    decimalDigits: 0,
    rounding: 0,
    code: 'MMK',
    nameInPlural: 'Myanma kyats',
  },
  MOP: {
    symbol: 'MOP$',
    name: 'Macanese Pataca',
    nativeSymbol: 'MOP$',
    decimalDigits: 2,
    rounding: 0,
    code: 'MOP',
    nameInPlural: 'Macanese patacas',
  },
  MUR: {
    symbol: 'MURs',
    name: 'Mauritian Rupee',
    nativeSymbol: 'MURs',
    decimalDigits: 0,
    rounding: 0,
    code: 'MUR',
    nameInPlural: 'Mauritian rupees',
  },
  MXN: {
    symbol: 'MX$',
    name: 'Mexican Peso',
    nativeSymbol: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'MXN',
    nameInPlural: 'Mexican pesos',
  },
  MYR: {
    symbol: 'RM',
    name: 'Malaysian Ringgit',
    nativeSymbol: 'RM',
    decimalDigits: 2,
    rounding: 0,
    code: 'MYR',
    nameInPlural: 'Malaysian ringgits',
  },
  MZN: {
    symbol: 'MTn',
    name: 'Mozambican Metical',
    nativeSymbol: 'MTn',
    decimalDigits: 2,
    rounding: 0,
    code: 'MZN',
    nameInPlural: 'Mozambican meticals',
  },
  NAD: {
    symbol: 'N$',
    name: 'Namibian Dollar',
    nativeSymbol: 'N$',
    decimalDigits: 2,
    rounding: 0,
    code: 'NAD',
    nameInPlural: 'Namibian dollars',
  },
  NGN: {
    symbol: '₦',
    name: 'Nigerian Naira',
    nativeSymbol: '₦',
    decimalDigits: 2,
    rounding: 0,
    code: 'NGN',
    nameInPlural: 'Nigerian nairas',
  },
  NIO: {
    symbol: 'C$',
    name: 'Nicaraguan Córdoba',
    nativeSymbol: 'C$',
    decimalDigits: 2,
    rounding: 0,
    code: 'NIO',
    nameInPlural: 'Nicaraguan córdobas',
  },
  NOK: {
    symbol: 'Nkr',
    name: 'Norwegian Krone',
    nativeSymbol: 'kr',
    decimalDigits: 2,
    rounding: 0,
    code: 'NOK',
    nameInPlural: 'Norwegian kroner',
  },
  NPR: {
    symbol: 'NPRs',
    name: 'Nepalese Rupee',
    nativeSymbol: 'नेरू',
    decimalDigits: 2,
    rounding: 0,
    code: 'NPR',
    nameInPlural: 'Nepalese rupees',
  },
  NZD: {
    symbol: 'NZ$',
    name: 'New Zealand Dollar',
    nativeSymbol: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'NZD',
    nameInPlural: 'New Zealand dollars',
  },
  OMR: {
    symbol: 'OMR',
    name: 'Omani Rial',
    nativeSymbol: 'ر.ع.‏',
    decimalDigits: 3,
    rounding: 0,
    code: 'OMR',
    nameInPlural: 'Omani rials',
  },
  PAB: {
    symbol: 'B/.',
    name: 'Panamanian Balboa',
    nativeSymbol: 'B/.',
    decimalDigits: 2,
    rounding: 0,
    code: 'PAB',
    nameInPlural: 'Panamanian balboas',
  },
  PEN: {
    symbol: 'S/.',
    name: 'Peruvian Nuevo Sol',
    nativeSymbol: 'S/.',
    decimalDigits: 2,
    rounding: 0,
    code: 'PEN',
    nameInPlural: 'Peruvian nuevos soles',
  },
  PHP: {
    symbol: '₱',
    name: 'Philippine Peso',
    nativeSymbol: '₱',
    decimalDigits: 2,
    rounding: 0,
    code: 'PHP',
    nameInPlural: 'Philippine pesos',
  },
  PKR: {
    symbol: 'PKRs',
    name: 'Pakistani Rupee',
    nativeSymbol: '₨',
    decimalDigits: 0,
    rounding: 0,
    code: 'PKR',
    nameInPlural: 'Pakistani rupees',
  },
  PLN: {
    symbol: 'zł',
    name: 'Polish Zloty',
    nativeSymbol: 'zł',
    decimalDigits: 2,
    rounding: 0,
    code: 'PLN',
    nameInPlural: 'Polish zlotys',
  },
  PYG: {
    symbol: '₲',
    name: 'Paraguayan Guarani',
    nativeSymbol: '₲',
    decimalDigits: 0,
    rounding: 0,
    code: 'PYG',
    nameInPlural: 'Paraguayan guaranis',
  },
  QAR: {
    symbol: 'QR',
    name: 'Qatari Rial',
    nativeSymbol: 'ر.ق.‏',
    decimalDigits: 2,
    rounding: 0,
    code: 'QAR',
    nameInPlural: 'Qatari rials',
  },
  RON: {
    symbol: 'RON',
    name: 'Romanian Leu',
    nativeSymbol: 'RON',
    decimalDigits: 2,
    rounding: 0,
    code: 'RON',
    nameInPlural: 'Romanian lei',
  },
  RSD: {
    symbol: 'din.',
    name: 'Serbian Dinar',
    nativeSymbol: 'дин.',
    decimalDigits: 0,
    rounding: 0,
    code: 'RSD',
    nameInPlural: 'Serbian dinars',
  },
  RUB: {
    symbol: 'RUB',
    name: 'Russian Ruble',
    nativeSymbol: '₽.',
    decimalDigits: 2,
    rounding: 0,
    code: 'RUB',
    nameInPlural: 'Russian rubles',
  },
  RWF: {
    symbol: 'RWF',
    name: 'Rwandan Franc',
    nativeSymbol: 'FR',
    decimalDigits: 0,
    rounding: 0,
    code: 'RWF',
    nameInPlural: 'Rwandan francs',
  },
  SAR: {
    symbol: 'SR',
    name: 'Saudi Riyal',
    nativeSymbol: 'ر.س.‏',
    decimalDigits: 2,
    rounding: 0,
    code: 'SAR',
    nameInPlural: 'Saudi riyals',
  },
  SDG: {
    symbol: 'SDG',
    name: 'Sudanese Pound',
    nativeSymbol: 'SDG',
    decimalDigits: 2,
    rounding: 0,
    code: 'SDG',
    nameInPlural: 'Sudanese pounds',
  },
  SEK: {
    symbol: 'Skr',
    name: 'Swedish Krona',
    nativeSymbol: 'kr',
    decimalDigits: 2,
    rounding: 0,
    code: 'SEK',
    nameInPlural: 'Swedish kronor',
  },
  SGD: {
    symbol: 'S$',
    name: 'Singapore Dollar',
    nativeSymbol: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'SGD',
    nameInPlural: 'Singapore dollars',
  },
  SOS: {
    symbol: 'Ssh',
    name: 'Somali Shilling',
    nativeSymbol: 'Ssh',
    decimalDigits: 0,
    rounding: 0,
    code: 'SOS',
    nameInPlural: 'Somali shillings',
  },
  SYP: {
    symbol: 'SY£',
    name: 'Syrian Pound',
    nativeSymbol: 'ل.س.‏',
    decimalDigits: 0,
    rounding: 0,
    code: 'SYP',
    nameInPlural: 'Syrian pounds',
  },
  THB: {
    symbol: '฿',
    name: 'Thai Baht',
    nativeSymbol: '฿',
    decimalDigits: 2,
    rounding: 0,
    code: 'THB',
    nameInPlural: 'Thai baht',
  },
  TND: {
    symbol: 'DT',
    name: 'Tunisian Dinar',
    nativeSymbol: 'د.ت.‏',
    decimalDigits: 3,
    rounding: 0,
    code: 'TND',
    nameInPlural: 'Tunisian dinars',
  },
  TOP: {
    symbol: 'T$',
    name: 'Tongan Paʻanga',
    nativeSymbol: 'T$',
    decimalDigits: 2,
    rounding: 0,
    code: 'TOP',
    nameInPlural: 'Tongan paʻanga',
  },
  TRY: {
    symbol: 'TL',
    name: 'Turkish Lira',
    nativeSymbol: 'TL',
    decimalDigits: 2,
    rounding: 0,
    code: 'TRY',
    nameInPlural: 'Turkish Lira',
  },
  TTD: {
    symbol: 'TT$',
    name: 'Trinidad and Tobago Dollar',
    nativeSymbol: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'TTD',
    nameInPlural: 'Trinidad and Tobago dollars',
  },
  TWD: {
    symbol: 'NT$',
    name: 'New Taiwan Dollar',
    nativeSymbol: 'NT$',
    decimalDigits: 2,
    rounding: 0,
    code: 'TWD',
    nameInPlural: 'New Taiwan dollars',
  },
  TZS: {
    symbol: 'TSh',
    name: 'Tanzanian Shilling',
    nativeSymbol: 'TSh',
    decimalDigits: 0,
    rounding: 0,
    code: 'TZS',
    nameInPlural: 'Tanzanian shillings',
  },
  UAH: {
    symbol: '₴',
    name: 'Ukrainian Hryvnia',
    nativeSymbol: '₴',
    decimalDigits: 2,
    rounding: 0,
    code: 'UAH',
    nameInPlural: 'Ukrainian hryvnias',
  },
  UGX: {
    symbol: 'USh',
    name: 'Ugandan Shilling',
    nativeSymbol: 'USh',
    decimalDigits: 0,
    rounding: 0,
    code: 'UGX',
    nameInPlural: 'Ugandan shillings',
  },
  UYU: {
    symbol: '$U',
    name: 'Uruguayan Peso',
    nativeSymbol: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'UYU',
    nameInPlural: 'Uruguayan pesos',
  },
  UZS: {
    symbol: 'UZS',
    name: 'Uzbekistan Som',
    nativeSymbol: 'UZS',
    decimalDigits: 0,
    rounding: 0,
    code: 'UZS',
    nameInPlural: 'Uzbekistan som',
  },
  VEF: {
    symbol: 'Bs.F.',
    name: 'Venezuelan Bolívar',
    nativeSymbol: 'Bs.F.',
    decimalDigits: 2,
    rounding: 0,
    code: 'VEF',
    nameInPlural: 'Venezuelan bolívars',
  },
  VND: {
    symbol: '₫',
    name: 'Vietnamese Dong',
    nativeSymbol: '₫',
    decimalDigits: 0,
    rounding: 0,
    code: 'VND',
    nameInPlural: 'Vietnamese dong',
  },
  XAF: {
    symbol: 'FCFA',
    name: 'CFA Franc BEAC',
    nativeSymbol: 'FCFA',
    decimalDigits: 0,
    rounding: 0,
    code: 'XAF',
    nameInPlural: 'CFA francs BEAC',
  },
  XOF: {
    symbol: 'CFA',
    name: 'CFA Franc BCEAO',
    nativeSymbol: 'CFA',
    decimalDigits: 0,
    rounding: 0,
    code: 'XOF',
    nameInPlural: 'CFA francs BCEAO',
  },
  YER: {
    symbol: 'YR',
    name: 'Yemeni Rial',
    nativeSymbol: 'ر.ي.‏',
    decimalDigits: 0,
    rounding: 0,
    code: 'YER',
    nameInPlural: 'Yemeni rials',
  },
  ZAR: {
    symbol: 'R',
    name: 'South African Rand',
    nativeSymbol: 'R',
    decimalDigits: 2,
    rounding: 0,
    code: 'ZAR',
    nameInPlural: 'South African rand',
  },
  ZMK: {
    symbol: 'ZK',
    name: 'Zambian Kwacha',
    nativeSymbol: 'ZK',
    decimalDigits: 0,
    rounding: 0,
    code: 'ZMK',
    nameInPlural: 'Zambian kwachas',
  },
  ZWL: {
    symbol: 'ZWL$',
    name: 'Zimbabwean Dollar',
    nativeSymbol: 'ZWL$',
    decimalDigits: 0,
    rounding: 0,
    code: 'ZWL',
    nameInPlural: 'Zimbabwean Dollar',
  },
};
