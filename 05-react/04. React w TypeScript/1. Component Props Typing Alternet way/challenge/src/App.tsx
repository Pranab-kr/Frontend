import AdminInfo from "./components/AdminInfo";
import Button from "./components/Button";
import UserInfo from "./components/UserInfo";
import type { AdminInfoType, Info } from "./components/types";

const App = () => {
  const user: Info = {
    id: 1,
    name: "Jhon Doe",
    email: "Jhondoe@gmail.com",
  };
  const admin: AdminInfoType = {
    id: 2,
    name: "Sandy",
    email: "sanmdy33@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  };

  return (
    <div>
      <Button
        label="Click"
        onClick={() => console.log("Clicked!")}
        disable={false}
      />

      <AdminInfo admin={admin} />
      <UserInfo user={user} />
    </div>
  );
};
export default App;
