<template>
  <div class="min-h-screen flex flex-col text-[#0F172A]" style="background-color: #F8FAFC;">
    <header
      class="border-b border-[#B8C7DA]"
      style="background-color: #DCE7F5; background-image: linear-gradient(90deg, #DCE7F5 0%, #DBEAFE 55%, #E0E7FF 100%);"
    >
      <div class="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <NuxtLink to="/" class="text-base font-semibold tracking-tight text-[#0F172A] hover:text-[#1D4ED8] transition-colors">
          Naqeeb Ullah
        </NuxtLink>
        <nav>
          <ul class="flex items-center space-x-8">
            <li>
              <NuxtLink
                to="/projects"
                active-class="!text-[#2563EB] !border-[#2563EB]"
                class="text-[#475569] hover:text-[#1D4ED8] transition-colors text-sm font-medium border-b-2 border-transparent pb-1"
              >Projects</NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/about"
                active-class="!text-[#2563EB] !border-[#2563EB]"
                class="text-[#475569] hover:text-[#1D4ED8] transition-colors text-sm font-medium border-b-2 border-transparent pb-1"
              >About</NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/contact"
                active-class="!text-[#2563EB] !border-[#2563EB]"
                class="text-[#475569] hover:text-[#1D4ED8] transition-colors text-sm font-medium border-b-2 border-transparent pb-1"
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
              class="text-[#475569] hover:text-[#1D4ED8] transition-colors"
            >LinkedIn</a>
          </li>
          <li aria-hidden="true" class="text-[#60A5FA]">·</li>
          <li>
            <a
              href="https://gitlab.com/naqeebullah1"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#475569] hover:text-[#1D4ED8] transition-colors"
            >GitLab</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
