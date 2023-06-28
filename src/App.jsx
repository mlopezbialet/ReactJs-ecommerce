import Navbar from "./components/layout/navbar/Navbar";
import ItemList from "./components/page/itemlist/ItemList";

function App() {
  return (
    <div>
      <Navbar />
      <h2>BIENVENIDOS</h2>
      <itemList saludo={saludo}></itemList>
    </div>
  );
}

export default App;
