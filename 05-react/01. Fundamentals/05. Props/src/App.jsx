const App = () => {
  return (
    <User
      img="https://simp6.jpg5.su/images3/1000051606edfb42e750845ce4.webp"
      name="Pranab"
      age={20}
      isMarried={false}
      hobbies={["Coding", "Reading", "Sleeping"]}
    />
  );
};

const User = (props) => {
  // console.log(props);
  return (
    <section>
      <img src={props.img} alt="None" width={200} />
      <h1>Name: {props.name}</h1>
      <h1>age: {props.age}</h1>
      <h1>isMarried: {props.isMarried}</h1>
      <h1>hobbies: {props.hobbies}</h1>
    </section>
  );
};


//Destructuring
// const User = ({img, name, age, isMarried, hobbies}) => {
//   // console.log(props);
//   return (
//     <section>
//       <img src={img} alt="None" width={200} />
//       <h1>Name: {name}</h1>
//       <h1>age: {age}</h1>
//       <h1>isMarried: {isMarried}</h1>
//       <h1>hobbies: {hobbies}</h1>
//     </section>
//   );
// };

export default App;
