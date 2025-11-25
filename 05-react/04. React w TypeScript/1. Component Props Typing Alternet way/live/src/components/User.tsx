// type userInfo = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }

interface userInfo {
  name: string;
  age: number;
  isStudent: boolean;
}

const User = ({
  name,
  age,
  isStudent,
}: userInfo) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{isStudent}</h2>
    </div>
  );
};
export default User;
