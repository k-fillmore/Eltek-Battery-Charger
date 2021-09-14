import { Navbar, Nav } from "react-bootstrap";
import React, { useState, useEffect } from "react";

function OurNavbar() {
  const [width, setWindowWidth] = useState([0, 0]);
  let title = "Eltek Charger";

  if (width[0] < 800) {
    title = "E";
  }
  console.log(width);
  useEffect(() => {
    function updateSize() {
      setWindowWidth([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="Home">{title}</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="Dashboard">Dashboard</Nav.Link>
          <Nav.Link href="Config">Config</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default OurNavbar;
