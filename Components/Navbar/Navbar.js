import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { GiHamburgerMenu } from "react-icons/gi";

import { BsTwitter } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import Sidebar from "./Sidebar";
import { Link } from "react-scroll";
import { IoMdClose } from "react-icons/io";

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  width: 100%;
  padding: 12px 0;
  background: #0a1c3f;
  z-index: 1;

  .logo {
    width: 60px;

    margin-left: 10px;
  }
  .navbars {
    padding: 0 50px 0 30px;
  }

  a {
    text-decoration: none;

    font-size: 16px;
    font-style: normal;

    color: #fff;
  }
  .menu-container {
    display: flex;
    justify-content: space-between;
    margin-right: 0;
  }
  .menu-container .nav-items {
    color: #fff;
    text-decoration: none;
    font-weight: 400;
    padding: 0px 45px;
    cursor: pointer;
    font-size: 18px;
  }

  .social-buttons {
      width: 80px;
  }

  .hamburger {
    cursor: pointer;
  }

  .dashboard {
    padding: 6px 25px;
    background: #152c5b;

    border-radius: 12px;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  .dot {
    background: #4665a2;
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-left: 12px;
  }
  .sidebar-container {
    width: 100%;
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    background: #0a1939;

    height: 0;
    overflow: hidden;
    transition: 1s;
  }
  .sidebar-container2 {
    width: 100%;
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    background: #0a1939;
    height: 100vh;
    transition: 0.6s;
  }
  .sidebar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 0;
    transition: 1s;
  }
  .sidebar a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    margin: 8px 0;
    padding: 10px 20px;
  }
  .close {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 30px 30px 10px 0px;
    cursor: pointer;
    opacity: 0;
  }
  .social {
    padding: 0 !important;
  }

  @media only screen and (max-width: 1399px) {
    .menu-container .nav-items {
        padding: 0px 30px;
    }
  }

  @media only screen and (max-width: 1199px) {
    .menu-container .nav-items {
      font-weight: 400;
      padding: 0px 20px;
    }
  }
  @media only screen and (max-width: 1079px) {
    .navbars {
      padding: 0 50px 0 30px;
    }

    .menu-container {
        margin-right: 50px;
    }

    .menu-container .nav-items {
      font-size: 16px;
      padding: 0px 16px;
    }

    .dashboard {
      padding: 6px 12px;
    }
  }
  @media only screen and (max-width: 953px) {
    .menu-container .nav-items {
      font-size: 15px;
      padding: 10px 8px;
    }
  }
  @media only screen and (max-width: 767px) {
    .navbars {
      padding: 0 25px 0 5px;
    }
  }
  @media only screen and (max-width: 520px) {
    .logo-container {
      margin: 20px 20px;
      margin-right: 20px;
    }
    padding: 12px 15px;
  }
`;

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar((prev) => !prev);
  };
  const menuItem = [
    { text: "About", url: "about" },
    {
      text: "Gallery",
      url: "gallery",
    },
    {
      text: "Roadmap",
      url: "roadmaps",
    },
    {
      text: "FAQ",
      url: "faq",
    },
  ];

  return (
    <Wrapper s>
      <Container fluid className=" navbars" xs={11}>
        <Row>
          <Col xs={6} lg={4} className="">
            <Link
              to="/"
              smooth={true}
              duration="500"
              className="d-flex align-items-center"
            >
              <img src="./images/logo.png" alt="" className="logo" />
            </Link>
          </Col>

          <Col
            xs={6}
            lg={4}
            className="d-lg-flex justify-content-center align-items-center d-none "
          >
            <div className="menu-container">
              {menuItem.map((el, i) => (
                <Link to={el.url} className="nav-items" key={i}>
                  {el.text}
                </Link>
              ))}
            </div>
          </Col>
          <Col
            md={4}
            className="nav-items  d-none justify-content-end align-items-center d-lg-flex p-0"
          >
            <div className="social-buttons" style={{ paddingRight: "8px" }}>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <BsTwitter color="#1f3f80" className="mx-2" size="20px" />
              </a>
              <a href="https://discord.com/" target="_blank" rel="noreferrer">
                <SiDiscord color="#1f3f80" className="mx-2" size="20px" />
              </a>
            </div>
            <a style={{ fontSize: "18px" }}
              href="#"
              // target="_blank"

              className="dashboard"
              rel="noreferrer"
            >
              Connect Wallet <span className="dot"></span>
            </a>
          </Col>
          <Col
            xs={6}
            className="nav-items  d-flex justify-content-end align-items-center d-lg-none p-0"
          >
            <GiHamburgerMenu
              className="hamburger d-flex d-lg-none"
              size="30"
              color="#fff"
              onClick={showSidebar}
            />
          </Col>
        </Row>

        <div className={sidebar ? "sidebar-container2" : "sidebar-container"}>
          <div className="close" style={{ opacity: sidebar && "1" }}>
            <IoMdClose color="#fff" size={30} onClick={showSidebar} />
          </div>
          <div className="sidebar" style={{ opacity: sidebar && "1" }}>
            {menuItem.map((el, i) => (
              <Link
                activeClassName="active"
                to={`#${el.url}`}
                key={i}
                onClick={showSidebar}
              >
                {el.text}
              </Link>
            ))}
            <div className="nav-items   justify-content-center d-flex flex-column align-items-center  p-0">
              <div className="" style={{ paddingRight: "8px" }}>
                <a
                  href="https://twitter.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="social"
                >
                  <BsTwitter color="#1f3f80" className="mx-2" size="20px" />
                </a>
                <a
                  href="https://discord.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="social"
                >
                  <SiDiscord color="#1f3f80" className="mx-2" size="20px" />
                </a>
              </div>
              <a
                href="#"
                // target="_blank"

                className="dashboard"
                rel="noreferrer"
              >
                Wallet 2Y . . . PV <span className="dot"></span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
