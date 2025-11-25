import Chieldren from "./components/Chieldren";
import OldWay from "./components/OldWay";
import User from "./components/User";

const App = () => {
  return (
    <div>
      <User name={"Pranab"} age={20} isStudent={true} />

      <Chieldren>
        <h1>Pranab</h1>
      </Chieldren>

      <OldWay name={"Pranab"} age={20} isStudent={true}/>
    </div>
  );
};
export default App;
