<template>
    <div>
      <h2>これはTestaコンポーネントです</h2>
      <v-text-field>tommy</v-text-field>
      <v-row><v-col>bash</v-col></v-row>
      <v-text-field>{{ manual }}</v-text-field>
      <ContentDoc />
      <!-- <Content :document="manual" /> -->
    </div>
</template>
  
<script setup lang="ts">
const { data: manual } = await useAsyncData('manual',
() => queryContent('manual').findOne())
console.log("Testaコンポーネントがレンダリングされました");
</script>
