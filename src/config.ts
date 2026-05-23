export const site = {
  name: 'Lucky Jet — игра в казино',
  domain: 'https://lucky-jet-slot.fun',
  lang: 'ru',
} as const;

export const affiliateUrl =
  import.meta.env.PUBLIC_AFFILIATE_URL ?? 'https://example.com/ref';

export const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL ?? '';
export const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? '';
export const reviewsEnabled = Boolean(supabaseUrl && supabaseAnonKey);
export const reviewsSiteSlug = 'lucky-jet-slot';

export const nav = [
  { href: '/', label: 'Главная' },
  { href: '/otzyvy/', label: 'Отзывы' },
  { href: '/kak-igrat/', label: 'Как играть' },
  { href: '/skachat/', label: 'Скачать' },
  { href: '/demo/', label: 'Демо' },
  { href: '/gde-igrat/', label: 'Где играть' },
  { href: '/analogi/', label: 'Аналоги' },
] as const;
