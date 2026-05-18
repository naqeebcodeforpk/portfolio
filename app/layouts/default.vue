<template>
  <div class="min-h-screen flex flex-col text-[#0F172A]" style="background-color: #F8FAFC;">
    <header class="sticky top-0 z-50 border-b border-[#B8C7DA] bg-[#F8FAFC]/85 backdrop-blur-md backdrop-saturate-150">
      <div class="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <NuxtLink to="/" class="brand-link text-base font-semibold tracking-tight">
          Naqeeb Ullah
        </NuxtLink>
        <nav>
          <ul class="flex items-center space-x-8">
            <li>
              <NuxtLink to="/projects" active-class="nav-link--active" class="nav-link text-sm font-medium">Projects
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" active-class="nav-link--active" class="nav-link text-sm font-medium">About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" active-class="nav-link--active" class="nav-link text-sm font-medium">Contact
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="flex-1">
      <div class="max-w-5xl mx-auto px-6 py-16">
        <slot />
      </div>
    </main>

    <footer class="border-t border-[#B8C7DA] mt-16 py-12">
      <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div class="flex items-center gap-3">
          <p class="text-sm text-[#475569]">&copy; 2026 Naqeeb Ullah <span class="text-[#60A5FA] mx-1">&middot;</span>
            <span class="text-[#475569]">Backend engineer, Berlin</span></p>
        </div>
        <ul class="flex items-center gap-3 text-sm">
          <li>
            <a href="https://www.linkedin.com/in/ullah-naqeeb" target="_blank" rel="noopener noreferrer"
              class="footer-link inline-flex items-center gap-1.5" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-4 h-4" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.brand-link {
  color: #0F172A;
  transition: color 320ms ease;
}

.brand-link:hover {
  color: #1E40AF;
}

.nav-link {
  position: relative;
  display: inline-block;
  color: #52617A;
  padding-bottom: 0.3rem;
  transition: color 280ms ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1.5px;
  width: 0;
  background-image: linear-gradient(to right, #475569, #94A3B8);
  border-radius: 2px;
  transition: width 380ms cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-link:hover {
  color: #0F172A;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link--active {
  color: #1E293B;
}

.nav-link--active::after {
  width: 100%;
}

.footer-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  color: #475569;
  transition: color 280ms ease;
}

.footer-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -3px;
  height: 1px;
  width: 100%;
  background-color: currentColor;
  opacity: 0;
  transform: scaleX(0.25);
  transform-origin: left;
  transition: opacity 280ms ease, transform 380ms cubic-bezier(0.22, 1, 0.36, 1);
}

.footer-link:hover {
  color: #1E40AF;
}

.footer-link:hover::after {
  opacity: 0.55;
  transform: scaleX(1);
}

@media (prefers-reduced-motion: reduce) {

  .brand-link,
  .nav-link,
  .nav-link::after,
  .footer-link,
  .footer-link::after {
    transition: none;
  }
}
</style>
