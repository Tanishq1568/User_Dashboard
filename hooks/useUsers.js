"use client";

import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/users");

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();

      setUsers(data);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = (newUser) => {
    setUsers((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...newUser,
      },
    ]);
  };

  const deleteUser = (id) => {
    setUsers((prev) =>
      prev.filter((user) => user.id !== id)
    );
  };

  return {
    users,
    loading,
    error,
    addUser,
    deleteUser,
    refetch: fetchUsers,
  };
};

export default useUsers;