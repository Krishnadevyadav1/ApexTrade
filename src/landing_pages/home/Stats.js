import React from "react";

function Stats()
{
    return (
        <div className="container ml-5 mr-5">
            <div className="row">
                <div className="col-2">
                    <img src="media/images/kc-logo-landing.svg" alt="stats" style={{width:"100%"}}/>
                </div>
                <div className="col-8">
                    <p>Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more. <a href="/">Explore</a> 
 <i class="fa-solid fa-arrow-right-long"></i></p>
                </div>
                <div className="col-2">
                    <img src="media/images/kc-banner-image.svg" alt="stats" style={{width:"100%"}}/>
                </div>

            </div>
        </div>
    );
}

export default Stats;