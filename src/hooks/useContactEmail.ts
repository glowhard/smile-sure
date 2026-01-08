import { useCallback, useMemo, useState } from "react";

type ToastState = { type: "success" | "error"; message: string } | null;

const TOAST_DURATION_MS = 3500;

export function useContactEmail() {
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  const clearToast = useCallback(() => setToast(null), []);

  const send = useCallback(
    async (payload: { email: string; name: string; phone: string; date: string }) => {
      if (isLoading) return;

      setIsLoading(true);
      try {
        const res = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          throw new Error("Failed to send message");
        }

        setToast({ type: "success", message: "Thank you! We will connect with you within 24 hours." });
      } catch (error) {
        setToast({
          type: "error",
          message: "Unable to send message. Please try again.",
        });
      } finally {
        setIsLoading(false);
        setTimeout(clearToast, TOAST_DURATION_MS);
      }
    },
    [clearToast, isLoading]
  );

  const toastVariant = useMemo(() => {
    if (!toast) return "";
    return toast.type === "success"
      ? "bg-green-100 text-green-900 border-green-200"
      : "bg-red-100 text-red-900 border-red-200";
  }, [toast]);

  return {
    isLoading,
    toast,
    toastVariant,
    send,
    clearToast,
  };
}

