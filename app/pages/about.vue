<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'

const heroRef = ref<HTMLElement | null>(null)
let rafId: number | null = null
let pending: { x: number; y: number } | null = null

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined'
    && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
}

function apply() {
  rafId = null
  const el = heroRef.value
  if (!el || !pending) return
  el.style.setProperty('--mx', `${pending.x}%`)
  el.style.setProperty('--my', `${pending.y}%`)
  el.style.setProperty('--glow-o', '1')
  pending = null
}

function onMouseMove(e: MouseEvent) {
  if (prefersReducedMotion()) return
  const el = heroRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  pending = {
    x: ((e.clientX - rect.left) / rect.width) * 100,
    y: ((e.clientY - rect.top) / rect.height) * 100,
  }
  if (rafId == null) rafId = requestAnimationFrame(apply)
}

function onMouseLeave() {
  const el = heroRef.value
  if (!el) return
  el.style.setProperty('--glow-o', '0')
}

onBeforeUnmount(() => {
  if (rafId != null) cancelAnimationFrame(rafId)
})
</script>

<template>
  <div>
    <section
      ref="heroRef"
      class="hero-banner relative isolate overflow-hidden rounded-[24px] border border-[#B8C7DA] shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
      @mousemove="onMouseMove"
      @mouseleave="onMouseLeave"
    >
      <div class="hero-banner__glow" aria-hidden="true"></div>

      <img
        src="/img/naqeeb.png"
        alt="Naqeeb Ullah"
        width="80"
        height="80"
        loading="eager"
        decoding="async"
        class="absolute top-6 right-6 sm:top-8 sm:right-8 z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white shadow-[0_6px_18px_-8px_rgba(15,23,42,0.25)]"
      />

      <div class="relative px-8 sm:px-10 py-8 sm:py-10">
        <div class="pr-24 sm:pr-28">
          <h1 class="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0F172A]">
            About
          </h1>
          <p class="mt-2 text-sm text-[#475569]">
            Senior full-stack engineer. Berlin.
          </p>
        </div>
        <p class="mt-5 text-[15px] text-[#334155] leading-relaxed">
          I'm Naqeeb Ullah — a senior full-stack engineer based in Berlin, focused on
          backend systems, API architecture, and replacing legacy workflows with
          software that gets used.
        </p>
      </div>
    </section>

    <section class="mt-16">
      <div class="space-y-6 text-[#334155] leading-relaxed max-w-2xl">
        <p>
          I've spent eight years building production systems across healthcare,
          government, e-commerce, and ed-tech — from a paper-based crop-reporting
          workflow used across 34 districts of Pakistan, to a dental practice ERP
          for a Berlin healthcare group, to multi-tenant e-commerce platforms
          with custom promotion engines.
        </p>

        <p>
          My focus is backend: schema design, API architecture, framework
          migrations (Yii → Laravel, WordPress → Laravel, legacy → Nuxt), and the
          messy real-world problems that come with replacing manual or legacy
          workflows with software that actually gets used. I work end-to-end when
          needed — frontend, mobile API surfaces, deployment, and direct client
          conversations included.
        </p>

        <p>
          Currently building healthcare ERP software at Zahnarztpraxis
          Wunschlachen in Berlin. Open to senior full-stack roles in Germany and
          remote-friendly EU teams.
        </p>
      </div>
    </section>

    <section class="mt-16">
      <h2 class="text-2xl font-semibold tracking-tight mb-6 text-[#0F172A]">Languages</h2>
      <ul class="flex flex-wrap gap-2.5 max-w-2xl">
        <li
          v-for="lang in [
            { name: 'English', level: 'Fluent' },
            { name: 'German', level: 'Intermediate' },
            { name: 'Urdu', level: 'Fluent' },
            { name: 'Pashto', level: 'Native' },
          ]"
          :key="lang.name"
          class="inline-flex items-center gap-2 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] pl-3.5 pr-2 py-1.5"
        >
          <span class="text-sm font-medium text-[#0F172A]">{{ lang.name }}</span>
          <span aria-hidden="true" class="inline-block w-1 h-1 rounded-full bg-[#2563EB]"></span>
          <span class="rounded-full bg-white/70 px-2 py-0.5 text-[11px] font-medium text-[#1E3A8A]">
            {{ lang.level }}
          </span>
        </li>
      </ul>
    </section>

    <section class="mt-16">
      <h2 class="text-2xl font-semibold tracking-tight mb-6 text-[#0F172A]">Education</h2>
      <div
        class="max-w-2xl rounded-[18px] border border-[#D8E3F0] p-6 sm:p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
        style="background-image: linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 100%);"
      >
        <p class="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-medium text-[#64748B]">
          <span class="inline-block w-1 h-1 rounded-full bg-[#2563EB]"></span>
          02/2014 – 03/2018
        </p>
        <p class="mt-3 text-lg font-semibold tracking-tight text-[#0F172A]">B.Sc. Computer Science</p>
        <p class="mt-1 text-sm text-[#475569]">University of Agriculture Peshawar, Pakistan</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-banner {
  background-color: #C8D2DE;
  background-image: linear-gradient(
    100deg,
    #DDE3EA 0%,
    #CFD7E0 25%,
    #BAC5D3 50%,
    #A8B5C5 75%,
    #94A3B8 100%
  );
  background-size: 140% 100%;
  background-position: 0% 50%;
  animation: hero-gradient-drift 22s ease-in-out infinite alternate;
  will-change: background-position;
}

@keyframes hero-gradient-drift {
  0%   { background-position: 0%  50%; }
  100% { background-position: 15% 50%; }
}

.hero-banner__glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    420px circle at var(--mx, 50%) var(--my, 50%),
    rgba(96, 165, 250, 0.09),
    rgba(99, 102, 241, 0.04) 45%,
    transparent 70%
  );
  opacity: var(--glow-o, 0);
  transition: opacity 350ms ease;
  will-change: opacity;
}

@media (prefers-reduced-motion: reduce) {
  .hero-banner {
    animation: none;
    background-position: 50% 50% !important;
  }
  .hero-banner__glow {
    display: none;
  }
}
</style>
