import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = process.env.VUE_APP_API_URL + "/auth/login";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    returnUrl: null,
  }),
  actions: {
    login(username, password) {
      return new Promise((resolve, reject) => {
        axios
          .post(baseUrl, {
            username: username,
            Password: password,
          })
          .then((response) => {
            if (response.data && response.data.token) {
              this.user = response.data.user;
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("user", JSON.stringify(response.data.user));
    
              const returnUrl = this.returnUrl || '/Dashboard';
              this.returnUrl = null; // reset หลังใช้
              resolve(returnUrl);
            } else {
              reject(new Error("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"));
            }
          })
          .catch(() => {
            reject(new Error("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"));
          });
      });
    },    
    logout(router) {
      this.user = null;
      localStorage.removeItem("token");
      router.push("/login");
    },
    loadUser() {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        this.user = JSON.parse(savedUser);
      }
    }


  },
});
