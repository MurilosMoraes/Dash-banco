import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "./style.scss";

function Home() {
  const [active, setActive] = useState("home");
  return (
    <Navbar
      active={active}
      setActive={setActive}
      user={{
        firstName: "admin",
        lastName: "da silva",
        notifications: [1, 2, 3],
        email: "admin@admin.com",
      }}
    />
  );
}

export default Home;
