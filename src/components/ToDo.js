import React, { Component } from 'react';





class ToDo extends Component {
    state = {
        tasks: ['aaa', 'bbbb', 'ccccccc'],
        inputValue: ''
    };
    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })

    };
    addTask = () => {
        const { inputValue } = this.state;
        const tasks = [...this.state.tasks];
        tasks.push(inputValue);
        this.setState({
            tasks: tasks,
            inputValue: ''
        });
    };
    render() {
        const { inputValue } = this.state;
        return (
            <div>
                <input type="text"
                    placeholder="Add neq task"
                    value={inputValue}
                    onChange={this.handleChange}

                />
                <input type="button" value='Add'
                    onClick={this.addTask}
                />
                <ol>

                    {this.state.tasks.map((task, index) => {
                        return <li key={index}>  {task} </li>

             

        })}
          </ol>
            </div>
        )
    }



}



export default ToDo;