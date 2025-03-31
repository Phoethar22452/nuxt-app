<template>
    <div>
        <h1 class="text-center">
            Greeting From Users Page : ID {{ $route.params.id }}
        </h1>
    </div>
</template>

<script setup lang="ts">
    const route = useRoute();
    const nuxtApp = useNuxtApp();
    console.log(route.params.id);
    console.log(nuxtApp);
</script>

<style scoped>

</style>