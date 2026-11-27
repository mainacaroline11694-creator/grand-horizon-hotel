
import { useState } from "react";
import { supabase } from "./supabaseClient";

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    onLogin(data.user);
  };

  return (
    <div className="admin-login">
      <h2>Grand Horizon Hotel</h2>
      <h3>Administrator Login</h3>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Administrator email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AdminLogin;
