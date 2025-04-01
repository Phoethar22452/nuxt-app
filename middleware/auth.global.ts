export default defineNuxtRouteMiddleware((to, from) => {
    console.log("This is auth global middleware");
    // const isLoggedIn:boolean = false;
    // if (isLoggedIn) {
    //     return navigateTo(to.fullPath);
    // } 
    // return navigateTo(from.fullPath);
}); 

