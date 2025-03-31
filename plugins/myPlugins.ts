export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            nuxtAppInfo: () => console.log(nuxtApp),
            helloworld: () => console.log("Hello World") 
        }
    }
});