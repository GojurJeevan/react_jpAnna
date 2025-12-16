import "./App.css";
import MainLayout from "./layout/MainLayout";
import { CardsAPI } from "./redux/Cards/cardsAPI";

function App() {
  return (
    <>
      {/* <MainLayout /> */}

      <CardsAPI />
      
    </>
  );
}

export default App;
