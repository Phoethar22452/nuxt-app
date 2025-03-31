<template>
    <div>
        <NuxtLayout>
            <ul class="flex items-center justify-center my-4">
                <li>
                  <NuxtLink to="/" class="px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 py-2 mx-2">Home</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/users" class="px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 py-2 mx-2">Users</NuxtLink>
                </li>
            </ul>
          <NuxtPage />  
        </NuxtLayout> 
    </div>
</template>
