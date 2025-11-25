import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";

const App = () => {
  return (
    <div>
      <h1>Admin Info 👇</h1>
      <AdminInfo
        username="Alex"
        email="alex@gmail.com"
        age={20}
        location={["Earth", "USA"]}
        admin="YES"
      />

      <h1>User Info 👇</h1>
      <UserInfo
        username="RAJ"
        email="alex@gmail.com"
        age={20}
        location={["Earth", "UNKNOWN"]}
      />
    </div>
  );
};
export default App;
