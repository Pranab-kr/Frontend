import './components/index.css'
import { CiShoppingCart } from "react-icons/ci";
import { FaBeer } from "react-icons/fa";

const App = () => {
  const styles = {
    color: "crimson",
    backgroundColor: "pink",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <section>
      <h1
        style={{
          color: "crimson",
          backgroundColor: "pink",
          padding: "2rem",
          margin: "2rem",
        }}
      >
        Hello, Pranab
      </h1>

      <h1 style={styles}>How are u</h1>

      <h1>Separate File for style</h1>

      <CiShoppingCart />

      <FaBeer size={30} color='#fff' />
    </section>
  );
};

export default App;
