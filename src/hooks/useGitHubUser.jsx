import { useEffect, useState } from "react";

const useGitHubUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://api.github.com/users");

        if (!response.ok) {
          throw new Error(":: Failed to fetch data");
        }

        const data = await response.json();

        const randomId = Math.floor(Math.random() * data.length);
        const randomUser = data[randomId];
        console.log("randomUser: ", randomUser);

        setUser(randomUser);
      } catch (err) {
        console.error(":: Error fetching data: ", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return { user, loading, error };
};

export default useGitHubUser;
