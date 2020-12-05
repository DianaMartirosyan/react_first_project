import React from "react";
import { Component } from "react";
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from '../components/EditStyle.module.css';

export default class EditTaskModal extends Component {
  constructor(props){
      super(props);
      this.state = {
        ...props.data,
     
      
    };
   
  }

  handleChange = (event)=> {
      this.setState({
        text : event.target.value 
      })
       
      
  };
  handleSave = () => {
      const {text} = this.state;
     
      if (!text){
          return
      }
      this.props.onSave(this.state)
  };

  handleKeyDown =(event) => {
   
      if (event.key === 'Enter') {
       this.handleSave()
      }    
  }

    render() {
    
    
        const { props } = this;

       const {text} = this.state
        return (
            <>


                <Modal show={true} onHide={props.onClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Task
                           
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body> 
                    <input
                        className = {styles.inputStyle} type="text"
                        value = {text}
                        onChange = {this.handleChange}
                        onKeyDown = {this.handleKeyDown}
                        
                     />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" className = {styles.closeStyle} onClick={props.onClose}>
                            Close
          </Button>
                        <Button variant="primary" className = {styles.saveStyle} onClick={this.handleSave}>
                            Save 
          </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );

    }
}
EditTaskModal.propTypes = {
    data: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}


