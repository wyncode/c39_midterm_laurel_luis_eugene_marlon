import React, {useState ,useEffect} from "react"; 
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import SearchForm from "./SearchForm"
import AlbumCard from "./AlbumCard"

const WelcomePage = () => {    
    const [search, setSearch] = useState('album')
    const [song, setSong] = useState({})

const handleSubmit = (event) => {
     event.preventDefault()
     setSearch(event.target.elements.searchbar.value)
     }

useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        `/search?search=${search}`
      );
      setSong(response.data);
    };
    fetchData();
  }, [search]);

return ( <div>
   <SearchForm handleSubmitProp={handleSubmit} />
      <Row>
          {song?.results?.map((song) => {
            console.log(song);
            return (
                <AlbumCard
                key={song.trackId}
                id={song.trackId}
                image={song. artworkUrl100}
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