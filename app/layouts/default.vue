<template>
  <div class="min-h-screen flex flex-col text-[#0F172A]" style="background-color: #F8FAFC;">
    <header
      class="border-b border-[#B8C7DA]"
      style="background-color: #DCE7F5; background-image: linear-gradient(90deg, #DCE7F5 0%, #DBEAFE 55%, #E0E7FF 100%);"
    >
      <div class="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <NuxtLink to="/" class="brand-link text-base font-semibold tracking-tight">
          Naqeeb Ullah
        </NuxtLink>
        <nav>
          <ul class="flex items-center space-x-8">
            <li>
              <NuxtLink
                to="/projects"
                active-class="nav-link--active"
                class="nav-link text-sm font-medium"
              >Projects</NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/about"
                active-class="nav-link--active"
                class="nav-link text-sm font-medium"
              >About</NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/contact"
                active-class="nav-link--active"
                class="nav-link text-sm font-medium"
              >Contact</NuxtLink>
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

    <footer
      class="border-t border-[#B8C7DA] mt-16 py-12"
      style="background-color: #CEDDEE; background-image: linear-gradient(135deg, #CEDDEE 0%, #D8E2FF 100%);"
    >
      <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div class="flex items-center gap-3">
          <p class="text-sm text-[#475569]">&copy; 2026 Naqeeb Ullah <span class="text-[#60A5FA] mx-1">&middot;</span> <span class="text-[#475569]">Backend engineer, Berlin</span></p>
        </div>
        <ul class="flex items-center gap-3 text-sm">
          <li>
            <a
              href="https://www.linkedin.com/in/ullah-naqeeb"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-link"
            >LinkedIn</a>
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
  color: #475569;
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
  background-image: linear-gradient(to right, #2563EB, #60A5FA);
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
  color: #2563EB;
}
.nav-link--active::after {
  width: 100%;
}

.footer-link {
  position: relative;
  display: inline-block;
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
