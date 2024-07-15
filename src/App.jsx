import "./App.css";
import ResponsiveAppBar from "./components/app-bar";
import ColorInversionFooter from "./components/footer";
import "./styles/index.scss";
import { Outlet } from "react-router-dom";

// let timer;

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <main>
        <Outlet />
      </main>
      <ColorInversionFooter />
    </>
  );
}
export default App;
