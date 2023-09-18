<template>
    <div>
        <div class="px-4 py-5 border-2 z-10 bg-white shadow w-full fixed  xl:px-32 lg:px-24 md:px-24">
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <div class="text-xl  font-Poppinsss font-bold text-gray-800">
                        Phiro.Inc
                    </div>
                </div>
                <div>
                    <div class="gap-6 hidden md:flex">
                        <div
                            class="font-NunitoSans font-bold text-gray-800 text-lg transition ease-out duration-300 hover:text-blue-600 cursor-pointer">
                            Home</div>
                        <div
                            class="font-NunitoSans font-bold text-gray-800 text-lg transition ease-out duration-300 hover:text-blue-600 cursor-pointer">
                            Profile</div>
                        <div
                            class="font-NunitoSans font-bold text-gray-800 text-lg transition ease-out duration-300 hover:text-blue-600 cursor-pointer">
                            Project</div>
                        <div
                            class="font-NunitoSans font-bold text-gray-800 text-lg transition ease-out duration-300 hover:text-blue-600 cursor-pointer">
                            Contact</div>
                    </div>
                </div>
                <div class="md:hidden">
                    <div class="drawer">
                        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                        <div class="drawer-content">
                            <!-- Page content here -->
                            <label for="my-drawer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                                </svg>
                            </label>
                        </div>
                        <div class="drawer-side">
                            <label for="my-drawer" class="drawer-overlay"></label>
                            <ul class="menu p-4 w-60 min-h-full bg-base-200 text-lg text-base-content">
                                <li class="flex justify-center"><a class="text-xl font-NunitoSans">Home</a></li>
                                <li class="flex justify-center"><a class="text-xl font-NunitoSans">Profile</a></li>
                                <li class="flex justify-center"><a class="text-xl font-NunitoSans">Project</a></li>
                                <li class="flex justify-center"><a class="text-xl font-NunitoSans">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
</script>

<style scoped></style>