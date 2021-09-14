import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header/Header";
import HeaderDown from "./components/Header/HeaderDown";
import MyProcesses from "./components/MyProcesses/MyProcesses";
import ProductPage from "./components/ProductPage/ProductPage";
import NewInfo from "./components/NewInfoHeader/NewInfo";

function App() {
  return (
    <div className="app">
      <NewInfo />
      <Header />
      <HeaderDown />

      <div className="app__main">
        <div className="app__mainContainer">
          <Banner />
          <MyProcesses />
          <ProductPage />
        </div>
      </div>
    </div>
  );
}

export default App;
