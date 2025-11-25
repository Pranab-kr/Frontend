import { type Info } from "./UserInfo";

type AdminInfo = Info & { admin: string };

const AdminInfo = ({ username, email, age, location, admin }: AdminInfo) => {
  return (
    <div>
      <h2>Admin Information</h2>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Location:</strong> {location.join(", ")}
      </p>
      <p>
        <strong>Admin Level:</strong> {admin}
      </p>
    </div>
  );
};
export default AdminInfo;
