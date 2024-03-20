<script setup>
import { ref, getCurrentInstance } from "vue";
import { state } from "../store.js";

const instance = getCurrentInstance();
const search = () => {
  instance.emit("search", state.searchTerm);
  state.searchTerm = "";
};
</script>
<template>
  <div>
    <h1>Search Movies</h1>
    <form @submit.prevent="search">
      <input
        type="text"
        v-model="state.searchTerm"
        placeholder="Enter movie title"
      />
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<style scoped>
input {
  width: 50vw;
  height: 30px;
  border-radius: 15px;
  border: none;
  margin-bottom: 20px;
}

button {
  color: white;
  background-color: blue;
  padding: 8px;
  border-radius: 7px;
  cursor: pointer;
}
</style>
