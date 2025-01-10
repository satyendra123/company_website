import React, { useState } from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBarItem.css";

const NavBar = () => {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const [activeNavItem, setActiveNavItem] = useState(0);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [solutionDropdownOpen, setSolutionDropdownOpen] = useState(false);
  const [IotServicesDropdownOpen, setIotServicesDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = (index) => {
    setHoveredNavItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredNavItem(null);
  };

  const handleClick = (index, route) => {
    setActiveNavItem(index);
    navigate(route);
  };

  const toggleProductDropdown = () =>
    setProductDropdownOpen((prevState) => !prevState);

  const toggleSolutionDropdown = () =>
    setSolutionDropdownOpen((prevState) => !prevState);

  const toggleIotServicesDropdown = () =>
    setIotServicesDropdownOpen((prevState) => !prevState);

  return (
    <Nav className="navbar-nav mx-auto border-top">
      <NavItem>
        <NavLink
          to="/"
          className={`nav-item nav-link ${activeNavItem === 0 ? "active" : ""}`}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(0, "/")}
        >
          HOUSYS
          <div
            className="nav-line"
            style={{
              width: activeNavItem === 0 || hoveredNavItem === 0 ? "100%" : "0",
            }}
          />
        </NavLink>
      </NavItem>
      <NavItem>
        <Dropdown
          nav
          isOpen={productDropdownOpen}
          toggle={toggleProductDropdown}
        >
          <NavLink
            to="/product"
            className={`nav-item nav-link ${
              activeNavItem === 1 ? "active" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            // onClick={() => handleClick(1, "/product")}
          >
            <DropdownToggle nav caret className="no-caret">
              PRODUCT
              <div
                className="nav-line"
                style={{
                  width:
                    activeNavItem === 1 || hoveredNavItem === 1 ? "100%" : "0",
                }}
              />
            </DropdownToggle>
          </NavLink>
          <DropdownMenu>
            <div className="dropdown-container d-flex">
              <div className="dropdown-column">
                <DropdownItem
                  onClick={() => handleClick(1, "/product/boombarrier")}
                >
                  Boom Barrier
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleClick(1, "/product/flapbarrier")}
                >
                  Flap Barrier
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleClick(1, "/product/tripodeturnstile")}
                >
                  Tripod Turnstile
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleClick(1, "/product/tripodeturnstile-II")}
                >
                  Tripod Turnstile II
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleClick(1, "/product/baggag-escanner")}
                >
                  Baggage Scanner

                </DropdownItem>
                <DropdownItem
                  onClick={() =>
                    handleClick(1, "/product/full-height-turnstile")
                  }
                >
                  Full Height Turnstile
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleClick(1, "/product/slider-flap")}
                >
                  Slide Flap
                </DropdownItem>
              </div>
              <div className="dropdown-column">
                <DropdownItem
                  onClick={() => handleClick(1, "/product/bollard")}
                >
                  Bollard
                </DropdownItem>
                <DropdownItem
                  onClick={() =>
                    handleClick(1, "/product/sliding-gate-operator")
                  }
                >
                  Sliding Gate Operator
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleClick(1, "/product/swing-gate-operator")}
                >
                  Swing Gate Operator
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleClick(1, "/product/shut-door-motor")}
                >
                  Shut Door Motor
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleClick(1, "/product/anpr-camera")}
                >
                  ANPR Camera
                </DropdownItem>
                <DropdownItem onClick={() => handleClick(1, "/product/dfmd")}>
                DFMD
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleClick(1, "/product/swing-flap")}
                >
                  Swing Flap
                </DropdownItem>
              </div>
              <div className="dropdown-column">
                <DropdownItem
                  onClick={() => handleClick(1, "/product/road-blocker")}
                >
                  Road Blocker
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleClick(1, "/product/tyre-killer")}
                >
                  Tyre Killer
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleClick(1, "/product/axle-breaker")}
                >
                  Axle Breaker
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleClick(1, "/product/crash-rated-barrier")}
                >
                  Crash Rated Barrier
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleClick(1, "/product/p-type-barrier")}
                >
                  P-Type Barrier
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleClick(1, "/product/drop-arm-barrier")}
                >
                  Drop Arm Barrier
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleClick(1, "/product/Uvss")}
                >
                  UVSS
                </DropdownItem>

              </div>
            </div>
          </DropdownMenu>
        </Dropdown>
      </NavItem>
      <NavItem>
        <Dropdown
          nav
          isOpen={solutionDropdownOpen}
          toggle={toggleSolutionDropdown}
        >
          <NavLink
            to="/solution"
            className={`nav-item nav-link ${
              activeNavItem === 2 ? "active" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(2, "/solution/parking-guidance-system")}
          >
            <DropdownToggle nav caret className="no-caret">
              SOLUTION
              <div
                className="nav-line"
                style={{
                  width:
                    activeNavItem === 2 || hoveredNavItem === 2 ? "100%" : "0",
                }}
              />
            </DropdownToggle>
          </NavLink>
          <DropdownMenu>
            <DropdownItem
              onClick={() =>
                handleClick(2, "/solution/parking-guidance-system")
              }
            >
              Parking Guidance System
            </DropdownItem>
            <DropdownItem
              onClick={() =>
                handleClick(2, "/solution/parking-management-system")
              }
            >
              Parking Management System
            </DropdownItem>
            <DropdownItem
              onClick={() => handleClick(2, "/solution/iot-solution")}
            >
            Visitor Management System
            </DropdownItem>
            <DropdownItem
              onClick={() =>
                handleClick(2, "/solution/toll-management-solution")
              }
            >
              Toll Management Solution
            </DropdownItem>
            <DropdownItem
              onClick={() =>
                handleClick(
                  2,
                  "/solution/mass-transit-fare-collection-solution"
                )
              }
            >
              Mass Transit Fare Collection Solution
            </DropdownItem>
            <DropdownItem
              onClick={() =>
                handleClick(
                  2,
                  "/solution/Traffic-Management-System"
                )
              }
            >
              Traffic Management System
            </DropdownItem>
            <DropdownItem
              onClick={() =>
                handleClick(
                  2,
                  "/solution/q-management-system"
                )
              }
            >
              Queue Managemant System
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavItem>

      <NavItem>
        <Dropdown
          nav
          isOpen={IotServicesDropdownOpen}
          toggle={toggleIotServicesDropdown}
        >
          <NavLink
            to="/iot-services"
            className={`nav-item nav-link ${
              activeNavItem === 3 ? "active" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(3, "/services")}
          >
            <DropdownToggle nav caret className="no-caret">
              IT SERVICES
              <div
                className="nav-line"
                style={{
                  width:
                    activeNavItem === 3 || hoveredNavItem === 3 ? "100%" : "0",
                }}
              />
            </DropdownToggle>
          </NavLink>
          <DropdownMenu>
            <DropdownItem
              onClick={() =>
                handleClick(3, "/services/Softwaredevelopment")
              }
            >
              Software Development
            </DropdownItem>
            <DropdownItem
              onClick={() =>
                handleClick(3, "/services/cloudservices")
              }
            >
              Cloud Services
            </DropdownItem>
            <DropdownItem
              onClick={() => handleClick(3, "/services/automation")}
            >
            Automation
            </DropdownItem>
            <DropdownItem
              onClick={() =>
                handleClick(3, "/services/Securitysolution")
              }
            >
              Security Solution
            </DropdownItem>
            <DropdownItem
              onClick={() =>
                handleClick(
                  3,
                  "/services/development"
                )
              }
            >
              Development
            </DropdownItem>
            <DropdownItem
              onClick={() =>
                handleClick(
                  3,
                  "/services/consultingservices"
                )
              }
            >
              Consulting and services
            </DropdownItem>
            <DropdownItem
              onClick={() =>
                handleClick(
                  3,
                  "/services/AIvision"
                )
              }
            >
            AI Vision
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavItem>
    </Nav>
  );
};

export default NavBar;
