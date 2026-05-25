import DefaultTheme from 'vitepress/theme'
import MobileTopNav from '../../components/MobileTopNav.vue'
import PortfolioHome from '../../components/PortfolioHome.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('MobileTopNav', MobileTopNav)
    app.component('PortfolioHome', PortfolioHome)
  }
}
