const Userlist = () => {
  const users = [
    { id: 1, name: "Mikomin", age: 21 },
    { id: 2, name: "Riko", age: 20 },
    { id: 3, name: "Zani", age: 26 },
  ];

  return <div>
      {users.map((user) => (
        
        <div key={user.id}>
          <h1>Name: {user.name}</h1>
          <h1>Name: {user.age}</h1>
        </div>
      ))}
  </div>;
};

export default Userlist;
