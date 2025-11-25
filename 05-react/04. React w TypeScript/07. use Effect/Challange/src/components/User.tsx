import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

const User = () => {
  // const [user, setUser] = useState<User[] | null>(null);
  const [user, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate fetching user data
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        user.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <h3>Address</h3>
            <p>
              {user.address.suite} {user.address.street}
            </p>
            <p>
              {user.address.city}, {user.address.zipcode}
            </p>
            <p>
              Geo: {user.address.geo.lat}, {user.address.geo.lng}
            </p>
          </div>
        ))
      )}
    </div>
  );
};
export default User;
