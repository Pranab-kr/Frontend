import Card from "./components/Card";
import Person from "./components/Person";
import Product from "./components/Product";

const App2 = () => {
  return (
    <div>
      <Person name="Pranab" age={20} />

      <Product name="Oneplus" price={30000} />

      <Card>
        <h1>My card</h1>

        <p>This is some content</p>
      </Card>

      <Card>
        <h1>My card 2</h1>

        <p>This is some content</p>
      </Card>

      <Card>
        <h1>My card c 3</h1>

        <p>This is some content</p>
      </Card>
    </div>
  );
};

export default App2;