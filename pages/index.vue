<template>
    <div>
        <Alert/>
        <h1 class="text-center">
            Greeting From Index Page
        </h1>
        <!-- <img src="~/assets/1.jpg" alt=""> -->
        <!-- <img src="@/assets/1.jpg" alt=""> -->
         <!-- <img src="/1.jpg" alt=""> -->
    </div>
</template>

<script setup lang="ts">
/*
    definePageMeta({
        layout: "custom-layout", // Uses a custom layout instead of the default one
        middleware: "auth", // Middleware for authentication
        pageTransition: { name: "fade", mode: "out-in" },
    });
const { sayGreetingToName } = useUtils();
const sayHello = () => console.log("Hello");
sayHello();
sayGreetingToName("Phoethar");
*/
const { $helloworld } = useNuxtApp();
$helloworld();
</script>

<style scoped>

</style>