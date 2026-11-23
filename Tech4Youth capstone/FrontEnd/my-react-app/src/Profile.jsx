import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "";

async function fetchProfile() {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("You are not logged in. Please log in to view your profile.");
  }

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
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile()
      .then((data) => setProfile(data))
      .catch((err) => setError(err.message));
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  if (error) {
    return (
      <div className="auth-wrapper">
        <div className="auth-card">
          <h2 className="auth-title">Profile</h2>
          <p className="auth-subtitle">{error}</p>
          <Link className="auth-link" to="/login">Go to Login</Link>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="auth-wrapper">
        <div className="auth-card">
          <p className="auth-subtitle">Loading profile...</p>
        </div>
      </div>
    );
  }

  const fullName = profile.fullName || profile.user?.fullName || "User";
  const email = profile.email || profile.user?.email || "";

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">Welcome, {fullName}</h2>
        <p className="auth-subtitle">Email: {email}</p>

        <div className="button-group" style={{ maxWidth: "100%", flexDirection: "column" }}>
          <Link className="btn-primary" to="/courses">Browse Courses</Link>
          <button className="btn-secondary" type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}