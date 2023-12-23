<template>
  <div>
    <h1>Customer List</h1>
    <table>
  <thead>
    <tr>      
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone Number</th>
      <th>Address</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="customer in customers" :key="customer.id">
      <td>{{ customer.id }}</td>
      <td>{{ customer.name }}</td>
      <td>{{ customer.email }}</td>
      <td>{{ customer.phone_number }}</td>
      <td>{{ customer.address }}</td>
      <td class="icon-cell">
            <button @click="deleteCustomer(customer.id)" class="btn btn-danger">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
              </svg>
            </button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const customers = ref([]);

const fetchCustomers = async () => {
try {
  const response = await fetch('http://localhost:8000/api/customers');
  if (response.ok) {
    customers.value = await response.json();
  } else {
    console.error('Failed to fetch customers');
  }
} catch (error) {
  console.error('Error fetching customers:', error);
}
};

onMounted(() => {
fetchCustomers();
});

</script>

<style scoped>
.customer-list {
margin: 20px;
}

h1 {
color: #333;
text-align: center;
font-family: Georgia, 'Times New Roman', Times, serif;
}


table {
width: 100%;
border-collapse: collapse;
margin-top: 10px;
}

th, td {
border: 1px solid #ddd;
padding: 8px;
text-align: left;
background-color: rgb(121, 149, 160);
}

th {
background-color: rgb(203, 242, 159);
text-align: center;
}
</style>

