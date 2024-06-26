<template>
  <div>
    <h2>Admin Panel</h2>
    <div>
      <button @click="currentTab = 'support'">Request Support</button>
      <button @click="currentTab = 'emergency'">Emergency Request</button>
    </div>
    <div v-if="currentTab === 'support'">
      <RequestSupport />
    </div>
    <div v-if="currentTab === 'emergency'">
      <EmergencyRequest />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import RequestSupport from './RequestSupport.vue';
import EmergencyRequest from './EmergencyRequest.vue';

export default {
  components: {
    RequestSupport,
    EmergencyRequest
  },
  setup() {
    const currentTab = ref('support');
    return {
      currentTab
    };
  }
};
</script>

<style scoped>
button {
  margin-right: 10px;
}
</style>
