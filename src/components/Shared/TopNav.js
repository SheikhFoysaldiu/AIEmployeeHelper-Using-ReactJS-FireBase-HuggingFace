import React from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const TopNav = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <section className="max-w-6xl w-full mx-auto my-0 px-4 md:py-9">
      <div className="md:flex md:items-center md:justify-between">
        <div className="hidden md:block">
          <h1 className="md:text-xl font-semibold">AIEmployeeHelper</h1>
        </div>
        <div className="flex justify-end gap-8 py-2">
          <Link to="/">
            <button className="text-btnNavColor hover:text-btnHoverColor">
              Home
            </button>
          </Link>
          {user ? (
            <button
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="rounded-full text-btnNavColor hover:text-btnHoverColor">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default TopNav;
