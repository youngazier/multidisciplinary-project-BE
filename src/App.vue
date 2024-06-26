<script setup> 
</script>

<template>
  <nav>
    <router-link to="/"> Home </router-link>
    <router-link to="/feed"> Feed </router-link>
    <router-link to="/register"> Register </router-link>
    <router-link to="/sign-in"> Login </router-link>
    <router-link to="/request-support-form">Request Support Form</router-link>
    <router-link to="/emergency-request-form">Emergency Request Form</router-link>
    <router-link to="/admin">Admin</router-link>
    <button @click="handleSignOut" v-if="isLoggedin">Sign out</button>
  </nav>
  <router-view />  
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const isLoggedin = ref(false);

  let auth;
  onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedin.value = true;
      } else {
        isLoggedin.value = false;
      }
    });
  })
  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push("/");
    });
  };

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
