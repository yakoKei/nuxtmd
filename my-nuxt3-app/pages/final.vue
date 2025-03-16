<script setup lang="ts">
const { data: manual } = await useAsyncData('manual',
() => queryContent('manual').findOne())
console.log("Testaコンポーネントがレンダリングされました");
</script>

<template>
    <Content :document="manual" />
    <v-tet-filed>
     {{ manual }}
     {{ 'aaa' }}
    </v-tet-filed>
    <ContentDoc />
    <!-- <div class="alert">
        <Markdown unwrap="p" /> 
        <slot />
    </div> -->
</template>
