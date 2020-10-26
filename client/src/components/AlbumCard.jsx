import React from "react"; 
import Card from 'react-bootstrap/Card';

const AlbumCard = ({id, albumname, artistname, image}) => { 
return ( 
        <Card style={{ width: 200, margin: 10 }}>
          <a href={`/AlbumPage/${id}`}>
            <Card.Img src={image} />
          </a>
          <Card.Body>
    <Card.Title>{albumname}</Card.Title>
<Card.Text>{artistname}</Card.Text>
          </Card.Body>
        </Card> 
      );
}
export default AlbumCard;