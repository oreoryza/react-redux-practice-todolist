import React from "react";
import { useDispatch } from "react-redux";
import { langEN, langID } from "../redux/lang/action";

const Navbar = ({currentLang}) => {
  const dispatch = useDispatch();

  return (
    <nav className="d-flex justify-content-end">
      {currentLang === "EN" ? (
        <button className="btn btn-outline-primary" onClick={() => dispatch(langID())}>IN</button>
      ) : (
        <button className="btn btn-outline-primary" onClick={() => dispatch(langEN())}>EN</button>
      )}
    </nav>
  );
};

export default Navbar;
