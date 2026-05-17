<script setup lang="ts">
const { data: featuredProjects } = await useAsyncData('featured-projects', () =>
  queryContent('projects')
    .where({ featured: true })
    .sort({ order: 1 })
    .limit(3)
    .find()
)

function slugFor(project: any): string {
  if (!project?._path) return ''
  return project._path.replace(/^\/projects\//, '')
}
</script>

<template>
  <div>
    <section
      class="relative isolate w-screen ml-[calc(50%-50vw)] -mt-16 sm:-mt-16 pt-16 sm:pt-24 pb-14 sm:pb-24 overflow-hidden border-b border-[#B8C7DA]"
      style="
        background-color: #F8FAFC;
        background-image:
          linear-gradient(rgba(248, 250, 252, 0.45), rgba(248, 250, 252, 0.45)),
          url('/img/hero-banner.svg');
        background-size: cover, cover;
        background-position: center, right center;
        background-repeat: no-repeat, no-repeat;
      "
    >
      <div class="relative max-w-5xl mx-auto px-6 sm:px-10">
        <div class="max-w-2xl">
          <h1 class="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-950">
            Naqeeb Ullah
          </h1>
          <p class="mt-4 text-lg text-slate-700">
            Senior full-stack engineer. Berlin.
          </p>
          <div class="mt-8 space-y-6 text-base text-slate-700 leading-relaxed">
            <p>
              Eight years building production systems across healthcare, government,
              e-commerce, and ed-tech. Backend focus — schema design, API
              architecture, framework migrations, and replacing legacy workflows
              with software that gets used.
            </p>
            <p>
              Currently building healthcare ERP software at Zahnarztpraxis
              Wunschlachen in Berlin.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-24">
      <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight">
        Featured Projects
      </h2>
      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <NuxtLink
          v-for="project in featuredProjects"
          :key="project._path"
          :to="`/projects/${slugFor(project)}`"
          class="block border border-slate-200 rounded-lg p-6 hover:border-slate-900 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
        >
          <p class="text-xs uppercase tracking-wide text-slate-400">
            {{ project.company }}
          </p>
          <h3 class="mt-1 text-lg font-semibold tracking-tight text-slate-900">
            {{ project.title }}
          </h3>
          <p v-if="project.domain" class="text-sm text-slate-600 mt-2">
            {{ project.domain }}
          </p>
          <ul v-if="project.techStack?.length" class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="tech in project.techStack.slice(0, 4)"
              :key="tech"
              class="bg-slate-100 text-slate-700 rounded px-2 py-1 text-xs"
            >
              {{ tech }}
            </li>
            <li
              v-if="project.techStack.length > 4"
              class="bg-slate-100 text-slate-700 rounded px-2 py-1 text-xs"
            >
              +{{ project.techStack.length - 4 }} more
            </li>
          </ul>
        </NuxtLink>
      </div>

      <p class="mt-10">
        <NuxtLink to="/projects" class="text-slate-900 hover:text-blue-600 transition-colors">
          View all projects &rarr;
        </NuxtLink>
      </p>
    </section>
  </div>
</template>
