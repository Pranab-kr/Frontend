import { useState } from "react";

interface UserProfileState {
  name: string;
  age: number;
  email: string;
}

const UserProfile = () => {
  const [profile, setProfile] = useState<UserProfileState>({
    name: "",
    age: 0,
    email: "",
  });

  const updateName = (name: string) => {
    setProfile((prev) => ({ ...prev, name: name }));
  };

  return (
    <div>
      <h1>User Profile</h1>

      <input
        type="text"
        placeholder="Name"
        value={profile.name}
        onChange={(e) => updateName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={profile.age > 0 ? profile.age : ""}
        onChange={(e) =>
          setProfile({ ...profile, age: Number(e.target.value) })
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />
      <div>
        <h2>Profile Details</h2>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
        <p>Email: {profile.email}</p>
      </div>
    </div>
  );
};
export default UserProfile;
