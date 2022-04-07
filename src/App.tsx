import { Provider } from "react-redux";
import Canvas from "./components/canvas";
import Palette from "./components/palette/indexs";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Palette />
        <Canvas />
      </div>
    </Provider>
  );
}

export default App;
