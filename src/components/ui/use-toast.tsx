// src/components/ui/use-toast.tsx
import { useState } from "react";

export const useToast = () => {
  // Ubah tipe state menjadi 'string | null'
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message); // Set toast dengan string
    setTimeout(() => setToast(null), 3000); // Reset toast ke null setelah 3 detik
  };

  return {
    toast,
    showToast,
  };
};
