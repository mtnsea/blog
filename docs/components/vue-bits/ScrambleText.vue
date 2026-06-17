<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue';

interface Props {
  text: string;
  radius?: number;
  scrambleChars?: string;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  radius: 120,
  scrambleChars: '!@#$%&*<>?/\\[]{}',
  className: ''
});

const rootRef = useTemplateRef<HTMLDivElement>('rootRef');
const charStates = ref<{ char: string; scrambling: boolean }[]>([]);

const chars = computed(() => props.text.split(''));

const initChars = () => {
  charStates.value = chars.value.map(c => ({ char: c, scrambling: false }));
};

const getRandomScrambleChar = () => {
  const pool = props.scrambleChars;
  return pool[Math.floor(Math.random() * pool.length)];
};

const resetChars = () => {
  charStates.value = chars.value.map(c => ({ char: c, scrambling: false }));
};

let handleMove: ((e: PointerEvent) => void) | null = null;

onMounted(() => {
  initChars();

  handleMove = (e: PointerEvent) => {
    if (!rootRef.value) return;
    const spans = rootRef.value.querySelectorAll<HTMLElement>('.scramble-char');

    const updated = chars.value.map((originalChar, i) => {
      const span = spans[i];
      if (!span) return { char: originalChar, scrambling: false };

      const { left, top, width, height } = span.getBoundingClientRect();
      const cx = left + width / 2;
      const cy = top + height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist < props.radius) {
        const factor = 1 - dist / props.radius;
        const threshold = factor * factor;
        return {
          char: Math.random() < threshold * 0.6 ? getRandomScrambleChar() : originalChar,
          scrambling: true
        };
      }
      return { char: originalChar, scrambling: false };
    });

    charStates.value = updated;
  };

  rootRef.value?.addEventListener('pointermove', handleMove, { passive: true });
  rootRef.value?.addEventListener('pointerleave', resetChars);
});

onBeforeUnmount(() => {
  if (rootRef.value && handleMove) {
    rootRef.value.removeEventListener('pointermove', handleMove);
    rootRef.value.removeEventListener('pointerleave', resetChars);
  }
  handleMove = null;
});
</script>

<template>
  <div ref="rootRef" :class="`scramble-text-root ${className}`" :aria-label="text">
    <span
      v-for="(state, i) in charStates"
      :key="i"
      class="scramble-char"
      :class="{ scrambling: state.scrambling }"
    >{{ state.char === ' ' ? '\u00A0' : state.char }}</span>
  </div>
</template>

<style scoped>
.scramble-text-root {
  display: inline-flex;
  flex-wrap: wrap;
}

.scramble-char {
  display: inline-block;
  transition: color 0.12s ease, text-shadow 0.12s ease;
}

.scramble-char.scrambling {
  color: #44d7b6;
  text-shadow: 0 0 10px rgba(68, 215, 182, 0.7), 0 0 3px rgba(68, 215, 182, 0.9);
}
</style>
