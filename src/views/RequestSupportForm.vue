<template>
  <div>
    <h2>Request Support</h2>
    <form @submit.prevent="submitRequest">
      <textarea v-model="message" placeholder="Describe your issue" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default {
  setup() {
    const message = ref("");
    const db = getFirestore();
    const auth = getAuth();

    const submitRequest = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          await addDoc(collection(db, "request-support"), {
            uid: user.uid,
            message: message.value,
            timestamp: serverTimestamp(),
          });
          message.value = "";  // Clear the form after submission
        } catch (error) {
          console.error("Error submitting request:", error);
        }
      } else {
        console.error("No user is signed in.");
      }
    };

    return {
      message,
      submitRequest,
    };
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

textarea {
  width: 300px;
  height: 100px;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
}
</style>
