import { Provider } from "react-redux";
import Canvas from "./components/canvas";
import Palette from "./components/palette/indexs";
import Switcher from "./components/switcher";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="flexbox just-right">
          <Switcher />
        </div>
        <div className="flexbox">
          <Palette />
          <Canvas />
        </div>
      </div>
    </Provider>
  );
}

export default App;
