// import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import IceCreameContainer from "./Components/IceCreameContainer";
import ShopContainer from "./Redux/SHOP/ShopContainer";
function App() {
  return (
    <div className="App-header">
      {/* <CakeContainer />

      <IceCreameContainer /> */}

      <ShopContainer />
    </div>
  );
}

export default App;
