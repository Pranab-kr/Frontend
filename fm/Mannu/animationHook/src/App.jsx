import AnimatedText from "./components/AnimatedText";
import AnimationSequence from "./components/AnimationSequence";

const App = () => {
  return (
    <div className="min-h-screen bg-black p-8">
      <AnimationSequence />
  
      <AnimatedText />
    </div>
  );
};

export default App;