import React from "react";

function Awards()
{
    return (

       <div className="container  p-3">  
    <div className="row p-5">
        <div className="col-6 p-5" >  
         
                     
           <h2 className="mb-5 fs-3">Trust with confidence</h2> 
           <div   style={{width:"432px",height:"694px",marginBottom:"32px" }} className="d-flex flex-column justify-content-between">
           <div>
            <h3 className="fs-4">Customer-first always</h3>
           <p className="text-muted">That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
           </div>
           
           <div>
            <h3 className="fs-4">No spam or gimmicks</h3>
           <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
           </div>
           
           <div>
       <h3 className="fs-4">The Zerodha universe</h3>
           <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
           </div>
            <div>
 <h3 className="fs-4">Do better with money</h3>
           <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
          
            </div>
            </div>
        <div className="col-6 p-5 " >
           < img  style={{width:"100%",height:"90%"}} src='media/images/ecosystem.png' alt='awards'/>
           <div  className="text-center">
            <a href="/demo" className="mx-5">Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
            <a href="/demo" >Try Kite demo <i class="fa-solid fa-arrow-right-long"></i> </a>
           </div>
        </div>

    </div>
       </div>
    );
}
export default Awards;

