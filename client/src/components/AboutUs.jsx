import React from 'react';

// Have the basic layout of the page. Which includes:
// 1.our values which we would get from Wyncode.
// 2. Four Column pitures with a hover feature which would include our bio. + Pet.

const AboutUs = () => {
  return (
   <div className="about-us">
      <h1>About Us</h1> 
         <h2>Our Team</h2>
         <div className="column">
            <div className="card">
               <img/>
             <div className="container">
               <h2>Luis</h2>
                  <p className="title">CEO & Founder</p>
                     <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                     <p>jane@example.com</p>
                        <p><button className="button">Contact</button></p>
            </div>
         </div>
      </div>
      <div className="column">
            <div className="card">
               <img/>
             <div className="container">
               <h2>Marlon</h2>
                  <p className="title">CEO & Founder</p>
                     <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                     <p>jane@example.com</p>
                        <p><button className="button">Contact</button></p>
            </div>
         </div>
      </div>
      <div className="column">
            <div className="card">
               <img/>
             <div className="container">
               <h2>Eugene</h2>
                  <p className="title">CEO & Founder</p>
                     <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                     <p>jane@example.com</p>
                        <p><button className="button">Contact</button></p>
            </div>
         </div>
      </div>
      <div className="column">
            <div className="card">
               <img/>
             <div className="container">
               <h2>Eugene</h2>
                  <p className="title">CEO & Founder</p>
                     <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                     <p>jane@example.com</p>
                        <p><button className="button">Contact</button></p>
            </div>
         </div>
      </div>
   </div>
   );
};
export default AboutUs;
