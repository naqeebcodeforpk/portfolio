<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900">
    <header class="border-b border-slate-200">
      <div class="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <NuxtLink to="/" class="text-base font-semibold tracking-tight text-slate-900">
          Naqeeb Ullah
        </NuxtLink>
        <nav>
          <ul class="flex items-center space-x-8">
            <li>
              <NuxtLink to="/projects" active-class="text-slate-900" class="text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium">Projects</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" active-class="text-slate-900" class="text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" active-class="text-slate-900" class="text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium">Contact</NuxtLink>
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

    <footer class="border-t border-slate-200 mt-16 py-12">
      <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <p class="text-sm text-slate-400">&copy; 2026 Naqeeb Ullah</p>
        <ul class="flex items-center gap-3 text-sm">
          <li>
            <a
              href="https://www.linkedin.com/in/ullah-naqeeb"
              target="_blank"
              rel="noopener noreferrer"
              class="text-slate-600 hover:text-slate-900"
            >LinkedIn</a>
          </li>
          <li aria-hidden="true" class="text-slate-400">·</li>
          <li>
            <a
              href="https://gitlab.com/naqeebullah1"
              target="_blank"
              rel="noopener noreferrer"
              class="text-slate-600 hover:text-slate-900"
            >GitLab</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
