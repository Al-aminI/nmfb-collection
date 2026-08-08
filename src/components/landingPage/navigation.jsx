// eslint-disable-next-line

import React, { useState, useEffect } from "react";

export const Navigation = (props) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (e, name) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeAll = () => {
    setOpenDropdown(null);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handler = () => closeAll();
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className={`navbar-toggle ${menuOpen ? "" : "collapsed"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top" onClick={() => closeAll()}>
            <img src="img/lg.png" alt="LOGO" />
          </a>
        </div>

        <div
          className={`collapse navbar-collapse ${menuOpen ? "in" : ""}`}
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/" className="page-scroll" onClick={() => closeAll()}>
                HOME
              </a>
            </li>
            <li>
              <a href="/gallery" className="page-scroll" onClick={() => closeAll()}>
                GALLERY
              </a>
            </li>

            <li className={`has-dropdown ${openDropdown === "bank" ? "open" : ""}`}>
              <a
                href="#about"
                className="page-scroll dropdown-toggle"
                onClick={(e) => toggleDropdown(e, "bank")}
              >
                OUR BANK <span className="dropdown-icon">&#9660;</span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="/corporateInformation" onClick={() => closeAll()}>Corporate information</a></li>
                <li><a href="/corporateGovernance" onClick={() => closeAll()}>Corporate Governance</a></li>
                <li><a href="/directorsProfile" onClick={() => closeAll()}>Director's Profile</a></li>
                <li><a href="/managementProfile" onClick={() => closeAll()}>Management Profile</a></li>
                <li><a href="/corporateSocialResponsibility" onClick={() => closeAll()}>Corporate Social Responsibility</a></li>
              </ul>
            </li>

            <li className={`has-dropdown ${openDropdown === "products" ? "open" : ""}`}>
              <a
                href="#services"
                className="page-scroll dropdown-toggle"
                onClick={(e) => toggleDropdown(e, "products")}
              >
                PRODUCTS
                <span className="dropdown-icon">&#9660;</span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="/guntunGatarinka" onClick={() => closeAll()}>Guntun Gatarin Ka – Lease Program</a></li>
                <li><a href="/hajjSavings" onClick={() => closeAll()}>Hajj/Christmas Savings – Festivities Program</a></li>
                <li><a href="/dabara" onClick={() => closeAll()}>Dabarar Noma – Astute Farming</a></li>
                <li><a href="/raiDaBuri" onClick={() => closeAll()}>Rai da Buri – Personal effects finance</a></li>
                <li><a href="/adashe" onClick={() => closeAll()}>Adashe – Daily Savings Contribution</a></li>
                <li><a href="/ilimiJari" onClick={() => closeAll()}>Ilimi Jari – Educational Finance Program</a></li>
                <li><a href="/Savings" onClick={() => closeAll()}>Savings, Current, Term and deposit</a></li>
                <li><a href="/infantSavings" onClick={() => closeAll()}>Infant Savings – Savings for Children</a></li>
                <li><a href="/ingantaSanaa" onClick={() => closeAll()}>Inganta Sana'ar Ka – Improving your trade</a></li>
                <li><a href="/halalSavings" onClick={() => closeAll()}>Halal Savings Scheme – Islamic Saving</a></li>
              </ul>
            </li>

            <li className={`has-dropdown ${openDropdown === "branches" ? "open" : ""}`}>
              <a
                href="#testimonials"
                className="page-scroll dropdown-toggle"
                onClick={(e) => toggleDropdown(e, "branches")}
              >
                BRANCHES
                <span className="dropdown-icon">&#9660;</span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#">NASARAWA</a></li>
                <li><a href="#">LAFIA</a></li>
                <li><a href="#">TOTO</a></li>
              </ul>
            </li>

            <li className={`has-dropdown ${openDropdown === "about" ? "open" : ""}`}>
              <a
                href="#team"
                className="page-scroll dropdown-toggle"
                onClick={(e) => toggleDropdown(e, "about")}
              >
                ABOUT US
                <span className="dropdown-icon">&#9660;</span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="/briefHistory" onClick={() => closeAll()}>Brief History of the Bank</a></li>
                <li><a href="/StatementOfFinancialAffairs" onClick={() => closeAll()}>Statement of Financial Affairs</a></li>
                <li><a href="/background" onClick={() => closeAll()}>Background</a></li>
              </ul>
            </li>

            <li className={`has-dropdown ${openDropdown === "contacts" ? "open" : ""}`}>
              <a
                href="#contact"
                className="page-scroll dropdown-toggle"
                onClick={(e) => toggleDropdown(e, "contacts")}
              >
                CONTACTS
                <span className="dropdown-icon">&#9660;</span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#">Nasarawa – 09169548959</a></li>
                <li><a href="#">Toto – 08052444501, 08147320148</a></li>
                <li><a href="#">Lafia – 07036563973, 08133946047</a></li>
              </ul>
            </li>

            <li>
              <a href="/privacyPolicy" className="page-scroll" onClick={() => closeAll()}>
                Privacy &amp; Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};