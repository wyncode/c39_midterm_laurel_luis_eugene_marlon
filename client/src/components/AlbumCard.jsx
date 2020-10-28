import React from "react"; 
import Card from 'react-bootstrap/Card';
import {useHistory} from 'react-router-dom';
import AlbumCardPage from './AlbumCardPage';



const AlbumCard = ({id, albumname, artistname, image}) => { 
  
  
    const history = useHistory()

    const handleClick = (id) => { 
     history.push(`/albumpage/${id}`)
    }
return ( 
      <div>
        <div list-style-type-none className='cards__item'>
          <Card className='cards__item__link' style={{ width: 150, margin: 10}} onClick={() => handleClick(id)}>
            <figure className='cards__item__pic-wrap'>
              <Card.Img className='cards__item__img' src={image} alt="Album Image"/>
            </figure>
            <Card.Body className='cards__item__info'>
              <Card.Title><h5 className='cards__album__text'>{albumname}</h5></Card.Title>
              <Card.Text><p className='cards__artist_text'>{artistname}</p></Card.Text>  
            </Card.Body>
          </Card>
        </div>
      </div>
      );
     
}
export default AlbumCard;