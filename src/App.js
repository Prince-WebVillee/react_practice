import UseEffect from "./Hooks/UseEffect/useEffect";
import ChildRef from "./Hooks/UseRef/child";
import ParentRef from "./Hooks/UseRef/parent";
import Ref from "./Hooks/UseRef/useRef";
import Parent from "./Hooks/UseState/parent";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Parent/> */}
      {/* <Ref/> */}
      {/* <ParentRef/> */}
      <UseEffect />
    </div>
  );
}
