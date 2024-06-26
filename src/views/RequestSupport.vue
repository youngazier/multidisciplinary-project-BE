<template>
  <div>
    <h3>Request Support</h3>
    <ul>
      <li v-for="request in requests" :key="request.id">
        <p>{{ request.data().message }}</p>
        <small>Submitted by User ID: {{ request.data().uid }}</small>
        <br/>
        <button @click="deleteRequest(request.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default {
  setup() {
    const requests = ref([]);
    const db = getFirestore();

    const fetchRequests = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'request-support'));
        requests.value = querySnapshot.docs;
      } catch (error) {
        console.error('Error fetching support requests:', error);
      }
    };

    const deleteRequest = async (id) => {
      try {
        await deleteDoc(doc(db, 'request-support', id));
        requests.value = requests.value.filter(request => request.id !== id);
      } catch (error) {
        console.error('Error deleting request:', error);
      }
    };

    onMounted(fetchRequests);

    return {
      requests,
      deleteRequest,
    };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f9f9f9;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

button {
  padding: 5px 10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #c0392b;
}
</style>
