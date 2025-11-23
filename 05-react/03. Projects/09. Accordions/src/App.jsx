import Accodion from "./components/Accodion";
import "./style.css";
import { accordionData } from "./utils/content";

const App = () => {
  return (
    <div className="accordion">
      {accordionData.map(({ title, content }, index) => (
        <Accodion key={index} title={title} content={content} />
      ))}
    </div>
  );
};

export default App;
