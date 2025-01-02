import { createContext, useContext, useState, ReactNode } from "react";

interface AlertContextType {
  isOpen: boolean;
  type: string;
  message: string;
  onOpen: (type: any, message: string) => void;
  onClose: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: "success",
    // Message to be displayed, can be any string
    message: "",
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type: any, message: string) =>
          setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: "", message: "" }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = (): AlertContextType => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error("useAlertContext must be used within an AlertProvider");
  }
  return context;
};
