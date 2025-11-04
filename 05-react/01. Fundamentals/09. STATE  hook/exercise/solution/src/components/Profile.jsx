import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const haldelChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;

    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={haldelChange}
        />
      </label>

      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={haldelChange}
          />
        </label>
      </div>

      <h3>Profile Information</h3>

      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};

export default Profile;
