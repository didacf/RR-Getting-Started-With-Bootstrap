import './App.css';
import Button from 'react-bootstrap/Button';
import  ToggleButton from 'react-bootstrap/ToggleButton';
import  ToggleButtonGroup  from 'react-bootstrap/ToggleButtonGroup';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'; 
import { useState} from 'react'



function App() {
  const {disabled, setDisabled} = useState (false)

  return (
    <div className="App">
      <Nav activeKey= "/home" fill variant ="tabs">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
      </Nav>
      <h1>Bootstrap Website</h1>
     <Button onClick = {() => setDisabled(!disabled)}variant="outline-dark">Dark Button</Button>
     <Button variant="danger" size="lg"disabled = {disabled}>Disabled Button</Button>
      <div>
        <ToggleButtonGroup type="radio"  name="options" defaultValue ={2}>
          <ToggleButton id= "option-1" value = {1}>Option 1</ToggleButton> 
          <ToggleButton id= "option-2" value = {1}>Option 2</ToggleButton> 
          <ToggleButton id= "option-3" value = {1}>Option 3</ToggleButton> 
        </ToggleButtonGroup>
        import Form from 'react-bootstrap/Form'
      </div>  
      <Form style={{padding: '2opx', maxWidth: '700px', margin: "0 auto", border: "2px solid blue", borderRadius: "15px"}}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Group controlID="formBasicCheckbox">
            <Form.Label>Favorite Movies</Form.Label>
            <Form.Select>
              <option>Inception</option>
              <option>Forrest Gump</option>
              <option>Shawshank Redepmtion</option>
              <option>Avengers: Endgame</option>
              <option>Spidernman</option>
            </Form.Select>
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
    </div>
  );
}

export default App;
