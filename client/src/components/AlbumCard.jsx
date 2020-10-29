import React from 'react';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';

const AlbumCard = ({ id, albumname, artistname, image }) => {
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/albumpage/${id}`);
  };
  return (
    <div>
      <div className="cards__item">
        <Card
          className="cards__item__link"
          style={{ width: 150, margin: 10, height: 280 }}
          onClick={() => handleClick(id)}
        >
          
            <Card.Img
              className="cards__item__img"
              src={image}
              alt="Album Image"
            />
          
          <Card.Body className="cards__item__info">
            <Card.Title>
              <h5 className="cards__album__text">{albumname}</h5>
            </Card.Title>
            <Card.Text className="cards__artist_text">{artistname}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default AlbumCard;
