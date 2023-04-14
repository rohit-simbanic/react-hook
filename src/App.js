import "./App.css";
import ReactForm from "./components/ReactForm";
import UseRef from "./components/UseRef/UseRef";
import UseStateHook from "./components/UseStateHook";
import CustomHook from "./components/customHooks/CustomHook";
import UseCallBack from "./components/useCallBack/UseCallBack";
import UseContext from "./components/useContext/UseContext";
import { AppProvider } from "./components/useContext/UserContext";
import UseEffect from "./components/useEffect/UseEffect";
import UseLayoutEffect from "./components/useLayout/UseLayoutEffect";
import UseMemo from "./components/useMemo/UseMemo";
import UseReducer from "./components/useReducer/UseReducer";

function App() {
  const userData = {
    name: "Agent Vinod",
    age: 39,
    role: "actor",
  };
  return (
    <AppProvider>
      <ReactForm />
      <UseStateHook />
      <UseEffect />
      <UseContext userData={userData} />
      <UseReducer />
      <UseRef />
      <UseLayoutEffect />
      <UseMemo />
      <UseCallBack />
      <CustomHook />
    </AppProvider>
  );
}

export default App;
