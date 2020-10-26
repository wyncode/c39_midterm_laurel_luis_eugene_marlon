import React, { useState, useEffect} from "react"; 
import { useParams } from 'react-router-dom';
// import { Form } from 'react-bootstrap';
import axios from 'axios';

// Have the basic layout/design of the page.
// 

const AlbumPage = ({handleChange}) => {
const [album, setAlbum] = useState([]);
let { id } = useParams();
      
        useEffect(() => {
          const fetchData = async () => {
            let response = await axios.get(
                `/album/${id}`
            );
            // Save the fetch data into the apiData state var
            // console.log(response.data.meals[0]);
            setAlbum(response.data.results);
          };
          fetchData();
        }, [id]);
      console.log(album)
        return (
          <>
            {/* Individual recipe template */}
        <h1>{album[0]?.artistName}</h1>
        <img src={album[0]?.artworkUrl100} alt="albumcover" />
            {album.map((track, index) => {
                return (
                    <div key={index}>
                <h1>{track.trackName}</h1>
                </div>

                )
            })}
            {/* <h1 style={{ margin: '1rem 0' }}>{song.artistName}</h1>
            <p>
              <img
                style={{
                  width: 300,
                  float: 'left',
                  margin: '0 2rem 2rem 0'
                }}
                src={song.artworkUrl100}
              />
            </p>
            <div>
              <ul style={{ listStyleType: 'none' }}>
                <li>
                  {song.artworkUrl100} {song.collectionName}
                </li>
                <li>
                  {song.artworkUrl100} {song.collectionName}
                </li>
                <li>
                  {song.artworkUrl100} {song.collectionName}
                </li>
              </ul>
              {song.artistName}
            </div> */}
          </>
        );
      };
      

//     const [song, setSong] = useState({});
//     let { id } = useParams();

// useEffect(() => {
//     const fetchData = async () => {
//         let response = await axios.get(
//             `https://itunes.apple.com/`
//         );
//         // song(response.data.)
//     }
// // })
// return (
//     <div className="playHeader">
//         <Form.Control onChange={handleChange}/>
//         <p>album name</p>
//     </div>
// )
    

export default AlbumPage;