import "./App.css";
import LeftPanel from "./components/LeftPanel";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="flex w-[100%]">
      <LeftPanel />
      <div className="flex flex-col w-[95%]">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
