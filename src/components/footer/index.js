import React from "react";
import { FooterContainer, FooterH2, FooterLink, FooterWrapper, } from "./FooterElements";
import "./../../App.css";
 
const Footer = () => {
  return (
    <div className="Footermain">
      <FooterContainer >
        <FooterWrapper className="container py-0">
          <div className="row gx-5 px-0 gy-0">
            <div className="col-lg-3 col-sm-6">
              <FooterH2 id="about">About Us</FooterH2>
              <FooterLink href="/About">About</FooterLink>
             
            </div>
            <div className="col-lg-3 col-sm-6">
              <FooterH2 id="service"></FooterH2>
             
              <FooterLink href="/Scolarship">Scolarship Assistance</FooterLink>
            </div>
            <div className="col-lg-3 col-sm-6">
              <FooterH2 id="Reach">Reach Us</FooterH2>
              <FooterLink href="/Hiring">Hiring</FooterLink>
            
            </div>
            <div className="col-lg-3 col-sm-6">
              <FooterH2 id="Register">Register US</FooterH2>
              <FooterLink href="/Application">Application Form</FooterLink>
              <FooterLink href="/Payment">Payment Now</FooterLink>
            </div>
            
            <hr/>
            <h6 className="logo-text gray-text center-align"><strong>Copyright © 2023 SEEE. All rights reserved</strong></h6>
          </div>
        </FooterWrapper>
      </FooterContainer>
    </div>

  );
};

export default Footer;
