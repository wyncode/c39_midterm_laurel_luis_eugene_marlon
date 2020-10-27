import React from "react"
import Form from 'react-bootstrap/form';
import "./searchForm.css";

// Finish Design

const SearchForm = ({ handleSubmitProp }) => {
    return (

      
        <Form className="Welcome-page-form" onSubmit={handleSubmitProp} style={{ margin: '2rem' }} >
          <div className="welcome-page-searchbar">
          <i className="fas fa-play"></i>
            
            <Form.Row>
             <Form.Control
                className="welcome-input"
                clasName="welcome-icon"
                id="searchbar"
                size="lg"
                type="text"
                placeholder="Find your Sound!"
              
              ></Form.Control>
            </Form.Row>
          </div>
        </Form>
        
      );

}
export default SearchForm;