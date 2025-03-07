import React, { useContext } from "react";

import AllmannyttanLogo from "../assets/images/resources/sveriges-allmannytta.jpg";
import NikolaiLogo from "../assets/images/resources/nikolai.png";
import IteamLogo from "../assets/images/resources/iteam.png";
import ProxifyLogo from "../assets/images/resources/proxify.png";
const Footer = () => {
  return (
    <div>
      <footer className="site-footer" id="footer">
        <div className="site-footer__upper">
          <p>Vi som står bakom</p>

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-widget footer-widget__about">
                  <a href="https://www.linkedin.com/company/allm%C3%A4nnyttans-digitaliseringsinitiativ/">
                    <img src={AllmannyttanLogo} width="180" alt="" />
                  </a>
                  <a href="https://www.linkedin.com/company/iteam1337/">
                    <img src={IteamLogo} width="180" alt="" />
                  </a>
                  <a href="https://www.linkedin.com/company/nikolaidev/">
                    <img src={NikolaiLogo} width="180" alt="" />
                  </a>
                  <a href="https://proxify.io/">
                    <img src={ProxifyLogo} width="180" alt="" />
                  </a>


{
// add your logo here: 
}
                </div>
              </div>
              <div className="col-lg-12 d-flex align-items-center justify-content-md-center justify-content-sm-center">
                <div className="footer-widget">
                  <div className="footer-widget__social">
                    Vill du vara med här? Gör en pull request:&nbsp;
                    <a href="https://github.com/allmannyttan/apifirst">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
