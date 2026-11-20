import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "";

async function fetchProfile() {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/api/auth/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    throw new Error("Session expired. Please log in again.");
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unauthorized");
  }

  return data;
}

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProfile()
      .then((data) => setProfile(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>{error}</p>;
  if (!profile) return <p>Loading profile...</p>;

  return (
    <div>
      <h2>Welcome, {profile.fullName || profile.user?.fullName}</h2>
      <p>Email: {profile.email || profile.user?.email}</p>
    </div>
  );
}