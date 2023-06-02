<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { useRoute, useRouter } from 'vue-router'
import { navbarItems } from '@/router/nav'

const { y } = useWindowScroll()

const route = useRoute()
const router = useRouter()
</script>

<template>
  <header
    class="px-4 py-2 sticky top-0 z-50 backdrop-blur-md flex items-center justify-between border-b-2 group transition max-md:flex-col max-md:gap-2 mb-4uu"
    :class="[
      y
        ? 'hover:border-gray-200 border-gray-400 shadow-lg hover:shadow-2xl bg-gray-700/60 hover:bg-gray-700/80'
        : 'border-gray-200 bg-gray-700'
    ]"
  >
    <div
      class="transition max-md:text-center"
      :class="[y ? 'opacity-80 group-hover:opacity-100' : '']"
    >
      <h1
        class="text-3xl text-gray-200 font-semibold"
        :class="[y ? 'opacity-80 group-hover:opacity-100' : '']"
      >
        Nihilista del segle XXI
      </h1>
      <p class="text-gray-300 max-md:hidden">Pensaments i poesia d'un estudiant qualsevol.</p>
    </div>

    <div
      class="transition-all flex gap-2 lg:gap-5 justify-end"
      :class="[y ? 'bg-gray-700/80 group-hover:bg-transparent p-2 bg-hover:p-0 rounded-lg' : '']"
    >
      <button
        v-for="item in navbarItems"
        @click="router.push({ name: item.name })"
        class="transition text-lg text-gray-300 rounded text-center px-2 py-1 md:px-4 md:py-2"
        :class="[
          route.name === item.name
            ? 'font-semibold text-white bg-gray-600 shadow-xl'
            : 'font-light hover:text-gray-200 hover:bg-gray-600/80 active:bg-gray-500/60 active:text-white'
        ]"
      >
        {{ item.name }}
      </button>
    </div>
  </header>
  <router-view></router-view>
</template>

<style scoped></style>
