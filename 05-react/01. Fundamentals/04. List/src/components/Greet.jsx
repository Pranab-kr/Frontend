const Greet = () => {
  const greet = "Hello";

  const mydate = new Date();

  return (
    <div>
      <h1>{greet}</h1>

      <p>Date: {mydate.toLocaleDateString()}</p>
    </div>
  );
};

export default Greet;
