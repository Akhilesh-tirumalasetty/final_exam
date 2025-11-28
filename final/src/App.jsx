import React from "react";
import { useTheme } from "./ThemeContext.jsx";

export default function App() {
const { theme, toggleTheme } = useTheme();

return (
<div className={theme === "light" ? "light" : "dark"}>
<h1>KL Student Portal</h1>
<button onClick={toggleTheme}>Toggle Theme</button>
  <Dashboard />
  <Profile />
</div>
);
}

function Dashboard() {
const { theme } = useTheme();
return <div className="card">Dashboard - {theme} mode</div>;
}

function Profile() {
const { theme } = useTheme();
return <div className="card">Profile - {theme} mode</div>;
}