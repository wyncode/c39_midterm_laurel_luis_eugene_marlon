import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BiPlayCircle, BiPauseCircle } from 'react-icons/bi';

const AlbumPage = ({ handleChange }) => {
  const [album, setAlbum] = useState([]);
  const [play, setPlay] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(`/album/${id}`);
      setAlbum(response.data.results);
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
    <div class="AlbumPageContainer">
      <img
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
        return (
          //   // <div >
          //  //<audio src={track.previewUrl}>
          // <button onClick={}>Play</button>
          //  </audio>
          //  </div>
          <div key={index}>
            <ul>
              <li class="AlbumsText" id="songlist">
                {track.trackName}

                <BiPlayCircle onClick={() => handleSong(track.previewUrl)} />
                <BiPauseCircle onClick={handleSong} />
                {/* <audio src={track.previewUrl} controls /> */}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default AlbumPage;
