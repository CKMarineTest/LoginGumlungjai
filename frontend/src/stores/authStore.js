import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = process.env.VUE_APP_API_URL + "/auth/login";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    returnUrl: null,
  }),
  actions: {
    // ในฟังก์ชัน login นี้จะรับ username และ password
    login(username, password) {
      return new Promise((resolve, reject) => {
        axios
          .post(baseUrl, {
            username: username,
            password: password,
          })
          .then((response) => {
            if (response.data && response.data.token) {
              this.user = response.data.user;
              console.log(response.data.user)
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("user", JSON.stringify(response.data.user));
              resolve(true);
            } else {
              reject(new Error("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"));
            }
          })

          .catch(() => {
            // const message =
            //   error.response?.data?.message || "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";

            const message = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" || "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
            reject(new Error(message));
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
