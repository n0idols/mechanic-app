"use client";
import { useState } from "react";

export default function Navbar() {
  const [isMob, setMob] = useState(false);

  return (
    <nav className=" bg-gray-50 ">
      <div className="mx-auto max-w-6xl p-2">
        <div className="flex justify-between">
          {/* LOGO */}
          <div>
            <h1 className="text-3xl font-bold italic">
              <span className="font-thin">//</span>
              Autofy
            </h1>
          </div>
          {/* Primary Nav */}
          <div className="hidden items-center justify-center space-x-6 text-sm font-light md:flex">
            <a href="/services">Services</a>
            <a href="/appointments">Appointments</a>
            <a href="/about">How it Works</a>
          </div>

          {/* secondary nav */}
          <div className=" hidden items-center space-x-4 text-sm font-light md:flex">
            <a href="/account">Account</a>
          </div>

          {/* mob button */}
          <button
            onClick={() => setMob(!isMob)}
            className="flex items-center md:hidden"
          >
            menu
          </button>
        </div>
      </div>
      {/* mob nav */}
      {isMob ? (
        <div className="absolute h-1/2 w-full bg-green-200 md:hidden">
          <a href="/services">Services</a>
          <a href="/appointments">Appointments</a>
          <a href="/about">How it Works</a>
          <a href="/account">Account</a>
        </div>
      ) : (
        <></>
      )}
    </nav>
    // <nav className="navbar">
    //   <a href="/">
    //     <h1 className="text-6xl font-bold">Autofy</h1>
    //   </a>
    //   <div className="flex w-1/2 items-center justify-end space-x-8 bg-slate-200">

    //   </div>
    // </nav>
  );
}
