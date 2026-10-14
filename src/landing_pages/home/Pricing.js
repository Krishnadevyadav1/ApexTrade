import React from "react";

function Pricing()
{
    return (
    <div className="container">
        <div className="row">
        <div className="col-6">
            <h2 className="mb-3">Unbeatable pricing</h2>
            <p className="mb-3">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a href="/">See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
             
             <div className="col-6 ">
            <div className="row text-center">
                <div className="col d-flex align-items-center me-2">
                    <img src="media/images/pricing-eq.svg" alt="pricing" className="img-fluid"/>
                    <p> Free account<br></br> opening
</p>
                </div>
                <div className="col d-flex align-items-center me-2 ">
                    <img src="media/images/pricing-eq.svg" alt="pricing" className="img-fluid"/>
                                       <p>  Free equity delivery<br></br> and direct mutual funds
</p>
                </div>
                <div className="col d-flex align-items-center m-2 ">
                    <img src="media/images/other-trades.svg" alt="pricing" className="img-fluid"/>
                    <p>  Intraday and<br></br>F&O</p>
                </div>

            </div>

            </div>
        </div>



    </div>
    );
}

export default Pricing;