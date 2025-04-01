<script setup lang="ts">
import { useCounterStore } from '~/stores/myCounter';
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first());
// const useCounter = useState<number>('counter', () => Math.round(Math.random() * 1000)); Page State
//const counter = useCounter();
const store = useCounterStore(); 
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
    const { $helloworld } = useNuxtApp();
    $helloworld();
*/
</script>


<template>
    <div>
        <Alert/>
        <h1 class="text-center">
            Greeting From Index Page
        </h1>
        <ContentRenderer v-if="home" :value="home" class="text-center text-white font-bold p-5 m-5 rounded bg-blue-300"/>
        <div v-else>Home not found</div>
        <!-- <img src="~/assets/1.jpg" alt=""> -->
        <!-- <img src="@/assets/1.jpg" alt=""> -->
         <!-- <img src="/1.jpg" alt=""> -->
        <div class="card">
            Counter : {{ store.count }}
            Counter (2x) : {{ store.doubleCount }}
            <button class="px-4 bg-amber-500 text-white rounded-lg hover:bg-blue-200 py-2 mx-2" @click="store.increment">
                Plus
            </button>
            <button class="px-4 bg-red-500 text-white rounded-lg hover:bg-blue-200 py-2 mx-2" @click="store.decrement">
                Minus
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>