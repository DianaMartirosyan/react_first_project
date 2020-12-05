import React, { Component } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';




class AddTask extends Component {
    state = {
        inputValue: ''
    };
    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })

    };
    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.addTask()
        }
    };
    addTask = () => {
        const { inputValue } = this.state;
        if (!inputValue) {
            return;
        }
       this.props.onAdd(inputValue)
       this.setState({
        inputValue : ''
       })
    };

    render() {
        const {disabled } =  this.props;
        const { inputValue } = this.state

        return (


            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Add new task"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={inputValue}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKey}
                    disabled = {disabled}
                />
                <InputGroup.Append>
                    <Button
                        variant="outline-secondary"
                        onClick={this.addTask}
                        disabled = {disabled}
                    >
                        Add
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        )

    }

}
export default AddTask;