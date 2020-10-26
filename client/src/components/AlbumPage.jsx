import React from "react"; 
import { Form } from 'react-bootstrap';

// Have the basic layout of the page. Nav Bar + Video/Album cover of the song + an input form + a hint button.

const AlbumPage = ({handleChange}) => {
 
return (
    <div className="playHeader">
        <Form.Control onChange={handleChange}/>
    </div>
)
}

export default AlbumPage;