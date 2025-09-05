// eslint-disable-next-line

import React from "react";
import { useNavigate } from "react-router-dom";



export const Navigation = (props) => {
  
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src="img/lg.png" alt="LOGO" height={60} width={120} />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/" className="page-scroll">
                HOME
              </a>
            </li>

            <li>
              <a href="#about" class="page-scroll">
                OUR BANK <span class="dropdown-icon">&#9660;</span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="/corporateInformation" id="dropdown-item">
                    Corporate information
                  </a>
                </li>
                <li>
                  <a href="/corporateGovernance" id="dropdown-item">
                    Corporate Governance
                  </a>
                </li>
                <li>
                  <a href="/directorsProfile" id="dropdown-item">
                    Director’s Profile
                  </a>
                </li>
                <li>
                  <a href="/managementProfile" id="dropdown-item">
                    Management Profile
                  </a>
                </li>
                <li>
                  <a href="corporateSocialResponsibility" id="dropdown-item">
                    Corporate Social Responsibility
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#services" className="page-scroll">
                PRODUCTS
                <span class="dropdown-icon">&#9660;</span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="/guntunGatarinka" id="dropdown-item">
                    Guntun Gatarin Ka – Lease Program
                  </a>
                </li>
                <li>
                  <a href="/hajjSavings" id="dropdown-item">
                    Hajj/Christmas Savings – Festivities Savings Program
                  </a>
                </li>
                <li>
                  <a href="/dabara" id="dropdown-item">
                    Dabarar Noma- Astute Farming
                  </a>
                </li>
                <li>
                  <a href="/raiDaBuri" id="dropdown-item">
                    {" "}
                    Rai da Buri – Personal effects finance
                  </a>
                </li>
                <li>
                  <a href="/adashe" id="dropdown-item">
                    Adashe – Daily Savings Contribution
                  </a>
                </li>
                <li>
                  <a href="/ilimiJari" id="dropdown-item">
                    Ilimi Jari – Educational Finance Program
                  </a>
                </li>
                <li>
                  <a href="/Savings" id="dropdown-item">
                    Savings, Current, Term and deposit
                  </a>
                </li>
                <li>
                  <a href="/infantSavings" id="dropdown-item">
                    {" "}
                    Infant Savings – Savings for Children
                  </a>
                </li>
                <li>
                  <a href="/ingantaSanaa" id="dropdown-item">
                    {" "}
                    Inganta Sana’ar Ka – Improving your trade
                  </a>
                </li>
                <li>
                  <a href="/halalSavings" id="dropdown-item">
                    Halal Savings Scheme - Islamic Saving
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                BRANCHES
                <span class="dropdown-icon">&#9660;</span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#" id="dropdown-item">
                    NASARAWA
                  </a>
                </li>
                <li>
                  <a href="#" id="dropdown-item">
                    LAFIA
                  </a>
                </li>
                <li>
                  <a href="#" id="dropdown-item">
                    TOTO
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                ABOUT US
                <span class="dropdown-icon">&#9660;</span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="/briefHistory" id="dropdown-item">
                    Brief History of the Bank
                  </a>
                </li>
                <li>
                  <a href="/StatementOfFinancialAffairs" id="dropdown-item">
                    Statement of Financial Affairs
                  </a>
                </li>
                <li>
                  <a href="/background" id="dropdown-item">
                    Background
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                CONTACTS
                <span class="dropdown-icon">&#9660;</span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#" id="dropdown-item">
                    Nasarawa – 08067346241,08030594091

                  </a>
                </li>
                <li>
                  <a href="#" id="dropdown-item">
                    Toto – 08052444501, 08147320148
                  </a>
                </li>
                <li>
                  <a href="#" id="dropdown-item">
                    Lafia – 07036563973, 08133946047
                    
                  </a>
                </li>
              </ul>
            </li>
            <li>
            <a href="/privacyPolicy" className="page-scroll">
                Privacy & Policy
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};
