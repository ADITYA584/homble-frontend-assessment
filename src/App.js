import "./App.css";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import Store from "./store/store";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
