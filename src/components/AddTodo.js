import React from 'react';

import  {connect} from 'react-redux';
import { addTodo } from '../actions';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Col, Row } from 'react-bootstrap';

const AddTodo = (props)=>{

    return(
        <form onSubmit={(event)=>{
            event.preventDefault();

            let input = event.target.userInput.value;
            props.dispatch(addTodo(input));
            event.target.userInput.value="";
            console.log(input);
        }}>
            {/* <input   type='text'  name='userInput' placeholder='Enter Data'/> */}
          
            {/* <Button variant="outline-primary">Submit</Button> */}

            <Row>
                <Col></Col>
                <Col>

                <h2 className="display-2 text-center"> #Todo List  </h2>
                <InputGroup className="mb-3">
                <FormControl
                type="text"
                placeholder="Enter Data"
                name="userInput"
                />
                <button className="btn btn-outline-primary">Submit</button>
                {/* <Button variant="outline-secondary" id="userInput">
                Submit
                </Button> */}
            </InputGroup>
            </Col>
                <Col></Col>
            </Row>    


            
            
        </form>
    )
}

export default connect() (AddTodo);