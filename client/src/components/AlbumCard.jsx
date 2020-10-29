import React from 'react';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";


const AlbumCard = ({ id, albumname, artistname, image }) => {
  const history = useHistory();
  // useEffect(() => {
  //   Aos.init({duration: 2000})
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  const handleClick = (id) => {
    history.push(`/albumpage/${id}`);
  };
  return (
    <div>
      <div className="cards__item">
        <Card
          className="cards__item__link" /*data-aos= "slide-up"*/
          style={{ width: 150, margin: 10 }}
          onClick={() => handleClick(id)}
        >
          <div className="cards__item__pic-wrap">
            <Card.Img
              className="cards__item__img"
              src={image}
              alt="Album Image"
            />
          </div>
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
