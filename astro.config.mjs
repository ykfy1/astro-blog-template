import { defineConfig } from 'astro/config';
export default defineConfig({
  i18n: {
    defaultLocale: 'zh', // 将默认语言设为中文
    locales: ['zh', 'en'], // 配置支持的语言列表
    routing: {
      prefixDefaultLocale: false // 隐藏默认语言的URL前缀，首页直接显示中文
    }
  }
});
