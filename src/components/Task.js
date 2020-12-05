import React, { PureComponent } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import styles from './Task.module.css';





class Task extends PureComponent {
    state = {
        checked: false
    };
    handleCheck = () => {
        this.setState({
            checked: !this.state.checked
        });
        this.props.onCheck(this.props.data._id)
    }
    render() {

        const task = this.props.data;
     
        const { checked } = this.state;
        const { disabled } = this.props;


        return (
            <Card className={checked ? styles.selected : ''}>

                <Card.Body>
                    <input type="checkbox"
                        onClick={this.handleCheck}
                     />
                    <Card.Title className = {styles.titleStyle}>
                       {task.text.slice(0, 8) + '...'}
                    </Card.Title>
                    <Card.Text>
                        {task.text}
                    </Card.Text>
                    <Button variant="warning"
                        disabled={disabled}
                        onClick={ () =>  this.props.onEdit(task)}
                       
                    >

                        <FontAwesomeIcon icon={faEdit}

                        />
                    </Button>
                    <Button variant="danger"
                        className={styles.deleteButton}
                        disabled={disabled}
                        onClick={() => this.props.onRemove(task._id)}
                    >
                        <FontAwesomeIcon icon={faTrash}

                        />
                    </Button>
                </Card.Body>
            </Card>
        )
    }



}



export default Task;