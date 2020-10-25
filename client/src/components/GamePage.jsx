import React from "react"; 
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
// Have the basic layout of the page. Nav Bar + Video/Album cover of the song + an input form + a hint button.
// Have the song from the API automatically play along the video/ablum cover display as soon as they enter this screen.
// Hint - If the user clicks on the hint button, it will give the user a hint from the API which either displays the name of the song, artist, and or album name. 
// Have the user guess in the input to the question. (Make it non-case sensititve)
// If the user guesses correctly, have them move on to the next song. 
// If the user guesses incorrectly, have the user redirected the W/L page. 
// *** User will have 3 tries until the get prompted to the W/L page.  
// *** Timer Function 
// *** User will be directed to a Win Page if they get 5-10 answers right.
// *** Dificulty Page. 

const GamePage = () => {
let handleSubmit = (input) => {
    if input = api.answer {
       return {winLossPage}
    } else {

    }
}
    const isGuessCorrect = (usrGuess, correctAns) => {
    let guess = usrGuess;
    let answer = correctAns;


return (
<div>

    
<Form onSubmit={handleSubmit}>
    <Form.Row>
        <Form.Control
            type="text"
            placeholder="Guess that Artist!"
            autoComplete="off"
        ></Form.Control>
        <button type="submit" 
    </Form.Row>
</Form>
<DropdownButton id="dropdown-basic-button" title="Dropdown button">
  
  <Dropdown.Item>Name of Song/Album</Dropdown.Item>

</DropdownButton>
</div>
)
}
export default GamePage;