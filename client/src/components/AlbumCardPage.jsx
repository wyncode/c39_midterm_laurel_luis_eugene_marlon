import React from 'react';
import AlbumCard from './AlbumCard';
import Container from 'react-bootstrap/Container';
import { Col, Row} from 'react-bootstrap';


function AlbumCardPage(){
    return(
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <AlbumCard
                        
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AlbumCardPage;

// <div className="main">
//    <SearchForm handleSubmitProp={handleSubmit} />
//       <Row>
//           {song?.results?.map((song) => {
//             console.log(song);
//             return (
//                 <AlbumCard
//                 key={song.collectionId}
//                 id={song.collectionId}
//                 image={song.artworkUrl100}
//                 artistname={song.artistName}
//                 albumname={song.collectionName}
//               />
//             );
//           })}
//       </Row>
// </div>