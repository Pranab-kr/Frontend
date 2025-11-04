const ValidPass = () => <h1> Valied Passward</h1>;
const InValidPass = () => <h1> Invalied Passward</h1>;

const Passward = ({ isValid }) => {
  // if (isValid) {
  //   return <ValidPass />;
  // }
  // return <InValidPass />;

  return isValid ? <ValidPass /> : <InValidPass />;
};

const Cart = () => {
  const items = ["Mouse", "KeyBoard", "Laptop"];

  return (
    <div>
      <h1>Cart 🛒</h1>
      {items.length > 0 && <h2>You have {items.length} items in Ur cart</h2>}

      <ul>
        <h4>Product</h4>

        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <section>
      <Passward isValid={true} />
      <Cart />
    </section>
  );
};

export default App;
