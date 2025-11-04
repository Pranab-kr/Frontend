import Greet from "./components/Greetings";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div>
      <Weather />

      <UserStatus loggedIn={true} isAdmin={true} />

      <Greet timeOfDay="Morning" />
    </div>
  );
};

export default App;
