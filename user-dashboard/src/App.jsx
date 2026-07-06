import { useEffect, useMemo, useState } from "react";
import { fetchUsers } from "./api/userApi";
import UserList from "./components/UserList";
import SearchBar from "./components/SearchBar";
import "./styles/app.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  // 📡 Fetch users
  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  // ⚡ Memoized filtering
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  if (loading) return <h2>Loading users...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  return (
    <div className="app">
      <h1>User Dashboard</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <UserList users={filteredUsers} />
    </div>
  );
}