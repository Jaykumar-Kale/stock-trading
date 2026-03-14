import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className='mt-1 mb-4' style={{fontSize:"2.5rem",opacity:"0.85"}}>The Zerodha Universe</h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row Universe " >
        <div className="col-4 ">
          <img  src="media/images/zerodhafundhouse.png" alt="" />
          <p className="" style={{fontSize:"0.8rem",opacity:"0.7"}}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/sensibullLogo.svg" alt="" />
          <p className="text-small text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/tijori.svg" alt="" />
          <p className="text-small text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
      </div>
      <div className="row mt-5 Universe">
        <div className="col-4">
          <img src="media/images/streakLogo.png" alt="" />
          <p className="text-small text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/smallcaseLogo.png" alt="" />
          <p className="text-small text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/dittoLogo.png" alt="" />
          <p className="text-small text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <div className="row">
      <button className='opacity-75 p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
