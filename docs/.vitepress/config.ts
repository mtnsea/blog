import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/portfolio/',
  title: 'Mtnsea',
  description: 'Mtnsea的前端开发作品集与个人简历，聚焦 Vue、UniApp、Flutter、多端应用和 AI 辅助研发。',
  lang: 'zh-CN',
  cleanUrls: true,
  appearance: false,
  head: [
    ['meta', { name: 'theme-color', content: '#080b13' }],
    ['meta', { property: 'og:title', content: 'Mtnsea | Portfolio' }],
    ['meta', { property: 'og:description', content: '前端开发作品集与个人简历展示站，聚焦 Vue、UniApp、Flutter、多端应用和 AI 辅助研发。' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '能力', link: '#capabilities' },
      { text: '作品', link: '#projects' },
      { text: '履历', link: '#experience' },
      { text: '联系', link: '#contact' }
    ],
    footer: {
      message: 'Built with VitePress, Vue and GSAP.',
      copyright: 'Copyright © 2026 Mtnsea'
    }
  }
})
