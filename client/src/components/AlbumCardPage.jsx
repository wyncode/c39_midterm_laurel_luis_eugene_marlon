import React, { useState, useEffect } from 'react';
import AlbumCard from './AlbumCard';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import axios from 'axios';

function AlbumCardPage() {
  const [albums, setAlbums] = useState([]);
  const [sort, setSort] = useState(false);
  const { artist } = useParams();

  const fetchAlbums = async () => {
    const response = await axios.get(`/search?search=${artist}`);
    setAlbums(response.data.results);
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  const handleSortAz = () => {};

  const handleSortZa = () => {};

  const handleSortRelease = () => {
    setSort(!sort);
    const sorted = albums.sort((a, b) => {
      return new Date(a.releaseDate) - new Date(b.releaseDate);
    });
  };
  return (
    <>
      <div className="sortButtons">
        <button className="dateSort"style={{ color: 'crimson'}}onClick={handleSortRelease}>
          Sort By Release Date
        </button>
      </div>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <Container>
              <div className="cards__item">
                {albums.map((album, index) => (
                  <AlbumCard
                    key={index}
                    id={album.collectionId}
                    albumname={album.collectionName}
                    artistname={album.artistName}
                    image={album.artworkUrl100}
                  />
                ))}
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlbumCardPage;
