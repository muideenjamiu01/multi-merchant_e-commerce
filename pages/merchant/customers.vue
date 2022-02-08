<template>
    <div class="px-4 py-8 flex">
        <aside>
            <ContentsMerchantProfileCard/>
        </aside>
        <main class="w-full">
            <section class="antialiased text-gray-600 h-screen">
                <div class="flex flex-col ">
                    <!-- Table -->
                    <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header class="px-5 py-4 border-b border-gray-100">
                            <h2 class="font-bold text-black">Customers</h2>
                        </header>
                        <div class="p-3 bg-white">
                            <div class="overflow-x-auto">
                                <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-black bg-gray-50">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">S/No.</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Name</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Email</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Phone</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-center">Date</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        <tr v-for="customer in customers" :key="customer.id">
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="font-medium text-gray-800">{{customer.id}}</div>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="font-medium text-gray-800">{{customer.name}}{{customer.surname}}</div>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left">{{customer.name}}@youverify.co</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-medium">08064301017</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-lg text-center">22 / 10 / 2022</div>
                                            </td>
                                        </tr>
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
export default {
    layout: "merchant",
 data() {
    return {
      customers: [
          { name: 'Manos', id:1 }, 
          { name: 'Zino', id:2 },
          { name: 'Uyo', id:3 },
          { name: 'Kaka', id:4 },
          { name: 'Chima', id:5 },
          { name: 'Charles', id:6 },
          { name: 'Feline', id:7 },
          { name: 'Samuel', id:8 },
          { name: 'Charles', id:9 },
          { name: 'Favour', id:10 },
          ] 
    }
  }
}

</script>

<style>

</style>