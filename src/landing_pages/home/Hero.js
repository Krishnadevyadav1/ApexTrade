import React from "react";

function Hero()
{
    return (
       <div className='container p-5 mb-5'>
        <div className="row text-center">
            <img  src='media/images/landing.svg' alt='hero' className="mb-5"/>
            <h1 className="mt-5">Invest in everything</h1>
            <p>Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className="p-3 btn btn-primary py-md-1 px-md-4 fs-5 mb-5" style={{width:"23%", height:"44.6px",margin:"0 auto"}}>Sign up for free</button>
        </div>
       </div>
    );
}

export default Hero;