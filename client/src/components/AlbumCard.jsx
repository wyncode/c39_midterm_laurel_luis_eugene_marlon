import React from "react"; 
import Card from 'react-bootstrap/Card';
import {useHistory} from 'react-router-dom';
import Cards from './AlbumCardPage';



const AlbumCard = ({id, albumname, artistname, image}) => { 
  
    const history = useHistory()

    const handleClick = (id) => { 
     history.push(`/albumpage/${id}`)
    }
return ( 
      <div>
        <div className='cards__item'>
          <Card className='cards__item__link' style={{ width: 150, margin: 10}} onClick={() => handleClick(id)}>
            <figure className='cards__item__pic-wrap'>
              <Card.Img src={image} alt="Album Image"/>
            </figure>
            <Card.Body className='cards__item__info'>
              <Card.Title><h5 className='cards__item__text'>{albumname}</h5></Card.Title>
              <Card.Text><h5 className='cards__item__text'>{artistname}</h5></Card.Text>  
            </Card.Body>
          </Card>
        </div>
      </div>
      );
     
}
export default AlbumCard;