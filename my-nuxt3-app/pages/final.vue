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
    <div class="md_style">
        <ContentDoc />
    </div>
    <!-- <div class="alert">
        <Markdown unwrap="p" /> 
        <slot />
    </div> -->
</template>

<style scoped>
/* 全体のテーブルスタイル */
/* .md_style table {
  width: 100%;
  border-collapse: collapse;
  margin: 1em;
  font-size: 1em;
} */
/* テーブルのセルのスタイル */
/* .md_style th, td {
  border: 2px solid #000;
  padding: 8px;
  text-align: left;
} */
/* テーブルヘッダーのスタイル */
/* .md_style th {
  background-color: #30a091;
  font-weight: bold;
} */
</style>