import { create } from "zustand";

const useBearsStore = create((set) => {
  return {
    isLogin: !!localStorage.getItem("accessToken"),
    login: () => {
      set((state) => {
        return {
          login: (state.isLogin = true),
        };
      });
    },
    logout: () => {
      set((state) => {
        return {
          logout: ((state.isLogin = false), localStorage.clear(), alert("로그아웃 되었습니다.")),
        };
      });
    },
  };
});

export default useBearsStore;
