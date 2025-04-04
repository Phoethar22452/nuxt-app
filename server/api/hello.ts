import { useAsyncData } from "nuxt/app";
import data from "./users.json";

/*
# This method style use together with useFetch
# useFetch Freeze the web page when the request is pending
export default defineEventHandler((event) => {
    return {
      message: 'Success to fetch hello api',
      status: 'success',
      data: data
    }
})
*/

/*
# This method style use together with useLazyFetch
# useLazyFetch will not freeze the web page when the request is pending
# {data: data, pending}
*/
export default defineEventHandler(async (event) => {
  return new Promise  ((resolve, reject) => {
    setTimeout(() => {
      resolve({
        message: 'Success to fetch hello api',
        status: 'success',
        data: data
      })
    }, 2000)
  });
});

// In the fetching page
/*
const  { data: users } =  await useAsyncData("users", () => 
  $fetch("/api/hello")
);
console.log(users.value) // { message: 'Success to fetch hello api', status: 'success', data: data }
console.log(users.value.data) // data
console.log(users.value.data[0].name) // data[0].name

if we want to refresh
const refresh =  () => refreshNuxtData("users");
*/