"use client";

import { useMemo, useState } from "react";

import useUsers from "@/hooks/useUsers";

import SearchBox from "@/components/SearchBox";
import UserFilters from "@/components/UserFilters";
import UserForm from "@/components/UserForm";
import UserCard from "@/components/UserCard";
import LoadingState from "@/components/LoadingState";
import ErrorState from "@/components/ErrorState";

const UsersDashboard = () => {
  const {
    users,
    loading,
    error,
    addUser,
    deleteUser,
    refetch,
  } = useUsers();

  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [sort, setSort] = useState("");

  const [deleteSuccess, setDeleteSuccess] =useState(false);

  const handleDelete = (id) => {
    deleteUser(id);

    setDeleteSuccess(true);

    setTimeout(() => {
      setDeleteSuccess(false);
    }, 3000);
  };

  const cities = [
    ...new Set(users.map((user) => user.city)),
  ];

  const filteredUsers = useMemo(() => {
    let result = [...users];

    result = result.filter((user) =>
      [
        user.name,
        user.username,
        user.email,
        user.city,
        user.company,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    if (city !== "All") {
      result = result.filter(
        (user) => user.city === city
      );
    }

    switch (sort) {
      case "nameAsc":
        result.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      case "nameDesc":
        result.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;

      case "cityAsc":
        result.sort((a, b) =>
          a.city.localeCompare(b.city)
        );
        break;

      case "companyAsc":
        result.sort((a, b) =>
          a.company.localeCompare(
            b.company
          )
        );
        break;

      default:
        break;
    }

    return result;
  }, [users, search, city, sort]);

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return (
      <ErrorState message={error} />
    );
  }

  return (
    <div className="dashboard">
      {deleteSuccess && (
        <div className="delete-overlay">
          <div className="delete-modal">
            <div className="delete-icon">
              🗑
            </div>

            <h3>
              User Deleted Successfully
            </h3>
          </div>
        </div>
      )}

      <h1 className="dashboard-title">
        User Management Dashboard
      </h1>

      <div className="top-controls">
        <SearchBox
          search={search}
          setSearch={setSearch}
        />

        <UserFilters
          cities={cities}
          city={city}
          setCity={setCity}
          sort={sort}
          setSort={setSort}
        />

        <button
          className="refresh-btn"
          onClick={refetch}
        >
          Refresh Users
        </button>
      </div>

      <UserForm addUser={addUser} />

      {filteredUsers.length === 0 ? (
        <div className="empty-state">
          No Users Found
        </div>
      ) : (
        <div className="users-grid">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersDashboard;