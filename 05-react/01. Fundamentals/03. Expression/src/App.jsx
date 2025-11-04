import Greet from "./components/Greet";
import ProductInfo from "./components/ProductInfo";

const App = () => {
  const myName = "Pranab";
  const multiply = (a, b) => a * b;
  const specialClass = "simple-class";

  return (
    <section>
      <p>2 + 2 = {2 + 2}</p>

      <p>My name - {myName}</p>
      <p>My Num list - {[1, 2, 3, 4, 5, 6]}</p>
      <p>2 * 2 = {multiply(2, 2)}</p>
      <p className={specialClass}>This is simple class</p>
      <br />

      <Greet />

      <ProductInfo />
    </section>
  );
};

export default App;
