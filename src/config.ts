export const site = {
  name: 'Lucky Jet — игра в казино',
  domain: 'https://lucky-jet-slot.fun',
  lang: 'ru',
} as const;

export const affiliateUrl =
  import.meta.env.PUBLIC_AFFILIATE_URL ?? 'https://example.com/ref';

export const analogAffiliateUrl =
  import.meta.env.PUBLIC_ANALOG_AFFILIATE_URL ??
  'https://r1wlfjc.life/casino?p=l6jf';

export const apkDownloadUrl =
  import.meta.env.PUBLIC_APK_DOWNLOAD_URL ??
  'https://r1wlfjc.life/application-cordova/v1/apk/com-mobile-one-win/1win.apk?p=g0bv';

export const demoGameUrl = import.meta.env.PUBLIC_DEMO_GAME_URL ?? '';

export const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL ?? '';
export const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? '';
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

export const footerLinks = [
  ...nav,
  { href: '/igrat-na-dengi/', label: 'Играть на деньги' },
  { href: '/popolnenie-kartoy/', label: 'Пополнение картой' },
  { href: '/popolnenie-usdt/', label: 'Пополнение USDT' },
  { href: '/popolnenie-qiwi/', label: 'Пополнение QIWI' },
] as const;

export const whereToPlay = [
  {
    name: '1win',
    url: 'https://w-one909485.life/v3/lucky-jet-updated?p=tq23',
    desc: 'Крупная площадка: Lucky Jet и другие crash в каталоге instant-игр.',
    icon: '🚀',
    perks: ['Lucky Jet в лобби', 'APK для Android', 'Карта, USDT, кошельки'],
    featured: true,
  },
] as const;
