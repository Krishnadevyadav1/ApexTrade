import React from "react";

function Stats()
{
    return (
        <div style={{marginBottom:"120px",backgroundColor: "rgba(146, 176, 183, 0.2)",padding:"20px"}} >
        <div className="container  ">
            <div className="row">
                <div className="col-2">
                    <img src="media/images/kc-logo-landing.svg" alt="stats" style={{width:"100%"}}/>
                </div>
                <div className="col-8">
                    <p className="" >Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more. <a href="/">Explore</a> 
 <i class="fa-solid fa-arrow-right-long"></i></p>
                </div>
                <div className="col-2">
                    <img src="media/images/kc-banner-image.svg" alt="stats" style={{width:"100%"}}/>
                </div>

            </div>
        </div>        </div>

        
    );
}

export default Stats;