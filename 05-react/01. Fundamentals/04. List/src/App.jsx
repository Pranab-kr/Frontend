import Userlist from "./components/Userlist";

const App = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const userInfo = [
    {
      username: "Pranab",
      email: 'pranabm55@gmail.com',
      location: "india"
    },
    {
      username: "ram",
      email: 'ramm55@gmail.com',
      location: "USA"
    },
    {
      username: "Jadu",
      email: 'Jadu55@gmail.com',
      location: "Canada"
    },
  ]
  return (
    <main>
      {numbers.map((num) => (
        <ul key={num}>
          <li>{num}</li>
        </ul>
      ))}

      {userInfo.map((user) => (
        <ul key={Math.random()}>

        <li>{user.username}</li>
        <li>{user.email}</li>
        <li>{user.location}</li>

        </ul>
      ))}

      {/* Destreucture  */}
      {/* {userInfo.map(({username, email, location}) => (
        <ul key={Math.random()}>

        <li>{username}</li>
        <li>{email}</li>
        <li>{location}</li>

        </ul>
      ))} */}

      <Userlist />
    </main>
  );
};

export default App;
