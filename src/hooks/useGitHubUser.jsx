import { useCallback, useEffect, useState } from "react";

const useGitHubUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch("https://api.github.com/users");

      if (!response.ok) throw new Error(":: Failed to fetch data");

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
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { user, loading, error, fetchUsers };
};

export default useGitHubUser;
