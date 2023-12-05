"use client";

function Logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("expiration_date");
  localStorage.removeItem("token");
}

export default Logout;
