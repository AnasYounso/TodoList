import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import AddButton from './components/AddButton/AddButton';
import GroupList from './components/GroupList/GroupList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTodo: '',
      todoList: ['Check the list']
    };
  }

  handleSubmit = $event => {
    if (this.state.currentTodo === '') {
      return;
    }
    $event.preventDefault();
    this.setState(oldState => {
      return {
        todoList: [...oldState.todoList, oldState.currentTodo],
        currentTodo: ''
      };
    });
  };

  handleOnChangeCurrentTodo = value => {
    this.setState(() => {
      return {
        currentTodo: value
      };
    });
  };

  handleOnRemoveItem = indexTodo => {
    const { todoList } = this.state;
    const newTodoList = todoList.filter((value, index) => {
      return indexTodo !== index;
    });
    console.log(newTodoList);
    this.setState(() => {
      return {
        todoList: newTodoList
      };
    });
  };

  render() {
    return (
      <div className="containter" bg="light">
        <Jumbotron className="custom-jumborton">
          <Container>
            <div className="text-center">
              <h1 className="title">Todo List</h1>
              <form onSubmit={this.handleSubmit}>
                <AddButton
                  value={this.state.currentTodo}
                  onChange={this.handleOnChangeCurrentTodo}
                />
              </form>
              <GroupList
                list={this.state.todoList}
                onRemoveItem={this.handleOnRemoveItem}
              />
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
