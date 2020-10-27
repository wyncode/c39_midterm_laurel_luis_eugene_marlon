import React, { useState, useEffect} from "react"; 
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'

const AlbumPage = ({handleChange}) => {
const [album, setAlbum] = useState([]);
let { id } = useParams();
      
useEffect(() => {
const fetchData = async () => {
let response = await axios.get(
`/album/${id}`
);
 
setAlbum(response.data.results);
};
fetchData();
}, [id]);
console.log(album)
return (
< div class="body">
<Container>
<img class="albumpic" style={{width: 250,margin: '0 0 0 0rem'}} src={album[0]?.artworkUrl100} alt="albumcover" />
<h5 class="MusicText">{album[0]?.artistName}</h5>
{album.map((track, index) => {
return (
<div key={index}>                     
<ListGroup variant="flush">
<ListGroup.Item class="MusicText">{track.trackName}</ListGroup.Item>
</ListGroup>
</div>
)    
})}
</Container>
</div>
);
};
      
export default AlbumPage;