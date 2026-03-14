import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appleStore,
}) {
  return (
    <div className="container mt-5" style={{marginBottom:"2rem"}}>
      <div className="row">
        <div className="col-6 p-5" style={{padding:"5rem",marginLeft:""}}>
          <img src={imageURL} alt="" />
        </div>
        <div className="col-6 " style={{padding:"8rem"}}>
          <h1 className="mb-5 opacity-75">{productName}</h1>
          <p> {productDescription} </p>
          <div className="mt-3 opacity-75 mb-3">
          {tryDemo!=="nil"? <a href="/"> {tryDemo} <i class="fa-solid fa-arrow-right"></i> </a> : <></> }
          {learnMore!=="nil"?
            <a href="/" style={{ marginLeft: "6.5rem" }}>
              {learnMore} <i class="fa-solid fa-arrow-right"></i>
            </a>
            : <></> }
          </div>
          <div className="">
            <a href="/">
              {" "}
              <img src="media/images/googlePlayBadge.svg" alt="" />{" "}
            </a>
            <a href="/" style={{ marginLeft: "50px" }}>
              <img src="media/images/appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
