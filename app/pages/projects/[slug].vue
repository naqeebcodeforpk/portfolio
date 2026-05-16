<script setup lang="ts">
const route = useRoute()
const slug = computed(() => String(route.params.slug ?? ''))

const { data: project } = await useAsyncData(`project-${slug.value}`, () =>
  queryContent('projects').where({ _path: `/projects/${slug.value}` }).findOne()
)
</script>

<template>
  <article class="max-w-3xl mx-auto">
    <NuxtLink
      to="/projects"
      class="text-sm text-slate-400 hover:text-slate-900 transition-colors mb-8 block"
    >
      &larr; Back to projects
    </NuxtLink>

    <div v-if="!project" class="mt-16">
      <h1 class="text-3xl font-semibold tracking-tight">Project not found</h1>
      <p class="mt-4 text-slate-600">
        We couldn't find a project at this URL. Head back to the
        <NuxtLink to="/projects" class="text-slate-900 hover:underline">projects index</NuxtLink>.
      </p>
    </div>

    <template v-else>
      <header>
        <p class="text-xs uppercase tracking-wide text-slate-400">
          {{ project.company }}
        </p>
        <h1 class="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
          {{ project.title }}
        </h1>
        <dl class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 border border-slate-200 rounded-lg p-6 bg-slate-100">
          <div v-if="project.company">
            <dt class="text-xs uppercase tracking-wide text-slate-400">Company</dt>
            <dd class="text-sm text-slate-900 mt-1">{{ project.company }}</dd>
          </div>
          <div v-if="project.role">
            <dt class="text-xs uppercase tracking-wide text-slate-400">Role</dt>
            <dd class="text-sm text-slate-900 mt-1">{{ project.role }}</dd>
          </div>
          <div v-if="project.duration">
            <dt class="text-xs uppercase tracking-wide text-slate-400">Duration</dt>
            <dd class="text-sm text-slate-900 mt-1">{{ project.duration }}</dd>
          </div>
          <div v-if="project.domain">
            <dt class="text-xs uppercase tracking-wide text-slate-400">Domain</dt>
            <dd class="text-sm text-slate-900 mt-1">{{ project.domain }}</dd>
          </div>
          <div v-if="project.teamSize">
            <dt class="text-xs uppercase tracking-wide text-slate-400">Team Size</dt>
            <dd class="text-sm text-slate-900 mt-1">{{ project.teamSize }}</dd>
          </div>
        </dl>
      </header>

      <section v-if="project.techStack?.length" class="mt-12">
        <h2 class="text-sm uppercase tracking-wide text-slate-400">Tech Stack</h2>
        <ul class="mt-3 flex flex-wrap gap-2">
          <li
            v-for="tech in project.techStack"
            :key="tech"
            class="bg-slate-100 text-slate-700 rounded-sm px-2 py-1 text-sm"
          >
            {{ tech }}
          </li>
        </ul>
      </section>

      <div class="mt-12 prose prose-slate max-w-none">
        <ContentRenderer :value="project" />
      </div>
    </template>
  </article>
</template>
