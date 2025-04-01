export default defineNuxtPlugin((nuxtApp) => {
    addRouteMiddleware('global-test', () => {
        console.log("This is authentication comes from plugin nuxt app build level");
    }, {global: true});  
});