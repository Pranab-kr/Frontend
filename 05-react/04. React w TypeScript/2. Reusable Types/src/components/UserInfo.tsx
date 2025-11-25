export type Info = {
  username: string;
  email: string;
  age: number;
  location: string[];
}

const UserInfo = ({username, email, age, location}: Info) => {
  return (
    <div>
      <h2>User Information</h2>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location.join(", ")}</p>
    </div>
  )
}
export default UserInfo