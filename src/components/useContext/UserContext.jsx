import { createContext, useContext } from "react";
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const userData = {
    name: "Vinod",
    age: 28,
  };
  return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;
};
// custom hook

const useCustomContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useCustomContext };
