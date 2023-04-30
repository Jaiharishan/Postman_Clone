import React from "react";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    googleLogout();
    navigate("/login");
  };

  return (
    <div className="absolute w-full border-t-4 border-orange-500 bg-white">
      <div className="border-b border-gray-300">
        <div className="flex max-w-6xl mx-auto items-center justify-between">
          <div className="py-4 px-4 text-2xl font-semibold text-orange-500">
            POSTMAN CLONE
          </div>
          <div
            className="my-2 mx-4 px-4 py-2 text-lg font-semibold border border-orange-300 rounded-md cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}
