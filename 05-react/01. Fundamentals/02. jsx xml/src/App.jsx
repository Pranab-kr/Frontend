import JsxRules from "./components/JsxRules.jsx";
import WelcomeMassage from "./components/welcomeMassage.jsx";

const App = () => {
  return (
    <section id="section">
      <h1>My website</h1>

      <article>
        <h2>Welcome to react</h2>

        <p className="para">Paragraph</p>
      </article>

      <WelcomeMassage />

      <form>
        <label htmlFor="name">Name</label>

        <input type="text" name="name" id="name" placeholder="Enter ur name" />
      </form>

      <JsxRules />
    </section>
  );
};

export default App;
