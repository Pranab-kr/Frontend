import { useState } from "react";

const FriendsComp = () => {
  const [friend, setFriend] = useState(["Alex", "John"]);

  console.log(friend);

  const addOneFriend = () => setFriend([...friend, "Pranab"]);
  const removeOneFriend = () => setFriend(friend.filter((f) => f !== "John"));

  const updateOneFriend = () => {
    setFriend(friend.map((f) => (f === "Alex" ? "Alex Smith" : f)));
  };

  return (
    <section>
      {friend.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}

      <button onClick={addOneFriend}>Add New Friend</button>
      <button onClick={removeOneFriend}>Remove New Friend</button>
      <button onClick={updateOneFriend}>Remove New Friend</button>
    </section>
  );
};

export default FriendsComp;
