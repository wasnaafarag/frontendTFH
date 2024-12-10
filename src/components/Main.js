import { useState } from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const Main = () => {
  const [page, setPage] = useState("home");

  let currentPage;
  if (page === "home") currentPage = <Home />;
  else if (page === "login") currentPage = <LoginForm navigate={setPage} />;
  else if (page === "register") currentPage = <RegistrationForm navigate={setPage} />;

  return (
    <div>
      <NavBar navigate={setPage} />
      {currentPage}
    </div>
  );
};

export default Main;