export const site = {
  name: 'Lucky Jet — игра в казино',
  domain: 'https://lucky-jet-slot.fun',
  lang: 'ru',
} as const;

export const affiliateUrl =
  import.meta.env.PUBLIC_AFFILIATE_URL ?? 'https://example.com/ref';

export const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL ?? '';
export const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? '';
export const reviewsSiteSlug = 'lucky-jet-slot';

export const whereToPlay = [
  { name: '1win', url: 'https://w-one909485.life/v3/lucky-jet-updated?p=tq23' },
] as const;

export const nav = [
  { href: '/', label: 'Главная' },
  { href: '/otzyvy/', label: 'Отзывы' },
  { href: '/kak-igrat/', label: 'Как играть' },
  { href: '/skachat/', label: 'Скачать' },
  { href: '/demo/', label: 'Демо' },
  { href: '/gde-igrat/', label: 'Где играть' },
  { href: '/analogi/', label: 'Аналоги' },
] as const;
