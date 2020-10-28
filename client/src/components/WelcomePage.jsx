import React from 'react';
import SearchForm from './SearchForm';
import { Container } from 'react-bootstrap';

/// Finish Layout + Design. Just have the search bar in the middle of the page.
/// Have the search bar redirect to the Album Card Component.

const WelcomePage = ({ history }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    history.push(`/albumcardpage/${event.target.elements.searchbar.value}`);
  };

  return (
    <div className="main">
      <SearchForm handleSubmitProp={handleSubmit} />

      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      ></Container>
    </div>
  );
};

export default WelcomePage;
