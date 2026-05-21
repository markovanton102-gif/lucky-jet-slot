export const site = {
  name: 'Lucky Jet — игра в казино',
  domain: 'https://lucky-jet-slot.fun',
  lang: 'ru',
} as const;

export const affiliateUrl =
  import.meta.env.PUBLIC_AFFILIATE_URL ?? 'https://example.com/ref';

export const nav = [
  { href: '/', label: 'Главная' },
  { href: '/otzyvy/', label: 'Отзывы' },
  { href: '/kak-igrat/', label: 'Как играть' },
  { href: '/skachat/', label: 'Скачать' },
  { href: '/demo/', label: 'Демо' },
  { href: '/gde-igrat/', label: 'Где играть' },
  { href: '/analogi/', label: 'Аналоги' },
] as const;
