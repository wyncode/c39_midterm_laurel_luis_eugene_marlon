import React from "react"
import Form from 'react-bootstrap/form';
import "./searchForm.css";


// Finish Design

const SearchForm = ({ handleSubmitProp }) => {
    return (
      
        <Form className="Welcome-page-form" onSubmit={handleSubmitProp} style={{ margin: '2rem' }} >
          <div className="welcome-page-searchbar" >
              <a className="btn" href="#">
                {/* <img id="btn" className="img" src="./logo.png" alt="byrdsong logo"/> */}
                {/* <i id="btn" className="fas fa-play"></i> */}
              </a> 
            
              
            
            <Form.Row>
             <Form.Control
                className="welcome-input"
                clasName="welcome-icon"
                id="searchbar"
                type="text" 
                placeholder="Find your Sound!"
              ></Form.Control>
            </Form.Row>
          </div>
        </Form>
        
      );

}
export default SearchForm;