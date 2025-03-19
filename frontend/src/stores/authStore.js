import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = process.env.VUE_APP_API_URL + "/auth/login";

export const useAuthStore = defineStore("auth", {
  // <-- 'auth' as the id
  state: () => ({
    user: null,
    returnUrl: null,
  }),
  actions: {
    // In your authStore.js
    login(username, password) {
      return new Promise((resolve, reject) => {
        axios
          .post(baseUrl, {
            username: username, // Ensure this is being passed correctly
            Password: password, // Ensure this is being passed correctly
          })
          .then((response) => {
            // Handle successful login
            resolve(response.data);
          })
          .catch((error) => {
            // Handle error (this will likely be where the 400 error is triggered)
            reject(error);
          });
      });
    },
    logout(router) {
      this.user = null;
      localStorage.removeItem("token");
      router.push("/login");
    },
  },
});
