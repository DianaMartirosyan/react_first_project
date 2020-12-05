import React, { PureComponent } from 'react';
import Task from './Task';
import styles from '../components/ToDo.module.css';
import idGenerator from './idGenerator';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AddTask from './AddTask';
import Confirm from './Confirm';
import EditTaskModal from './EditTaskModal'








class ToDo extends PureComponent {
    state = {
        tasks: [],
        inputValue: '',
        selectedTasks: new Set(),
        showConfirm :false,
        editTask : null,
        count :0

    };

    addTask = (value) => {
   
        const newTask = {
            text: value,
            _id: idGenerator()
        }
        const tasks = [newTask, ...this.state.tasks];

        this.setState({
            tasks: tasks,
         
        });
    };

    removeTask = (taskId) => {
        const newTasks = this.state.tasks.filter(task => task._id !== taskId);
        this.setState({
            tasks: newTasks,


        });



    };
    handleCheck = (taskId) => {
        const selectedTasks = new Set(this.state.selectedTasks);

        if (selectedTasks.has(taskId)) {
            selectedTasks.delete(taskId)
        } else {
            selectedTasks.add(taskId)
        }
        this.setState({
            selectedTasks,
            count: this.state.count +1 
        })
    };
    removeSelected = () => {
        let tasks = [...this.state.tasks];
        this.state.selectedTasks.forEach(id => {
            tasks = tasks.filter((task) => task._id !== id)
        });
        this.setState({
            tasks,
            selectedTasks: new Set(),
            showConfirm: false
            
        });
    };

     toggleConfirm = () => {
        this.setState({
            showConfirm: !this.state.showConfirm
            
              });

     };
   toggleEditModal = (task) => {console.log("toggleEditModal");
    this.setState({
        editTask : task
     
          });
        
   };
   saveTask = (editedTask) => {
       const tasks = [...this.state.tasks];
        const foundIndex = tasks.findIndex ((task) => task._id === editedTask._id) ;
       tasks[foundIndex] = editedTask;
         this.setState({
            tasks : tasks,
            editTask : null
       
         })
           

   };
  
   
 
    render() {console.log(111111111111, this.state);
      
        const {  tasks, selectedTasks, showConfirm, editTask } = this.state;
      
        const tasksArray = tasks.map((task) => {
            return (
              
                <Col key={task._id} xs={12} sm={6} md={4} lg={3} xl={2} >
                    <Task
                        className={styles.selected} data={task}
                        onRemove= {this.removeTask}
                        onCheck={this.handleCheck}
                        disabled={!!selectedTasks.size}
                        onEdit = {this.toggleEditModal}
                    />

                </Col>
            );



        })

        return (
            <div>
                <Container>
                    <Row>
                        <Col>

                            <AddTask 
                            onAdd = {this.addTask}
                            disabled = {!!selectedTasks.size}
                            />
                        </Col>
                    </Row>
                    <Row>
                        {tasksArray}
                    </Row>
                    <Row className='justify-content-center'>
                        <Button
                            variant="outline-danger"
                            onClick={this.toggleConfirm}
                            disabled={this.state.selectedTasks.size === 0 ? true : false}
                        >
                            Remove selected </Button>
                    </Row>


                </Container>
               {
                showConfirm &&     <Confirm 
                       onSubmit = {this.removeSelected} 
                       onClose = {this.toggleConfirm} 
                       count = {selectedTasks.size}
                       />
               }

               {
                   !! editTask &&
                   <EditTaskModal
                   data = {editTask}
                   onSave = {this.saveTask}
                   onKeyDown = {this.saveTask}
                  
                
                   onClose = {() => this.toggleEditModal(null)}
                    />
               }
            </div >
        )
    }



}



export default ToDo;