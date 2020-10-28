import React, { useState, useEffect } from 'react';
import AlbumCard from './AlbumCard';
import { useParams } from 'react-router-dom';
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
        <button className="a-zSort" onClick={handleSortAz}>
          sort by a-z
        </button>
        <button className="z-aSort" onClick={handleSortZa}>
          sort by z-a
        </button>
        <button className="dateSort" onClick={handleSortRelease}>
          release date
        </button>
      </div>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              {albums.map((album, index) => (
                <AlbumCard
                  key={index}
                  id={album.collectionId}
                  albumname={album.collectionName}
                  artistname={album.artistName}
                  image={album.artworkUrl100}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlbumCardPage;
