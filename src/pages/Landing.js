import React from "react";
import Wrapper from "../wrappers/Landing";
import Logo from "./components/Logo";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Computer <span>solutions</span> company
          </h1>
          <p>
            I'm baby yes plz ramps artisan godard literally, gentrify cloud
            bread narwhal listicle. Hexagon wolf cornhole godard palo santo
            crucifix DIY. Poke tumeric tattooed, lumbersexual hell of meh banjo
            fam ramps cardigan lo-fi freegan. Viral deep v scenester man braid
            shoreditch vice pinterest salvia waistcoat VHS disrupt chillwave
            bicycle rights tilde.
          </p>
          <Link to="/login" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
