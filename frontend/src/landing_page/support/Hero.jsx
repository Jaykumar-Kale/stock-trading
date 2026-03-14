import React from "react";

function Hero() {
  return (
    <div
      className="Support"
      style={{
        backgroundColor: "rgba(56,126,209,255)",
        color: "white",
        height: "63vh",
      }}
    >
      <div className="container" style={{ padding: "5rem" }}>
        <div className="row">
          <div className="col">
            <h3 className="fs-4 mb-5">Support Portal</h3>
            <h3 className="mb-5 fs-4">
              Search for an answer or browse help topics to create a ticket
            </h3>
            <div
              className="search mb-4"
              style={{ position: "relative", width: "35vw" }}
            >
              <input
                className="text-muted"
                style={{
                  height: "3rem",
                  width: "100%",
                  paddingRight: "3rem", 
                  borderRadius:"0.5rem",
                  border:"1px"
                }}
                type="text"
                placeholder="      Eg: how do I activate F&O, why is my order getting rejected ..."
              />
              <i
                class="fa-solid fa-magnifying-glass"
                style={{
                  position: "absolute",
                  right: "10px", // Adjust this value as needed to control icon position
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#aaa", // Optional: Change color of the icon
                }}
              ></i>
            </div>

            <div className="mb-3">
              <a href="/">Track account opening</a>
              <a href="/">Track segment activation</a>
              <a href="/"> Intraday margins</a>
            </div>
            <a href="/">Kite user manual</a>
          </div>
          <div className="col">
            <a className="mb-5" style={{marginLeft:"25rem"}} href="/">Track tickets</a>
            <h3 className="mt-5 mb-3">Featured</h3>
            <ol className="">
              <li className="mt-3 mb-4">
                <a href="/">Suspension of trading - IDFC Limited</a>
              </li>
              <li>
                <a href="/">Rights Entitlements listing in October 2024</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
