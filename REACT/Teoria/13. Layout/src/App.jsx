import "./App.css";
import { ButtonOne, ButtonTwo } from "./components";
import { FlexCenter } from "./layouts/FlexCenter";

const App = () => {
  return (
    <FlexCenter class={"containerButton"}>
      <ButtonOne />
      <ButtonTwo />
    </FlexCenter>
  );
};

export default App;
