import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chatz-theme") || "ret0",
  setTheme: (theme) => {
    localStorage.setItem("chatz-theme", theme);
    set({ theme });
  },
}));
