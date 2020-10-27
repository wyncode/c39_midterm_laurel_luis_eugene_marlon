import React from "react"; 
import Card from 'react-bootstrap/Card';
import {useHistory} from 'react-router-dom'

const AlbumCard = ({id, albumname, artistname, image}) => { 
    const history = useHistory()

    const handleClick = (id) => {
        history.push(`/albumpage/${id}`)
    }
return ( 
<Card style={{ width: 200, margin: 10 }} onClick={() => handleClick(id)}>
<Card.Img src={image} />
        
          <Card.Body>
    <Card.Title>{albumname}</Card.Title>
<Card.Text>{artistname}</Card.Text>
          </Card.Body>
        </Card> 
      );
}
export default AlbumCard;