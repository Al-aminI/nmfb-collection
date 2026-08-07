import React from "react";

export const DP = () => {
  const directors = [
    {
      num: "1",
      name: "Alh Isa Ahmed",
      role: "The Chairman",
      initials: "IA",
      bio: "Alh Isa Ahmed holds a B.Sc. in Political Science from Ahmadu Bello University Zaria, an MSc in Public Administration from the Graduate School of Public Administration New York University USA, a Post Graduate Diploma in Islamic Banking and Insurance from the United Kingdom, and a Certificate in Microfinance from Boulder Institute of Microfinance Boulder USA. Between 1973 and 1980, he worked as an Administrative Officer with the defunct Benue Plateau State Ministries of Trade Industry and Cooperatives, Ministry of Works and Cabinet Office. In 1980, Alh Isa Ahmed joined the United Bank for Africa PLC where he retired as Assistant General Manager and Regional Coordinator for branches in the nineteen Northern States having served for eighteen years. Alh Ahmed was a pioneer Director of Anchor Pension Ltd Abuja and Nigeria Deposit Insurance Corporation (NDIC) Appointed as Management Agent of Triumph Bank PLC (In Liquidation) from June 2010 to March 2014. He has been the Chairman of Nasarawa Microfinance Bank since 2015 to date. Alh Ahmed is a member/Fellow of the Institute of Directors (IoD) Nigeria. He is presently the Chairman of many companies with diversified portfolios investment in the Nigerian economy.",
    },
    {
      num: "2",
      name: "Alh Usman Musa Ahmed",
      role: "Director",
      initials: "UM",
      bio: "Born on 1st April 1965, a graduate of Business Administration who joined the banking industry in 1992. He rose through the ranks in the defunct Savannah Bank to the rank of Manager, later a Senior Manager with Inland Bank PLC and Finbank PLC, and became the Managing Director of FIMS Microfinance Bank from 2010 to 2014. He has vast knowledge in banking and Microfinance in particular, having attended many courses in the field and is a certified Microfinance Banker. He is presently a director with FIMS MFB and joined the Board of Nasarawa Microfinance Bank in September 2023.",
    },
    {
      num: "3",
      name: "Alh Sule Ladan",
      role: "Director",
      initials: "SL",
      bio: "A member of the Nigerian Institute of Management and Chartered Institute of Bankers; a graduate of Economics who was at one time Regional Manager of the defunct Bank of the North Ltd (2005). He started his banking career at United Bank of Africa in 1974 before moving to Bank of the North in 1976 where he rose from an officer to Regional Manager over the years. He attended different courses within and outside the bank in different aspects of banking and finance. He is now retired and become a philanthropist, having built a school to help less privileged children receive a good educational background. He is presently the Chairman, Board Audit Committee of the Bank.",
    },
    {
      num: "4",
      name: "Prof. Maikano Mohammed Ari",
      role: "Director",
      initials: "MM",
      bio: "An animal scientist specializing in Agricultural & Community driven development projects, monitoring, evaluation, process development and facilitation. He has been a Consultant to many International Development Organisations in these fields. He is an academician of repute and also the Director of Quality Assurance & Servicom, and the ICT Master Plan Committee of Nasarawa State University. He was at one time the Special Adviser to the Executive Governor of Nasarawa State on Multi-lateral Cooperation (2007-2011). He is also a Consultant to many organizations in the Agricultural Value Chain businesses. He is a director of FIMS Microfinance Bank Garki Abuja, where he chairs the Board I.T. Steering Committee.",
    },
    {
      num: "5",
      name: "Ahmed Jibrin Ahmed",
      role: "Director",
      initials: "AJ",
      photo: "img/directors/ahmed-jibrin-ahmed.jpg",
      bio: "Ahmed Jibrin Ahmed is a Director and Board Member of Nasarawa Microfinance Bank, where he also serves as Chairman of the Board Establishment and General-Purpose Committee. In these roles, he provides strategic oversight of the Bank's governance, human capital, institutional policies, and operational performance, contributing to sound corporate governance, financial sustainability, and inclusive economic growth.",
      bio2:
        "A COREN-registered Water Resources Engineer, Ahmed brings over 14 years of experience spanning engineering, climate resilience, infrastructure development, and institutional governance. He has served in technical and professional roles with the National Water Resources Institute (NWRI), the Lower Benue River Basin Development Authority, and the Nigerian Meteorological Agency (NiMet). Throughout his career, he has contributed to high-impact projects in water supply, sanitation, climate resilience, and sustainable infrastructure, working with government institutions, development partners, and the private sector.",
      bio3:
        "Ahmed holds postgraduate qualifications in Environmental Resource Management and Climatology, a Master's degree in Water Management and Governance from IHE Delft Institute for Water Education, and a PhD in Disaster Risk Management. His interdisciplinary expertise strengthens the Bank's vision of building resilient communities through sustainable finance, innovation, and responsible governance.",
    },
  ];

  const committees = [
    "Establishment and General-Purpose Committee",
    "Audit Committee",
    "Credit and Risk Management Committee",
    "I.T Steering Committee",
  ];

  return (
    <div id="cg">
      <section className="page-head">
        <div className="container">
          <span className="eyebrow on-dark">Governance</span>
          <h2>Director's Profile</h2>
          <p>
            Meet the experienced professionals guiding Nasarawa Microfinance
            Bank's strategic direction.
          </p>
        </div>
      </section>
      <div className="page-body">
        <div className="container">
          <div className="page-inner">
            <div className="body-head">
              <span className="bh-bar"></span>
              <h3>Board of Directors</h3>
            </div>
            <div className="director-list">
              {directors.map((d) => (
                <div className="director-card" key={d.num} data-reveal>
                  <div className="d-photo">
                    {d.photo ? (
                      <img src={d.photo} alt={d.name} />
                    ) : (
                      <span className="ph-initials">{d.initials}</span>
                    )}
                  </div>
                  <div className="d-body">
                    <span className="d-num">{d.num}</span>
                    <h3 className="d-name">{d.name}</h3>
                    <span className="d-role">{d.role}</span>
                    <p className="d-bio">{d.bio}</p>
                    {d.bio2 && <p className="d-bio">{d.bio2}</p>}
                    {d.bio3 && <p className="d-bio">{d.bio3}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="body-head" style={{ marginTop: 60 }}>
              <span className="bh-bar"></span>
              <h3>Board Committees</h3>
            </div>
            <div className="prose" data-reveal style={{ marginBottom: 24 }}>
              <p>
                The Board has been very active through its committees that
                always ensure rules are followed for the safety and soundness of
                the Bank. The effectiveness with which the Board's Committees
                discharge their responsibilities determines the Bank's
                competitive position. They are driving the institution forward
                through a framework of transparency and effective
                accountability — the essence of ensuring good corporate
                governance.
              </p>
            </div>
            <div className="committee-grid" data-reveal>
              {committees.map((c, i) => (
                <div className="committee-card" key={i}>
                  <div className="cc-num">{i + 1}</div>
                  <div className="cc-name">{c}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};