<script setup lang="ts">
const { data: projects } = await useAsyncData('projects-list', () =>
  queryContent('projects').sort({ order: 1 }).find()
)

function summaryFor(project: any): string {
  if (project?.domain) return project.domain
  return ''
}

function slugFor(project: any): string {
  if (!project?._path) return ''
  return project._path.replace(/^\/projects\//, '')
}
</script>

<template>
  <div>
    <section>
      <h1 class="text-4xl sm:text-5xl font-semibold tracking-tight">
        Projects
      </h1>
      <p class="mt-4 text-slate-600 leading-relaxed">
        Ten case studies across healthcare, government, e-commerce, ed-tech, and
        industrial calibration — covering framework migrations, multi-tenant
        architectures, offline-first mobile systems, and the messy real-world
        problems of replacing manual workflows with software.
      </p>
    </section>

    <section class="mt-16">
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <li v-for="project in projects" :key="project._path"
          class="border border-slate-200 rounded-lg p-6 hover:border-slate-900 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200">
          <NuxtLink :to="`/projects/${slugFor(project)}`" class="group block">
            <p class="text-xs uppercase tracking-wide text-slate-400">
              {{ project.company }}
            </p>
            <h2 class="mt-2 text-xl font-medium tracking-tight group-hover:underline">
              {{ project.title }}
            </h2>
            <p v-if="summaryFor(project)" class="mt-2 text-slate-600">
              {{ summaryFor(project) }}
            </p>
            <ul v-if="project.techStack?.length" class="mt-4 flex flex-wrap gap-2">
              <li v-for="tech in project.techStack" :key="tech"
                class="bg-slate-100 text-slate-700 rounded-sm px-2 py-1 text-sm">
                {{ tech }}
              </li>
            </ul>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section class="mt-24 border-t border-slate-200 pt-16">
      <h2 class="text-2xl font-semibold tracking-tight mb-6">Earlier Career (2017–2018)</h2>
      <div class="space-y-4 text-slate-700 leading-relaxed">
        <p>
          Before Code For Pakistan and Cyber Cloud, I started my professional career at
          <span class="font-medium text-slate-900">Shaheer Solutions</span>
          (Peshawar, Pakistan) while completing my Computer Science degree. I built and
          migrated CakePHP web applications for small US clients in hospitality and local
          commerce, including a Joomla → CakePHP migration with Stripe payment integration.
        </p>
        <p>
          This early work laid the foundation for the larger migrations I would later lead —
          Yii → Laravel (Trade Simple) and WordPress → Laravel (Kalista Beauty).
        </p>
      </div>
    </section>
  </div>
</template>
