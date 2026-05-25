<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)

const navItems = [
  { text: '能力', link: '#capabilities' },
  { text: '作品', link: '#projects' },
  { text: '履历', link: '#experience' },
  { text: '联系', link: '#contact' }
]

function closeMenu() {
  open.value = false
}
</script>

<template>
  <div class="mobile-top-nav">
    <button
      class="mobile-menu-button"
      type="button"
      :aria-expanded="open"
      aria-controls="portfolio-mobile-menu"
      aria-label="打开导航菜单"
      @click="open = !open"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <Transition name="menu-fade">
      <nav v-if="open" id="portfolio-mobile-menu" class="mobile-menu-panel" aria-label="移动端导航">
        <a v-for="item in navItems" :key="item.link" :href="item.link" @click="closeMenu">
          {{ item.text }}
        </a>
        <div class="mobile-menu-social">
          <a href="mailto:Mtnsea@126.com" @click="closeMenu">邮箱</a>
          <a href="tel:18739692851" @click="closeMenu">电话</a>
        </div>
      </nav>
    </Transition>
  </div>
</template>

<style scoped>
.mobile-top-nav {
  display: none;
}

@media (max-width: 767px) {
  .mobile-top-nav {
    position: fixed;
    top: 12px;
    right: 14px;
    z-index: 3000;
    display: block;
  }

  .mobile-menu-button {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 42px;
    height: 42px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 8px;
    background: rgba(8, 11, 19, 0.84);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.26);
    backdrop-filter: blur(16px);
  }

  .mobile-menu-button span {
    display: block;
    width: 18px;
    height: 2px;
    margin: 0 auto;
    border-radius: 999px;
    background: #f8fbff;
  }

  .mobile-menu-panel {
    position: absolute;
    top: 52px;
    right: 0;
    display: grid;
    min-width: 180px;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 10px;
    background: rgba(8, 11, 19, 0.96);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.42);
    backdrop-filter: blur(20px);
  }

  .mobile-menu-panel a {
    display: flex;
    align-items: center;
    min-height: 44px;
    padding: 0 12px;
    border-radius: 8px;
    color: #f8fbff;
    font-size: 0.96rem;
    font-weight: 800;
    text-decoration: none;
  }

  .mobile-menu-panel a:hover,
  .mobile-menu-panel a:focus-visible {
    color: #08110f;
    background: linear-gradient(135deg, #44d7b6, #ffcc66);
    outline: none;
  }

  .mobile-menu-social {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .mobile-menu-social a {
    justify-content: center;
    min-height: 36px;
    padding: 0 8px;
    color: rgba(248, 251, 255, 0.72);
    font-size: 0.78rem;
  }

  .menu-fade-enter-active,
  .menu-fade-leave-active {
    transition: opacity 0.18s ease, transform 0.18s ease;
  }

  .menu-fade-enter-from,
  .menu-fade-leave-to {
    opacity: 0;
    transform: translateY(-8px);
  }
}
</style>
