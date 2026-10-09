import React from "react";

function Hero()
{
    return (
       <div className='container p-5 mb-1 mt-4'>
        <div className="row text-center">
            <img style={{width:'729px',height:'335px',margin:'0 auto'}} src='media/images/landing.svg' alt='hero' className="mb-5"/>
            <h1 className="mt-5 fs-2 mtb-2 text-body-secondary">Invest in everything</h1>
            <p className="fs-5 mb-4 text-body-secondary">Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className="p-3 btn btn-primary py-md-1 px-md-4 fs-5 mb-5 mt-2 fs-5 " style={{width:"17%", height:"44.6px",margin:"0 auto",borderradius:"0.5px"}}>Sign up for free</button>
        </div>
       </div>
    );
}

export default Hero;