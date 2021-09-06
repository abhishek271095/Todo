import React from 'react';

import  {connect} from 'react-redux';
import { deleteTodo } from '../actions';
import todos from '../reducers/todos';
import Button from 'react-bootstrap/Button'
import { Col, Row } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import ListGroup from 'react-bootstrap/ListGroup'

const List = (props)=>{

    return(
    //     <ol>
    //         {props.todos.map((todo,index)=>(
    //             <li key={index} >{todo.message}
                
    //             <Button variant="outline-primary" onClick={()=>props.dispatch(deleteTodo(todo.id))}>X</Button>
    //             </li>
    //         ))}
    //     </ol>

    //    ............
            <Row>

                <Col>
                </Col>

                <Col className=" m-2">
                <ListGroup>
                   {props.todos.map((todo,index)=>(
                     <ListGroup.Item key={index} >{todo.message}

                        <Button className="float-end" variant="outline-info"  onClick={()=>props.dispatch(deleteTodo(todo.id))}>X</Button>
                    </ListGroup.Item>
        
                     ))}
                 </ListGroup>
                </Col>

                <Col>
                </Col>
            </Row>
           
   
    )
};
const mapStateToProps = (state)=>({
    todos:state.todos.data,
})

export default connect(mapStateToProps)(List);