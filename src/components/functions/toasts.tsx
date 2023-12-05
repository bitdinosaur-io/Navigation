"use client";
import toast from "react-hot-toast";

export const SuccessToast = (params: any, duration?: any) => {
  return toast.success(params, {
    duration: duration || undefined,
    style: {
      borderRadius: "9999px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "#60ca9c",
      background: "#f2faf7",
      color: "#175440",
    },
  });
};

export const ErrorToast = (params: any, duration?: any) => {
  return toast.error(params, {
    duration: duration || undefined,
    style: {
      borderRadius: "9999px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "#e05659",
      background: "#fcf1f1",
      color: "#951e21",
    },
  });
};

export const CustomBlueToast = (params: any, duration?: any, icon?: any) => {
  return toast(params, {
    duration: duration || undefined,
    icon: icon || undefined,
    style: {
      borderRadius: "9999px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "#8cb5f7",
      background: "#ecf5ff",
      color: "#2256d8",
    },
  });
};

export const CustomBYellowToast = (params: any, duration?: any, icon?: any) => {
  return toast(params, {
    duration: duration || undefined,
    icon: icon || undefined,
    style: {
      borderRadius: "9999px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "#e2ad45",
      background: "#fefdec",
      color: "#894d19",
    },
  });
};

export const CustomRedToast = (params: any, duration?: any, icon?: any) => {
  return toast(params, {
    duration: duration || undefined,
    icon: icon || undefined,
    style: {
      borderRadius: "9999px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "#e05659",
      background: "#fcf1f1",
      color: "#951e21",
    },
  });
};
