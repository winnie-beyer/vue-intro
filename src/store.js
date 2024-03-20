import { reactive, watchEffect } from "vue";

const key = import.meta.env.VITE_KEY;
const API_URL = `https://www.omdbapi.com/?apikey=${key}`;

const handleSearch = (term) => {
  searchTerm.value = term;
};

export const state = reactive({
  data: [],
  handleSearch: handleSearch,
  searchTerm: "running",
});

watchEffect(async () => {
  const response = await fetch(`${API_URL}&s=${state.searchTerm}`);
  const data = await response.json();
  state.data = data.Search;
});
