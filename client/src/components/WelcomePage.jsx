import React, {useState ,useEffect} from "react"; 
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import SearchForm from "./SearchForm"
import AlbumCard from "./AlbumCard"

/// Finish Layout + Design. Just have the search bar in the middle of the page. 
/// Have the search bar redirect to the Album Card Component. 

const WelcomePage = () => {    
    // const [search, setSearch] = useState('album')
    const [song, setSong] = useState({})

const handleSubmit = async (event) => {
     event.preventDefault()
     const response = await axios.get(
        `/search?search=${event.target.elements.searchbar.value}`
      );
      setSong(response.data);
     
     }



return ( <div className="main">
   <SearchForm handleSubmitProp={handleSubmit} />
      <Row>
          {song?.results?.map((song) => {
            console.log(song);
            return (
                <AlbumCard
                key={song.collectionId}
                id={song.collectionId}
                image={song.artworkUrl100}
                artistname={song.artistName}
                albumname={song.collectionName}
              />
            );
          })}
      </Row>
</div>
    )
        }
/* <>
<h1>Welcome to ByrdSong</h1>

</> */


// /* <form onSubmit={handleSubmit}>

// <AlbumPage handleChange={handleChange} />
//      <button>Search</button>
// </form>
// <audio src={song.previewUrl}  autoPlay/>


// }   

export default WelcomePage;