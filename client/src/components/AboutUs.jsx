import React from 'react';
import Card from 'react-bootstrap/Card';
import Luis from './images/LuisPerez.jpeg';
import Laurel from './images/LaurelGalaty.jpeg';
import Marlon from './images/IMG_9005.jpeg';
import Eugene from './images/EugeneWashington.jpg';

// Have the basic layout of the page. Which includes:
// 1.our values which we would get from Wyncode.
// 2. Four Column pitures with a hover feature which would include our bio. + Pet.

const AboutUs = () => {
  return (
   <div className="about-us">
      <h1>About Us</h1> 
         
         <div className="portraits">
         <Card className="column">
            <div className="card">
               <Card.Img src={Luis}/>
             <div className="container">
               <Card.Title>Luis</Card.Title>
                  <Card.Text className="title">Developer</Card.Text>
            </div>
         </div>
      </Card>
      
      
      <Card className="column">
            <div className="card">
               <Card.Img src={Marlon}/>
             <div className="container">
               <Card.Title>Marlon</Card.Title>
                  <Card.Text className="title">Developer</Card.Text>
            </div>
         </div>
      </Card>
      
      <Card className="column">
            <div className="card">
               <Card.Img src={Eugene}/>
             <div className="container">
               <Card.Title>Eugene</Card.Title>
                  <Card.Text className="title">Developer</Card.Text>
            </div>
         </div>
      </Card>
      
      <Card className="column">
            <div className="card">
               <Card.Img src={Laurel}/>
             <div className="container">
               <Card.Title>Laurel</Card.Title>
                  <Card.Text className="title">Developer</Card.Text>
            </div>
         </div>
      </Card>

         </div>
   </div>
   );
};
export default AboutUs;
