import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header/Header";
import HeaderDown from "./components/Header/HeaderDown";
import ProductPage from "./components/ProductPage/ProductPage";

function App() {
  return (
    <div className="app">
      <Header />
      <HeaderDown />

      <div className="app__main">
        <div className="app__mainContainer">
          <Banner />
          <ProductPage />
        </div>
      </div>
    </div>
  );
}

export default App;
