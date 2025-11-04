const Comp2 = ({ count, onClickHandel }) => {
  const handelClick = () => onClickHandel();

  return (
    <div>
      <p>{count}</p>

      <button onClick={handelClick}>Increment</button>
    </div>
  );
};

export default Comp2;
