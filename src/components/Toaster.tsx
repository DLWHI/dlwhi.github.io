import { useCallback, useEffect, useRef, useState } from "react";
import "./Toaster.css";

export type ToastType = "info";

export interface ToastPayload {
  message: string;
  type?: ToastType;
  duration?: number;
}

export const toast = {
  show(message: string, type: ToastType = "info", duration = 3000) {
    const event = new CustomEvent<ToastPayload>("app-toast", {
      detail: { message, type, duration },
    });
    window.dispatchEvent(event);
  },
};

export function Toaster() {
  const [message, setMessage] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const cleanToast = useCallback(() => {
    const toast = ref.current;
    if (toast) {
      toast.removeEventListener("animationend", cleanToast);
      toast.classList.remove("toaster-closing");
      toast.classList.add("toaster-opening");
      setMessage("");
    } else {
      console.log("Error: trying to dismiss unmounted toast");
    }
  }, [ref.current]);

  const dismissToast = useCallback(() => {
    const toast = ref.current;
    if (toast) {
      toast.addEventListener("animationend", cleanToast);
      toast.classList.add("toaster-closing");
      toast.classList.remove("toaster-opening");
    } else {
      console.log("Error: trying to dismiss unmounted toast");
    }
  }, [ref.current]);

  const handleToast = (e: Event) => {
    const event = e as CustomEvent<ToastPayload>;
    setMessage(event.detail.message);

    setTimeout(dismissToast, event.detail.duration || 3000);
  };

  useEffect(() => {
    window.addEventListener("app-toast", handleToast);
    return () => window.removeEventListener("app-toast", handleToast);
  }, []);

  return (
    <div className="toaster-container">
      {message && (
        <div ref={ref} className="toaster toaster-opening">
          {message}
        </div>
      )}
    </div>
  );
}

export function copyToClipboard(text: string, message: string) {
  navigator.clipboard.writeText(text);
  toast.show(message);
}
