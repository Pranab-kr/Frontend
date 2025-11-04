const Greet = ({timeOfDay}) => {

 return timeOfDay === "Morning"? (<h1>Good Morning!</h1>) : (<h1>Good AfterNoon</h1>)


};

export default Greet;