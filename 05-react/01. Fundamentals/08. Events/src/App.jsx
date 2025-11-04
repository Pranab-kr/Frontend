// const Button = () => {
//   return <button onClick={() => console.log("U click")}>Click Me</button>
// }

const Button = () => {
  const Uclick = () => console.log(Math.round(Math.random() * 10));
  return <button onClick={Uclick}>Click Me</button>;
};

const Copy = () => {
  const copyHandel = () => {
    console.log("Stop Copy");
  };

  return (
    <p onCopy={copyHandel}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
      voluptatem hic quia provident, saepe quidem itaque error.
    </p>
  );
};

function MoveHandel() {
  alert("Mouse Move Happened");
  console.log("Mouse moved");
}

const Move = () => {
  return (
    <p onMouseMove={MoveHandel}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit ullam eos,
      nulla commodi aperiam autem iure doloremque! Sed, totam porro.
    </p>
  );
};

const App = () => {
  return (
    <div>
      <Button />

      <Copy />

      {/* <Move /> */}
    </div>
  );
};

export default App;
