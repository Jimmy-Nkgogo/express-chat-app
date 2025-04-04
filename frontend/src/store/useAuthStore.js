import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigninUp: false,
  isLogginIn: false,
  isUpdatingProfile: false,

  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const response = await axiosInstance.get("/auth/check");
      set({ authUser: response.data });
    } catch (error) {
      console.log("Error in checkAuth Zustand:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  signup: async (data) => {
    set({ isSigninUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      console.log(res.data);
      toast.success("Account created successfully");

      set({ authUser: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigninUp: false });
    }
  },
  login: async (data) => {
    set({ isLogginIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged in Successfully.");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLogginIn: false });
    }
  },
  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  updateProfile: async (data) => {
    set({isUpdatingProfile: true})
    try {
      const res = await axiosInstance.put("/auth/update-profile",data);
      
      set({authUser: res.data});
      toast.success("Profile updated successfully")

    } catch (error) {
      toast.error("Error in uploading")
    } finally {
      set({isUpdatingProfile: false})
    }
  }
}));
