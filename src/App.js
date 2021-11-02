import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import POSTlIST from "./components/postList";
import SelectedPost from "./components/SelectedPost";

function App() {
  return (
    <div className="App">
      <ButtonComponent />
      <br />
      <POSTlIST />
      <br />
      --------------------------------------------
      <br />
      <SelectedPost />
    </div>
  );
}

export default App;
