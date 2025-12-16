import Dashboard from "./components/Sidebar";
import Content from "./components/Content";
const App = () => {
  return (
    <div className="flex">
      <Dashboard />
      <div className="flex-1">
        <Content />
      </div>
    </div>
  );
};

export default App;