import NavBar from "./components/layouts/navBar/NavBar.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Mateo"} />
    </>
  );
}

export default App;
