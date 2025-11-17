import Comp2 from "./Comp2";

const Comp1 = ({name}) => {
  return (
    <div>
      {/* {console.log(name)} */}

      <Comp2 name={name} />

    </div>
  );
};

export default Comp1;