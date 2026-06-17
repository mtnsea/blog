<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetterGlitch from "./vue-bits/LetterGlitch.vue";
import Particles from "./vue-bits/Particles.vue";
import ScrambleText from "./vue-bits/ScrambleText.vue";
import ShinyText from "./vue-bits/ShinyText.vue";

type Project = {
  title: string;
  role: string;
  summary: string;
  stack: string[];
  impact: string;
  link?: string;
};

const profile = {
  name: "Mtnsea",
  title: "Frontend Developer / AI Application Developer",
  intro:
    "4 年前端开发经验，具备 Vue3、TypeScript、UniApp、Flutter 等技术栈项目开发能力，长期参与互联网医疗、生活服务、多端应用与 AI 工作流落地。",
  email: "Mtnsea@126.com",
  phone: "18739692851",
  location: "杭州",
};

const stats = [
  { value: "多端", label: "H5/小程序/Android/iOS/鸿蒙" },
  { value: "独立", label: "0-1 项目搭建与上线" },
  { value: "AI", label: "Agent / MCP / Skills 提升开发效率" },
];

const skills = [
  "Vue 3",
  "React",
  "TypeScript",
  "UniApp",
  "Flutter",
  "Dart",
  "GetX",
  "Vuex",
  "Node.js",
  "NestJS",
  "WebSocket",
  "ECharts",
  "Three.js",
  "Elasticsearch",
  "AI Agent",
  "MCP Server",
  "CI/CD",
];

const capabilities = [
  {
    title: "复杂前端应用",
    desc: "熟练掌握 Vue、React、TypeScript，具备 SPA 开发、组件封装、状态管理、权限控制与性能优化经验。",
  },
  {
    title: "跨平台多端交付",
    desc: "具备 UniApp 与 Flutter 项目经验，支持 H5、微信/支付宝/抖音小程序、Android、iOS 与鸿蒙多端发布。",
  },
  {
    title: "工程化与服务端能力",
    desc: "熟悉 Webpack、Vite、Node.js、Express、NestJS，能够处理构建优化、多环境配置、API 开发与权限认证。",
  },
  {
    title: "AI 辅助研发",
    desc: "熟练使用 ChatGPT、GitHub Copilot、Gemini，并具备 AI Agent、MCP Server、Agent Skills 等实践经验。",
  },
];

const projects: Project[] = [
  {
    title: "指尖到家 APP",
    role: "前端开发 / 多端应用",
    summary: "基于 UniApp 开发生活服务类应用，支持 Android、iOS 与鸿蒙多端运行，通过配置化方案快速生成不同业务马甲包版本。",
    stack: ["UniApp", "Vue3", "Vuex", "Android", "iOS", "鸿蒙", "Elasticsearch"],
    impact: "独立完成 0 到 1 搭建、多端兼容、配置化马甲包与 ES 行为埋点建设",
    link: "https://app.mi.com/details?id=com.app.zjdj",
  },
  {
    title: "月亮到家 APP",
    role: "Flutter / AI 辅助开发",
    summary: "基于 Flutter 开发生活服务类移动应用，支持 Android 与 iOS 双端运行，完成业务页面、状态管理、登录认证与支付流程接入。",
    stack: ["Flutter", "Dart", "Dio", "GetX", "jverify", "tobias", "Figma MCP"],
    impact: "短周期接手 Flutter 项目，并搭建 Figma MCP 与 AI Skills 协同工作流提升页面开发效率",
    link: "https://app.mi.com/details?id=com.spa.magic_spa",
  },
  {
    title: "东台市互联网医院",
    role: "UniApp / 医疗业务前端",
    summary: "面向互联网医疗场景的患者端应用，涵盖在线挂号、在线续方、护理上门、报告查询、住院充值、健康商城等核心业务。",
    stack: ["UniApp", "Uview", "Vue", "WebSocket", "qrcode", "GM Crypto"],
    impact: "完成 HIS、医保系统对接，封装医保授权与支付 SDK，并参与 AI 智能导诊与智能客服能力建设",
    link: "https://wechat.dtryhlw.com/h5/",
  },
  {
    title: "新昌医共体数据驾驶舱",
    role: "数据可视化前端",
    summary: "面向医疗业务场景的数据可视化平台，展示医疗资源空间分布、运营指标与实时监控数据，辅助医院运营决策。",
    stack: ["Vue", "ECharts", "Three.js", "WebSocket", "D3"],
    impact: "封装 AutoFit 多分辨率适配、BaseChart 图表基础组件与配置工厂，提升大屏展示稳定性",
  },
  {
    title: "互联网医院后台管理系统",
    role: "后台系统前端",
    summary: "面向互联网医院业务的后台管理平台，支持医生端、运营端等多角色业务管理，涵盖权限控制、运营配置、数据统计与问诊管理。",
    stack: ["Vue", "ElementUI", "Vuex", "Vue Router", "Axios", "ECharts", "Webpack"],
    impact: "实现动态路由权限、标准化 CRUD、复杂表格导出与多环境构建优化",
  },
];

const experiences = [
  {
    time: "2025.6 - 2026.5",
    company: "杭州月亮到家网络科技有限公司",
    title: "前端开发 + AI 应用开发",
    detail: "负责生活服务类 APP、多端马甲包、Flutter 项目迭代与 AI 辅助研发工作流建设，推动 Figma MCP、AI Skills 与开发 Agent 在实际业务中落地。",
  },
  {
    time: "2023.3 - 2025.4",
    company: "杭州特扬网络科技有限公司",
    title: "前端开发",
    detail: "参与互联网医院患者端、后台管理系统与医疗数据驾驶舱建设，负责核心业务模块、医保/HIS 对接、权限系统、数据可视化与工程化优化。",
  },
  {
    time: "2022.9 - 2023.3",
    company: "郑州鼎英信息工程有限公司",
    title: "前端开发",
    detail: "负责前端业务页面开发、组件封装与接口联调，积累 Vue、后台系统与业务功能交付经验。",
  },
  {
    time: "2020.9 - 2023.6",
    company: "郑州科技学院",
    title: "软件技术",
    detail: "系统学习软件开发、前端工程与应用开发基础，为后续多端项目与工程化实践打下基础。",
  },
];

const activeProject = ref(0);
const active = computed(() => projects[activeProject.value]);
const playerX = ref(48);
const playerY = ref(0);
const playerDirection = ref(1);
const jumpCharge = ref(0);
const eggScore = ref(0);
const hitBlockId = ref("");
const gameStage = ref<HTMLElement | null>(null);
const coinBlocks = [
  { id: "ui", label: "UI", left: 12, top: 56, width: 88, boost: 500 },
  { id: "api", label: "API", left: 42, top: 108, width: 76, boost: 620 },
  { id: "ci", label: "CI", left: 72, top: 76, width: 78, boost: 720 },
];
let ctx: gsap.Context | null = null;
let cleanupHeroMove: (() => void) | null = null;
let cleanupGame: (() => void) | null = null;
let gameRaf = 0;
let velocityX = 0;
let velocityY = 0;
let lastGameTime = 0;
let jumpCooldown = 0;
let jumpLocked = false;
let canHitBlock = false;
const blockCooldowns = new Map<string, number>();
const gameKeys = new Set<string>();
const resetHeroVisual = () => {
  gsap.set(".hero-visual", { clearProps: "transform" });
};

const playerStyle = computed(() => ({
  transform: `translate3d(${playerX.value}px, ${-playerY.value}px, 0) scaleX(${playerDirection.value})`,
}));

function setProject(index: number) {
  activeProject.value = index;
}

function jump() {
  if (jumpCooldown > 0 || jumpLocked || playerY.value > 0.5) return;
  jumpLocked = true;
  canHitBlock = true;
  velocityY = 610;
  jumpCooldown = 0.16;
  jumpCharge.value = 1;
  window.setTimeout(() => {
    jumpCharge.value = 0;
  }, 180);
}

function pressControl(key: string) {
  gameKeys.add(key);
  if (key === "jump") jump();
}

function releaseControl(key: string) {
  gameKeys.delete(key);
  if (key === "jump") jumpLocked = false;
}

function startGameLoop() {
  const maxX = () => Math.max(8, (gameStage.value?.clientWidth || 320) - 62);
  const maxY = () => {
    const stageHeight = gameStage.value?.clientHeight || 260;
    const minBlockTop = Math.min(...coinBlocks.map((block) => block.top));
    return Math.max(0, stageHeight - 32 - 54 - minBlockTop);
  };

  const hitCoinBlock = (block: HTMLElement) => {
    const id = block.dataset.blockId || "";
    if (!canHitBlock || blockCooldowns.get(id)) return false;

    canHitBlock = false;
    blockCooldowns.set(id, 0.22);
    eggScore.value += 1;
    hitBlockId.value = id;
    velocityY = -180;
    jumpCooldown = 0;
    jumpLocked = true;

    window.setTimeout(() => {
      if (hitBlockId.value === id) hitBlockId.value = "";
    }, 180);

    return true;
  };

  const resolveCoinCollisions = (previousY: number) => {
    const stage = gameStage.value;
    if (!stage || velocityY <= 0) return;

    const stageRect = stage.getBoundingClientRect();
    const stageHeight = stage.clientHeight;
    const playerLeft = playerX.value;
    const playerRight = playerX.value + 54;
    const previousTop = stageHeight - 32 - previousY - 54;
    const playerTop = stageHeight - 32 - playerY.value - 54;

    let didHit = false;
    stage.querySelectorAll<HTMLElement>(".coin-block").forEach((block) => {
      if (didHit) return;
      const rect = block.getBoundingClientRect();
      const blockLeft = rect.left - stageRect.left;
      const blockRight = blockLeft + rect.width;
      const blockBottom = rect.bottom - stageRect.top;
      const horizontalHit = playerRight > blockLeft + 8 && playerLeft < blockRight - 8;
      const headHit = previousTop >= blockBottom && playerTop <= blockBottom + 3;

      if (!horizontalHit || !headHit) return;

      if (hitCoinBlock(block)) {
        playerY.value = Math.max(0, stageHeight - 32 - 54 - blockBottom);
        didHit = true;
      }
    });
  };

  const tick = (time: number) => {
    const delta = Math.min((time - lastGameTime) / 1000 || 0, 0.033);
    lastGameTime = time;
    jumpCooldown = Math.max(0, jumpCooldown - delta);
    blockCooldowns.forEach((value, key) => {
      const nextValue = value - delta;
      if (nextValue <= 0) blockCooldowns.delete(key);
      else blockCooldowns.set(key, nextValue);
    });

    const movingLeft = gameKeys.has("left");
    const movingRight = gameKeys.has("right");
    const acceleration = 1800;
    const friction = playerY.value > 0 ? 0.94 : 0.82;

    if (movingLeft) {
      velocityX -= acceleration * delta;
      playerDirection.value = -1;
    }

    if (movingRight) {
      velocityX += acceleration * delta;
      playerDirection.value = 1;
    }

    if (!movingLeft && !movingRight) velocityX *= friction;

    velocityX = Math.max(-360, Math.min(360, velocityX));
    velocityY -= 1500 * delta;

    const previousY = playerY.value;
    playerX.value += velocityX * delta;
    playerY.value += velocityY * delta;
    resolveCoinCollisions(previousY);

    const topLimit = maxY();
    if (playerY.value > topLimit) {
      playerY.value = topLimit;
      velocityY = Math.min(velocityY, -120);
      jumpLocked = gameKeys.has("jump");
    }

    if (playerY.value <= 0) {
      playerY.value = 0;
      velocityY = 0;
      jumpLocked = gameKeys.has("jump");
      canHitBlock = false;
    }

    if (playerX.value < 8) {
      playerX.value = 8;
      velocityX = 0;
    }

    const rightEdge = maxX();
    if (playerX.value > rightEdge) {
      playerX.value = rightEdge;
      velocityX = 0;
    }

    gameRaf = window.requestAnimationFrame(tick);
  };

  const keyMap: Record<string, string> = {
    ArrowLeft: "left",
    KeyA: "left",
    ArrowRight: "right",
    KeyD: "right",
    ArrowUp: "jump",
    KeyW: "jump",
    Space: "jump",
  };

  const onKeyDown = (event: KeyboardEvent) => {
    const key = keyMap[event.code];
    if (!key) return;
    event.preventDefault();
    if (key === "jump" && event.repeat) return;
    pressControl(key);
  };

  const onKeyUp = (event: KeyboardEvent) => {
    const key = keyMap[event.code];
    if (!key) return;
    releaseControl(key);
  };

  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);
  gameRaf = window.requestAnimationFrame((time) => {
    lastGameTime = time;
    gameRaf = window.requestAnimationFrame(tick);
  });

  cleanupGame = () => {
    window.removeEventListener("keydown", onKeyDown);
    window.removeEventListener("keyup", onKeyUp);
    window.cancelAnimationFrame(gameRaf);
    gameKeys.clear();
    canHitBlock = false;
  };
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  ctx = gsap.context(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.set(".reveal", { y: 34, opacity: 0 });
    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .from(".hero-kicker", { y: 18, opacity: 0, duration: 0.6 })
      .from(".hero-copy", { y: 20, opacity: 0, duration: 0.64 }, "-=0.2")
      .from(".hero-actions .action", { y: 18, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.28")
      .from(".stat", { y: 20, opacity: 0, duration: 0.5, stagger: 0.06 }, "-=0.18")
      .from(".orbit-panel", { scale: 0.92, opacity: 0, duration: 0.72 }, "-=0.55");

    gsap.utils.toArray<HTMLElement>(".reveal").forEach((item) => {
      gsap.to(item, {
        y: 0,
        opacity: 1,
        duration: 0.72,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 82%",
        },
      });
    });

    gsap.utils.toArray<HTMLElement>(".skill-pill").forEach((item, index) => {
      gsap.to(item, {
        y: index % 2 === 0 ? -8 : 8,
        duration: 2.6 + index * 0.08,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    const hero = document.querySelector<HTMLElement>(".portfolio-hero");
    const visual = document.querySelector<HTMLElement>(".hero-visual");
    const onMove = (event: MouseEvent) => {
      if (!hero || !visual) return;
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      gsap.to(visual, {
        rotateY: x * 10,
        rotateX: y * -10,
        x: x * 18,
        y: y * 14,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    hero?.addEventListener("mousemove", onMove);
    ScrollTrigger.addEventListener("refreshInit", resetHeroVisual);

    cleanupHeroMove = () => {
      hero?.removeEventListener("mousemove", onMove);
      ScrollTrigger.removeEventListener("refreshInit", resetHeroVisual);
    };
  });

  startGameLoop();
});

onBeforeUnmount(() => {
  cleanupHeroMove?.();
  cleanupGame?.();
  ctx?.revert();
});
</script>

<template>
  <main class="portfolio-shell">
    <section class="portfolio-hero">
      <!-- Letter Glitch 矩阵背景 -->
      <LetterGlitch
        class="glitch-bg"
        :glitch-colors="['rgba(68,215,182,0.12)', 'rgba(124,92,255,0.08)', 'rgba(97,179,220,0.06)']"
        :glitch-speed="35"
        :center-vignette="true"
        :outer-vignette="true"
        :smooth="true"
      />
      <!-- Particles 微粒子叠加层 -->
      <Particles
        class="particles-bg"
        :particle-count="80"
        :particle-spread="14"
        :speed="0.04"
        :particle-colors="['#44d7b6', '#61b3dc', '#7c5cff']"
        :move-particles-on-hover="true"
        :particle-hover-factor="0.4"
        :alpha-particles="true"
        :particle-base-size="40"
        :size-randomness="1.2"
        :camera-distance="22"
        :disable-rotation="false"
      />
      <div class="hero-grid">
        <div class="hero-content">
          <ShinyText
            class="hero-kicker"
            :text="profile.title"
            :speed="3"
            :spread="60"
            color="rgba(68,215,182,0.6)"
            shine-color="#ffffff"
            direction="left"
            :disabled="false"
          />
          <ScrambleText
            class="hero-title"
            :text="profile.name"
            :radius="140"
            scramble-chars="!@#$%&*<>?/\\[]{}01"
          />
          <ScrambleText
            class="hero-copy"
            :text="profile.intro"
            :radius="140"
            scramble-chars="!@#$%&*<>?/\\[]{}01"
          />
          <!-- <p class="hero-copy">{{ profile.intro }}</p>。 -->
          <div class="hero-actions">
            <a class="action action-primary" href="#projects">查看作品</a>
            <a class="action action-secondary" :href="`mailto:${profile.email}`">联系我</a>
          </div>
          <div class="stats-strip" aria-label="关键成果">
            <div v-for="item in stats" :key="item.label" class="stat">
              <strong>{{ item.value }}</strong>
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>

        <div class="hero-visual" aria-label="技术能力概览">
          <div class="orbit-panel">
            <div class="signal signal-a"></div>
            <div class="signal signal-b"></div>
            <div class="terminal-card">
              <div class="terminal-top">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="code-window" role="img" aria-label="李大露的前端技术栈代码展示">
                <div class="code-line"><span class="code-keyword">const</span> <span class="code-var">profile</span> = {</div>
                <div class="code-line indent">
                  <span class="code-prop">title</span>: <span class="code-string">'Senior Frontend Engineer'</span>,
                </div>
                <div class="code-line indent">
                  <span class="code-prop">experience</span>: <span class="code-string">'4 years'</span>,
                </div>
                <div class="code-line indent">
                  <span class="code-prop">focus</span>: <span class="code-string">'Frontend + AI App'</span>,
                </div>
                <div class="code-line indent">
                  <span class="code-prop">location</span>: <span class="code-string">'Hangzhou, China'</span>,
                </div>
                <div class="code-line indent"><span class="code-prop">skills</span>: [</div>
                <div class="code-line indent double code-tags">
                  <span v-for="skill in skills.slice(0, 10)" :key="`hero-${skill}`" class="code-string">'{{ skill }}'</span>
                </div>
                <div class="code-line indent">],</div>
                <div class="code-line indent">
                  <span class="code-prop">ship</span>: <span class="code-string">'H5 / APP / 小程序'</span>,
                </div>
                <div class="code-line indent">
                  <span class="code-prop">hobbies</span>: <span class="code-string">'music, Reading, Coding'</span>
                </div>
                <div class="code-line">}</div>
              </div>
            </div>
            <!-- <div class="metric-card metric-card-a">
              <span>FPS</span>
              <strong>60</strong>
            </div> -->
            <!-- <div class="metric-card metric-card-b">
              <span>LCP</span>
              <strong>1.8s</strong>
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <section id="capabilities" class="section-block">
      <div class="section-heading reveal">
        <p>Capabilities</p>
        <h2>把技术能力转化为可见的产品质量</h2>
      </div>
      <div class="capability-grid">
        <article v-for="item in capabilities" :key="item.title" class="capability-card reveal">
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </article>
      </div>
      <div class="skill-cloud reveal" aria-label="技术栈">
        <span v-for="skill in skills" :key="skill" class="skill-pill">{{ skill }}</span>
      </div>
    </section>

    <section id="projects" class="section-block project-section">
      <div class="section-heading reveal">
        <p>Selected Work</p>
        <h2>作品集展示</h2>
      </div>
      <div class="project-board reveal">
        <div class="project-tabs" role="tablist" aria-label="项目列表">
          <button
            v-for="(project, index) in projects"
            :key="project.title"
            :class="{ active: activeProject === index }"
            type="button"
            role="tab"
            :aria-selected="activeProject === index"
            @click="setProject(index)"
          >
            <span>{{ `0${index + 1}` }}</span>
            {{ project.title }}
          </button>
        </div>
        <article class="project-detail">
          <p class="project-role">{{ active.role }}</p>
          <h3>{{ active.title }}</h3>
          <p>{{ active.summary }}</p>
          <div class="project-stack">
            <span v-for="tech in active.stack" :key="tech">{{ tech }}</span>
          </div>
          <strong>{{ active.impact }}</strong>
          <a v-if="active.link" :href="active.link" class="project-link" target="_blank" rel="noopener">查看项目</a>
        </article>
      </div>
    </section>

    <section id="experience" class="section-block">
      <div class="section-heading reveal">
        <p>Resume</p>
        <h2>职业履历</h2>
      </div>
      <div class="timeline">
        <article v-for="item in experiences" :key="item.company" class="timeline-item reveal">
          <time>{{ item.time }}</time>
          <div>
            <h3>{{ item.title }}</h3>
            <p class="company">{{ item.company }}</p>
            <p>{{ item.detail }}</p>
          </div>
        </article>
      </div>
    </section>

    <section id="contact" class="contact-band reveal">
      <div>
        <p>Available for frontend, multi-platform and AI application roles.</p>
        <h2>期待参与更复杂的前端工程、多端应用与 AI 应用建设。</h2>
      </div>
      <a class="action action-primary" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
      <span>{{ profile.location }} · {{ profile.phone }}</span>
    </section>

    <section class="easter-egg reveal" aria-label="可交互的小彩蛋">
      <div class="egg-copy">
        <p>Playable Easter Egg</p>
        <!-- <h2>顶到能量块，分数会发光。</h2>
        <span>键盘：A / D 或 ← / → 移动，W / ↑ / Space 跳跃。每次起跳只能顶一次，落地后才能再次跳跃。</span> -->
      </div>
      <div ref="gameStage" class="game-stage" tabindex="0" aria-label="小游戏舞台，使用键盘方向键移动和跳跃">
        <div class="game-grid" aria-hidden="true"></div>
        <div class="score-chip" aria-live="polite">
          <span>Score</span>
          <strong>{{ eggScore }}</strong>
        </div>
        <div
          v-for="block in coinBlocks"
          :key="block.id"
          class="coin-block"
          :class="{ hit: hitBlockId === block.id }"
          :data-block-id="block.id"
          :data-boost="block.boost"
          :style="{ left: `${block.left}%`, top: `${block.top}px`, width: `${block.width}px` }"
          aria-hidden="true"
        >
          <span>{{ block.label }}</span>
          <i>+1</i>
        </div>
        <div class="game-player" :class="{ jumping: jumpCharge }" :style="playerStyle" aria-hidden="true">
          <span class="player-eye"></span>
          <span class="player-core"></span>
        </div>
        <div class="game-ground" aria-hidden="true"></div>
      </div>
      <div class="game-controls" aria-label="触屏控制">
        <button
          type="button"
          @pointerdown.prevent="pressControl('left')"
          @pointerup.prevent="releaseControl('left')"
          @pointerleave="releaseControl('left')"
        >
          左移
        </button>
        <button
          type="button"
          @pointerdown.prevent="pressControl('jump')"
          @pointerup.prevent="releaseControl('jump')"
          @pointerleave="releaseControl('jump')"
        >
          跳跃
        </button>
        <button
          type="button"
          @pointerdown.prevent="pressControl('right')"
          @pointerup.prevent="releaseControl('right')"
          @pointerleave="releaseControl('right')"
        >
          右移
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped>
.portfolio-shell {
  overflow-x: clip;
  color: var(--portfolio-text);
  background: linear-gradient(180deg, rgba(8, 11, 19, 0) 0%, rgba(8, 11, 19, 0.96) 38%), var(--portfolio-bg);
}

.portfolio-hero {
  position: relative;
  min-height: calc(100vh - 64px);
  padding: 88px var(--portfolio-page-padding) 64px;
  isolation: isolate;
}

.glitch-bg {
  position: absolute;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
}

.particles-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 55%, rgba(0, 0, 0, 0.1) 100%);
  opacity: 0.7;
}

.hero-title {
  display: flex;
  flex-wrap: wrap;
  gap: 0.08em 0.22em;
  margin: 12px 0 22px;
  max-width: 100%;
  font-size: clamp(3.6rem, 7vw, 8rem);
  line-height: 0.9;
  letter-spacing: 0;
  font-weight: 900;
  color: #e8f5f0;
  font-family: 'Courier New', 'Fira Code', 'JetBrains Mono', monospace;
  text-shadow: 0 0 40px rgba(68, 215, 182, 0.15);
  cursor: default;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(320px, 0.8fr);
  gap: clamp(28px, 4vw, 52px);
  align-items: center;
  min-height: calc(100vh - 224px);
}

.hero-kicker,
.section-heading p,
.project-role,
.company {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background-clip: unset;
  -webkit-text-fill-color: unset;
}

.section-heading p {
  color: #61b3dc;
}

.project-role {
  color: #61b3dc;
}

.company {
  color: #61b3dc;
}

.hero-copy {
  max-width: 660px;
  margin: 0;
  color: var(--portfolio-muted);
  font-size: clamp(1.06rem, 2vw, 1.35rem);
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 20px;
  border: 1px solid var(--portfolio-line);
  border-radius: 8px;
  font-weight: 800;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.action:hover {
  transform: translateY(-2px);
}

.action-primary {
  color: #08110f;
  border-color: transparent;
  background: linear-gradient(135deg, #44d7b6, #61b3dc);
  box-shadow: 0 0 30px rgba(68, 215, 182, 0.25), 0 0 8px rgba(97, 179, 220, 0.15);
}

.action-primary:hover {
  box-shadow: 0 0 44px rgba(68, 215, 182, 0.35), 0 0 14px rgba(97, 179, 220, 0.25);
}

.action-secondary {
  color: var(--portfolio-text);
  background: rgba(255, 255, 255, 0.07);
}

.stats-strip {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(132px, 1fr));
  gap: 10px;
  margin-top: 42px;
}

.stat {
  min-height: 96px;
  min-width: 0;
  padding: 16px;
  border: 1px solid rgba(97, 179, 220, 0.12);
  border-radius: 8px;
  background: rgba(10, 16, 28, 0.5);
  backdrop-filter: blur(6px);
  transition: border-color 0.3s ease;
}

.stat:hover {
  border-color: rgba(97, 179, 220, 0.3);
}

.stat strong {
  display: block;
  color: #61b3dc;
  font-size: clamp(1.45rem, 3vw, 1.8rem);
  line-height: 1.05;
  word-break: keep-all;
}

.stat span {
  display: block;
  margin-top: 8px;
  color: var(--portfolio-muted);
  font-size: 0.88rem;
  line-height: 1.45;
}

.hero-visual {
  position: relative;
  z-index: 1;
  margin-bottom: clamp(28px, 4vw, 64px);
  perspective: 1000px;
  transform-style: preserve-3d;
}

.orbit-panel {
  position: relative;
  min-height: clamp(420px, 44vw, 520px);
  border: 1px solid rgba(124, 92, 255, 0.28);
  border-radius: 18px;
  background:
    radial-gradient(circle at 50% 42%, rgba(68, 215, 182, 0.18), transparent 18rem),
    radial-gradient(circle at 88% 12%, rgba(255, 204, 102, 0.18), transparent 13rem),
    linear-gradient(145deg, rgba(255, 255, 255, 0.13), rgba(8, 11, 19, 0.62)),
    repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.045) 0 1px, transparent 1px 56px),
    repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.035) 0 1px, transparent 1px 56px);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.14),
    inset 0 -80px 120px rgba(8, 11, 19, 0.42),
    0 34px 100px rgba(0, 0, 0, 0.36),
    0 0 70px rgba(68, 215, 182, 0.08);
  overflow: hidden;
}

.orbit-panel::before,
.orbit-panel::after {
  position: absolute;
  pointer-events: none;
  content: "";
}

.orbit-panel::before {
  inset: 18px;
  z-index: 0;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  box-shadow: inset 0 0 46px rgba(68, 215, 182, 0.08);
}

.orbit-panel::after {
  top: -35%;
  left: -30%;
  z-index: 0;
  width: 66%;
  height: 150%;
  background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.13), transparent);
  transform: rotate(14deg);
  opacity: 0.45;
}

.signal {
  position: absolute;
  z-index: 1;
  border: 1px solid rgba(68, 215, 182, 0.42);
  border-radius: 50%;
  animation: pulse 5s ease-in-out infinite;
}

.signal-a {
  inset: 54px 74px auto auto;
  width: 180px;
  height: 180px;
}

.signal-b {
  inset: auto auto 48px 44px;
  width: 260px;
  height: 260px;
  animation-delay: -1.8s;
}

.terminal-card {
  position: absolute;
  inset: 18px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  min-height: 0;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 12px;
  background: rgba(8, 11, 19, 0.76);
  backdrop-filter: blur(18px);
  padding: 0;
  overflow: hidden;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 26px 58px rgba(0, 0, 0, 0.34);
}

.terminal-top {
  display: flex;
  gap: 8px;
  align-items: center;
  min-height: 42px;
  padding: 0 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.045);
}

.terminal-top span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #44d7b6;
}

.terminal-top span:nth-child(2) {
  background: #ffcc66;
}

.terminal-top span:nth-child(3) {
  background: #7c5cff;
}

.code-window {
  flex: 1;
  max-width: 100%;
  min-height: 0;
  padding: 16px;
  overflow: auto;
  color: #dce8ff;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size: clamp(0.72rem, 1.15vw, 0.95rem);
  line-height: 1.85;
  scrollbar-width: thin;
  scrollbar-color: rgba(68, 215, 182, 0.55) rgba(255, 255, 255, 0.08);
}

.code-window::-webkit-scrollbar {
  height: 8px;
}

.code-window::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.08);
}

.code-window::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: rgba(68, 215, 182, 0.55);
}

.code-line {
  min-width: max-content;
  white-space: nowrap;
}

.code-line.indent {
  padding-left: 18px;
}

.code-line.double {
  padding-left: 36px;
}

.code-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  min-width: 0;
  white-space: normal;
}

.code-keyword {
  color: #ff7ab6;
}

.code-var {
  color: #ffcc66;
}

.code-prop {
  color: #44d7b6;
}

.code-string {
  color: #b6f3ff;
}

.section-block {
  padding: 92px var(--portfolio-page-padding);
}

.section-heading {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 28px;
  align-items: start;
  margin-bottom: 36px;
}

.section-heading h2 {
  max-width: 760px;
  margin: 0;
  font-size: clamp(2rem, 5vw, 4.2rem);
  line-height: 1.02;
  letter-spacing: 0;
}

.capability-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.capability-card {
  min-height: 230px;
  padding: 22px;
  border: 1px solid rgba(68, 215, 182, 0.15);
  border-radius: 10px;
  background: rgba(10, 16, 28, 0.7);
  backdrop-filter: blur(8px);
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.capability-card:hover {
  border-color: rgba(68, 215, 182, 0.4);
  box-shadow: 0 0 24px rgba(68, 215, 182, 0.08), inset 0 0 24px rgba(68, 215, 182, 0.03);
  transform: translateY(-4px);
}

.capability-card h3,
.project-detail h3,
.timeline-item h3 {
  margin: 0 0 12px;
  font-size: 1.25rem;
}

.capability-card p,
.project-detail p,
.timeline-item p,
.contact-band p {
  margin: 0;
  color: var(--portfolio-muted);
  line-height: 1.75;
}

.skill-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.skill-pill,
.project-stack span {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 13px;
  border: 1px solid rgba(97, 179, 220, 0.15);
  border-radius: 999px;
  color: #d4e8f5;
  background: rgba(97, 179, 220, 0.06);
  transition: border-color 0.3s ease, background 0.3s ease;
}

.skill-pill:hover,
.project-stack span:hover {
  border-color: rgba(97, 179, 220, 0.35);
  background: rgba(97, 179, 220, 0.12);
}

.project-board {
  display: grid;
  grid-template-columns: 360px minmax(0, 1fr);
  border: 1px solid rgba(68, 215, 182, 0.12);
  border-radius: 14px;
  background: rgba(10, 16, 28, 0.6);
  backdrop-filter: blur(8px);
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.project-board:hover {
  border-color: rgba(97, 179, 220, 0.25);
  box-shadow: 0 0 30px rgba(97, 179, 220, 0.04);
}

.project-tabs {
  display: grid;
  align-content: start;
  border-right: 1px solid var(--portfolio-line);
}

.project-tabs button {
  display: flex;
  gap: 14px;
  align-items: center;
  min-height: 92px;
  padding: 20px;
  border: 0;
  border-bottom: 1px solid var(--portfolio-line);
  color: var(--portfolio-muted);
  background: transparent;
  font: inherit;
  font-weight: 800;
  text-align: left;
  cursor: pointer;
}

.project-tabs button.active {
  color: var(--portfolio-text);
  background: linear-gradient(90deg, rgba(68, 215, 182, 0.12), rgba(97, 179, 220, 0.04));
  border-left: 2px solid #44d7b6;
}

.project-tabs span {
  color: #61b3dc;
}

.project-detail {
  min-height: 420px;
  padding: clamp(26px, 5vw, 58px);
  background:
    radial-gradient(circle at 86% 18%, rgba(68, 215, 182, 0.16), transparent 22rem),
    radial-gradient(circle at 16% 82%, rgba(124, 92, 255, 0.16), transparent 20rem);
}

.project-detail h3 {
  margin-top: 8px;
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1;
}

.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 28px 0;
}

.project-link {
  padding: 12px 18px;
  display: inline-block;
  margin-top: 12px;
  color: #61b3dc;
  font-weight: 700;
  text-decoration: none;
}

.project-detail strong {
  color: #61b3dc;
  font-size: 1.2rem;
}

.timeline {
  display: grid;
  gap: 14px;
}

.timeline-item {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 28px;
  padding: 26px;
  border: 1px solid rgba(124, 92, 255, 0.1);
  border-radius: 10px;
  background: rgba(10, 16, 28, 0.5);
  backdrop-filter: blur(6px);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.timeline-item:hover {
  border-color: rgba(124, 92, 255, 0.3);
  box-shadow: 0 0 20px rgba(124, 92, 255, 0.05);
}

.timeline-item time {
  color: #61b3dc;
  font-weight: 900;
}

.contact-band {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 22px;
  align-items: center;
  margin: 40px var(--portfolio-page-padding) 92px;
  padding: clamp(28px, 5vw, 52px);
  border: 1px solid rgba(68, 215, 182, 0.2);
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(68, 215, 182, 0.08), rgba(97, 179, 220, 0.06)), rgba(10, 16, 28, 0.6);
  backdrop-filter: blur(8px);
  transition: border-color 0.3s ease;
}

.contact-band:hover {
  border-color: rgba(68, 215, 182, 0.4);
}

.contact-band h2 {
  margin: 10px 0 0;
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.04;
}

.contact-band > span {
  color: var(--portfolio-muted);
}

.easter-egg {
  display: grid;
  gap: 22px;
  margin: 0 var(--portfolio-page-padding) 92px;
}

.egg-copy {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 18px;
  align-items: end;
}

.egg-copy p {
  grid-column: 1 / -1;
  margin: 0;
  color: #44d7b6;
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
}

.egg-copy h2 {
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 3.6rem);
  line-height: 1.04;
}

.egg-copy span {
  color: var(--portfolio-muted);
  line-height: 1.6;
}

.game-stage {
  position: relative;
  height: 260px;
  border: 1px solid rgba(68, 215, 182, 0.24);
  border-radius: 14px;
  background:
    radial-gradient(circle at 22% 18%, rgba(68, 215, 182, 0.2), transparent 18rem),
    radial-gradient(circle at 78% 34%, rgba(255, 204, 102, 0.16), transparent 16rem),
    linear-gradient(180deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.035));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 28px 80px rgba(0, 0, 0, 0.28);
  overflow: hidden;
  outline: none;
}

.game-stage:focus-visible {
  border-color: #61b3dc;
  box-shadow: 0 0 0 3px rgba(97, 179, 220, 0.2), 0 28px 80px rgba(0, 0, 0, 0.28);
}

.game-grid {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(255, 255, 255, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.12));
}

.game-ground {
  position: absolute;
  right: 0;
  bottom: 28px;
  left: 0;
  height: 4px;
  background: linear-gradient(90deg, transparent, #44d7b6, #ffcc66, transparent);
  box-shadow: 0 0 22px rgba(68, 215, 182, 0.45);
}

.score-chip {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 3;
  display: inline-flex;
  gap: 10px;
  align-items: center;
  min-height: 40px;
  padding: 0 14px;
  border: 1px solid rgba(255, 204, 102, 0.36);
  border-radius: 8px;
  color: #08110f;
  background: linear-gradient(135deg, #44d7b6, #ffcc66);
  box-shadow: 0 16px 36px rgba(255, 204, 102, 0.18);
}

.score-chip span {
  font-size: 0.72rem;
  font-weight: 900;
  text-transform: uppercase;
}

.score-chip strong {
  min-width: 2ch;
  font-size: 1.35rem;
  line-height: 1;
}

.coin-block {
  position: absolute;
  z-index: 2;
  display: grid;
  place-items: center;
  height: 34px;
  border: 1px solid rgba(255, 204, 102, 0.44);
  border-radius: 8px;
  color: #08110f;
  font-size: 0.78rem;
  font-weight: 900;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.74), rgba(255, 255, 255, 0) 42%),
    linear-gradient(135deg, #ffcc66, #44d7b6);
  box-shadow: inset 0 -4px 0 rgba(8, 17, 15, 0.18), 0 16px 36px rgba(255, 204, 102, 0.16);
  transform: translateX(-50%);
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}

.coin-block::before {
  position: absolute;
  inset: 6px;
  border: 1px dashed rgba(8, 17, 15, 0.25);
  border-radius: 5px;
  content: "";
}

.coin-block span {
  position: relative;
  z-index: 1;
}

.coin-block i {
  position: absolute;
  top: -24px;
  left: 50%;
  color: #ffcc66;
  font-style: normal;
  font-weight: 900;
  opacity: 0;
  text-shadow: 0 0 14px rgba(255, 204, 102, 0.55);
  transform: translate(-50%, 10px);
}

.coin-block.hit {
  box-shadow: inset 0 -2px 0 rgba(8, 17, 15, 0.18), 0 0 36px rgba(255, 204, 102, 0.42);
  transform: translate(-50%, -10px);
}

.coin-block.hit i {
  animation: score-pop 0.42s ease-out;
}

.game-player {
  position: absolute;
  bottom: 32px;
  left: 0;
  width: 54px;
  height: 54px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 14px 14px 18px 18px;
  background:
    radial-gradient(circle at 62% 34%, rgba(255, 255, 255, 0.85), transparent 7px),
    linear-gradient(135deg, #44d7b6, #7c5cff 64%, #ffcc66);
  box-shadow: 0 18px 36px rgba(68, 215, 182, 0.28), 0 0 34px rgba(124, 92, 255, 0.24);
  will-change: transform;
}

.game-player::before,
.game-player::after {
  position: absolute;
  bottom: -9px;
  width: 17px;
  height: 10px;
  border-radius: 0 0 8px 8px;
  background: #ffcc66;
  content: "";
}

.game-player::before {
  left: 8px;
}

.game-player::after {
  right: 8px;
}

.game-player.jumping {
  box-shadow: 0 24px 48px rgba(255, 204, 102, 0.28), 0 0 38px rgba(68, 215, 182, 0.36);
}

.player-eye {
  position: absolute;
  top: 15px;
  right: 13px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #08110f;
}

.player-core {
  position: absolute;
  right: 13px;
  bottom: 13px;
  left: 13px;
  height: 5px;
  border-radius: 999px;
  background: rgba(8, 17, 15, 0.7);
}

.game-controls {
  display: none;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.game-controls button {
  min-height: 44px;
  border: 1px solid var(--portfolio-line);
  border-radius: 8px;
  color: var(--portfolio-text);
  font: inherit;
  font-weight: 900;
  background: rgba(255, 255, 255, 0.075);
}

.game-controls button:active {
  color: #08110f;
  background: linear-gradient(135deg, #44d7b6, #ffcc66);
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(0.84);
    opacity: 0.36;
  }

  50% {
    transform: scale(1.08);
    opacity: 0.86;
  }
}

@keyframes score-pop {
  0% {
    opacity: 0;
    transform: translate(-50%, 10px) scale(0.82);
  }

  35% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate(-50%, -20px) scale(1.08);
  }
}

@media (min-width: 1440px) {
  .portfolio-hero {
    padding-top: 112px;
    padding-bottom: 84px;
  }

  .hero-grid {
    grid-template-columns: minmax(0, 1fr) minmax(460px, 0.82fr);
    gap: 72px;
    min-height: calc(100vh - 260px);
  }

  .hero-title {
    font-size: clamp(5.8rem, 5.8vw, 9.4rem);
  }

  .hero-copy {
    max-width: 760px;
    font-size: 1.32rem;
  }

  .stats-strip {
    grid-template-columns: repeat(4, minmax(150px, 1fr));
  }

  .orbit-panel {
    min-height: 600px;
  }

  .metric-card-a {
    top: 74px;
    left: 48px;
  }

  .metric-card-b {
    right: 48px;
    bottom: 58px;
  }

  .section-block {
    padding-top: 118px;
    padding-bottom: 118px;
  }

  .capability-grid {
    gap: 18px;
  }

  .capability-card {
    min-height: 260px;
    padding: 28px;
  }

  .project-board {
    grid-template-columns: 420px minmax(0, 1fr);
  }

  .project-detail {
    min-height: 500px;
  }

  .contact-band {
    margin-top: 56px;
    margin-bottom: 112px;
  }

  .game-stage {
    height: 320px;
  }
}

@media (min-width: 1800px) {
  .portfolio-hero {
    padding-top: 128px;
  }

  .hero-grid {
    grid-template-columns: minmax(0, 1.02fr) minmax(560px, 0.84fr);
    gap: 92px;
  }

  .hero-title {
    font-size: clamp(8rem, 7vw, 11rem);
  }

  .hero-copy {
    max-width: 820px;
  }

  .orbit-panel {
    min-height: 620px;
  }

  .section-heading {
    grid-template-columns: 280px minmax(0, 1fr);
  }

  .section-heading h2 {
    max-width: 960px;
  }

  .project-board {
    grid-template-columns: 460px minmax(0, 1fr);
  }

  .project-detail {
    min-height: 560px;
  }

  .game-stage {
    height: 360px;
  }
}

@media (max-width: 960px) {
  .portfolio-hero {
    padding-top: 72px;
  }

  .hero-grid,
  .section-heading,
  .project-board,
  .timeline-item,
  .contact-band,
  .egg-copy {
    grid-template-columns: 1fr;
  }

  .hero-grid {
    gap: 38px;
    min-height: auto;
  }

  .hero-title {
    overflow: visible;
    font-size: clamp(3.9rem, 16vw, 7.5rem);
  }

  .hero-visual {
    order: -1;
    margin-bottom: 18px;
  }

  .orbit-panel {
    min-height: 430px;
  }

  .capability-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .project-tabs {
    border-right: 0;
    border-bottom: 1px solid var(--portfolio-line);
  }

  .contact-band .action {
    justify-self: start;
  }

  .egg-copy {
    align-items: start;
  }
}

@media (max-width: 620px) {
  .portfolio-hero,
  .section-block {
    padding-left: 18px;
    padding-right: 18px;
  }

  .hero-title {
    font-size: clamp(3rem, 18vw, 5.4rem);
    line-height: 0.95;
  }

  .stats-strip,
  .capability-grid {
    grid-template-columns: 1fr;
  }

  .orbit-panel {
    min-height: 380px;
  }

  .hero-visual {
    margin-bottom: 10px;
  }

  .stats-strip {
    margin-top: 32px;
  }

  .code-window {
    padding: 14px;
    font-size: 0.72rem;
  }

  .code-line.indent {
    padding-left: 12px;
  }

  .code-line.double {
    padding-left: 18px;
  }

  .metric-card {
    width: 104px;
  }

  .metric-card-a {
    top: 28px;
    left: 18px;
  }

  .metric-card-b {
    right: 18px;
    bottom: 28px;
  }

  .project-tabs button {
    min-height: 78px;
  }

  .timeline-item,
  .capability-card,
  .contact-band {
    padding: 20px;
  }

  .contact-band,
  .easter-egg {
    margin-left: 18px;
    margin-right: 18px;
  }

  .game-stage {
    height: 220px;
  }

  .coin-block {
    width: min(72px, 22vw) !important;
    height: 30px;
    font-size: 0.68rem;
  }

  .game-controls {
    display: grid;
  }
}
</style>
