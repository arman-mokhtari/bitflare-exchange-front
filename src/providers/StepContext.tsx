"use client";

import { useGetUser } from "@/hooks/useAuth";
import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from "react";

interface StepContextType {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepProvider = ({ children }: { children: ReactNode }) => {
  const { data } = useGetUser();
  const { cart } = data || {};

  const [step, setStep] = useState<number>(1);
  const initialSetupDone = useRef(false);

  useEffect(() => {
    if (!initialSetupDone.current && cart && cart.productDetail) {
      setStep(cart.productDetail.length > 0 ? 2 : 1);
      initialSetupDone.current = true;
    }
  }, [cart]);

  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStepContext = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error("useStepContext must be used within a StepProvider");
  }
  return context;
};
