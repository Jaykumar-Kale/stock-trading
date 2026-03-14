import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appleStore,
}) {
  return (
    <div className="container mt-2" style={{ marginBottom: "4rem" }}>
      <div className="row">
        <div className="col-6 " style={{ padding: "rem",marginTop:"7rem" }}>
          <h1 className="mb-5 opacity-75">{productName}</h1>
          <p> {productDescription} </p>
          <div className="mt-3 opacity-75 mb-4">
            {tryDemo !== "nil" ? (
              <a href="/">
                {" "}
                {tryDemo} <i class="fa-solid fa-arrow-right"></i>{" "}
              </a>
            ) : (
              <></>
            )}
            {learnMore !== "nil" ? (
              <a href="/" style={{ marginLeft: "50px" }}>
                {learnMore} <i class="fa-solid fa-arrow-right"></i>
              </a>
            ) : (
              <></>
            )}
          </div>
          
        </div>
        <div className="col-6 p-5 d-flex align-items-center" style={{ padding: "5rem", marginLeft: "" }}>
          <img src={imageURL} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
