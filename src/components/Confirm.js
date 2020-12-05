import React from "react";
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from '../components/ConfirmStyle.module.css';

export default function Confirm(props) {
    return (
        <>
      

            <Modal show={true} onHide={props.onClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
    <Modal.Body> Do You want to remove {props.count} tasks </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className = {styles.closeStyle} onClick={props.onClose}>
                        Close
          </Button>
                    <Button variant="primary" className = {styles.saveStyle} onClick={props.onSubmit}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );


   Confirm.propTypes = {
       count : PropTypes.number.isRequired,
       onSubmit : PropTypes.func.isRequired,
       onClose : PropTypes.func.isRequired,
   }

}