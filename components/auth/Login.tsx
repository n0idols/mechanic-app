"use client";

import { useState } from "react";

export default function Login() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    console.log("sup niggaaaa");
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="email" className="label">
        <span className="label-text">Email</span>
      </label>
      <input
        className="input input-primary"
        type="email"
        placeholder="Your email"
        autoComplete="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password" className="label">
        <span className="label-text">Password</span>
      </label>
      <input
        className="input input-primary"
        type="password"
        placeholder="Password"
        autoComplete="new-password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* <input className="syrrup" type="syrrup" name="syrrup" /> */}

      <div className="mt-6">
        <button type="submit" className="btn btn-block">
          Sign Up
        </button>
      </div>
    </form>
  );
}
