import Counter from "./components/Counter";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";
import Todo from "./components/TodoList";

const App = () => {
  return (
    <div>
      <Counter />

      <Todo />

      <Profile />

      <ShoppingList />
    </div>
  );
};

export default App;