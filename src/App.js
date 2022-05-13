import A from "./HOC/A";
import B from "./HOC/B";
import UseMeMo from "./Hooks/UseMemo/useMemo";
import UseEffect from "./Hooks/UseEffect/useEffect";
import ChildRef from "./Hooks/UseRef/child";
import ParentRef from "./Hooks/UseRef/parent";
import Ref from "./Hooks/UseRef/useRef";
import Parent from "./Hooks/UseState/parent";
import "./styles.css";
import UseCallback from "./Hooks/UseCallback/useCallback";
import UseReducer from "./Hooks/UseReducer/useReducer";

export default function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Parent/> */}
      {/* <Ref/> */}
      {/* <ParentRef/> */}
      {/* <UseEffect /> */}
      {/* <A />
      <B /> */}
      {/* <UseMeMo /> */}
      {/* <UseCallback /> */}
      <UseReducer />
    </div>
  );
}
