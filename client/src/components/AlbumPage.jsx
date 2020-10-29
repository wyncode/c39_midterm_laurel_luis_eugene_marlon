import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BiPlayCircle } from 'react-icons/bi';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AlbumPage = ({ handleChange }) => {
  const [album, setAlbum] = useState([]);
  const [play, setPlay] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(`/album/${id}`);
      setAlbum(response.data.results);
      Aos.init({ duration: 3000 });
    };
    fetchData();
  }, [id]);

  const handleSong = (song) => {
    setPlay(!play);
    const audio = new Audio(song);
    audio.play();
    if (play) {
      audio.pause();
    }
  };

  return (
    <div data-aos="slide-up" class="AlbumPageContainer">
      <img
        class="AlbumCoverPic"
        style={{ width: 230 }}
        src={album[0]?.artworkUrl100}
        alt="albumcover"
      />

      <h3 class="AlbumsText" id="AlbumNames">
        {album[0]?.collectionName} {album[0]?.contentAdvisoryRating}
      </h3>
      <h5 class="AlbumsText" id="AlbumArtistName">
        {album[0]?.artistName}
      </h5>
      <h6 class="AlbumsText" id="AlbumGenre">
        {album[0]?.primaryGenreName}
      </h6>

      {album.map((track, index) => {
        return track.hasOwnProperty('trackId') ? (
          <div key={index}>
            <ul>
              <li class="AlbumsText" id="songlist">
                <BiPlayCircle onClick={() => handleSong(track.previewUrl)} />{' '}
                {track.trackName}
              </li>
            </ul>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default AlbumPage;
