export const seo = {
  title: '一只小於菟 | 开发者、音乐爱好者、原批、撸er...',
  description:
    '我是 一只小於菟 ，一名开发者，细节控，code 只是为了生存，游戏和音乐才是我的热爱~',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
