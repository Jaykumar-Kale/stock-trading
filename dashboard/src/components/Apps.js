import React from "react";
import { Link } from "react-router-dom";

const Apps = () => {
  return <>
  <div className="no-orders">
        <p style={{opacity:"1",fontWeight:"400",padding:"3rem"}}>Currently, we don’t have any dedicated applications available. However, we’re excited about our ongoing projects and the innovative features they will bring! Stay tuned for updates, and in the meantime, feel free to explore other sections of our website to learn more about our offerings and initiatives.

</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div> </>;
};

export default Apps;
