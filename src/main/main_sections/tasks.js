import React, { Component } from 'react';

class Block extends Component {
  render(){
    return(
      <div className="flex todoItem"> 
        <div className="flex todoList">{this.props.children}</div>
        <div className="flex todoItem_btns">
          <button className="btn pointer" onClick={() => this.props.deleteBlock(this.props.index)}>Видалити</button>
        </div>
      </div>
    )
  }
}

class Tasks extends Component {
  state = {
    open: false,
    todos: []
  }

  open_closeModal = () => this.setState(e => ({open: !e.open}))

  addName = (text, i) => {
    var name = this.refs.txtName.value
    var surname = this.refs.txtSurname.value
    var email = this.refs.txtEmail.value
    text = [
      name,
      surname,
      email
    ]
    var arrTodos = this.state.todos
    if (!name.length || !surname.length || !email.length) {
      return(
        alert('Всі поля повинні бути заповнені!')
      )
    } else {
      arrTodos.push(text)
      this.setState({todos: arrTodos})
      this.setState({open: false})
    }
  }
  deleteBlock = (i) => {
    var arrTodos = this.state.todos
    arrTodos.splice(i, 1)
    this.setState({todos: arrTodos})
  }

  eachTask = (item, i) => (
    <Block key={i} index={i} deleteBlock={this.deleteBlock} todos={this.state.todos}>
      <div className="todoList_item">{item[0]}</div>
      <div className="todoList_item">{item[1]}</div>
      <div className="todoList_item">{item[2]}</div>
    </Block>
  )

  render() {
    const modalField = this.state.open && 
      <div className="modalName">
        <div className="modalName_box">
          <span className="closeModal pointer right" onClick={this.open_closeModal}><b>X</b></span>
          <input id="name" type="text" ref="txtName" autoComplete="off" placeholder="Enter your name" />
          <input id="surname" type="text" ref="txtSurname" autoComplete="off" placeholder="Enter your surname" />
          <input id="email" type="text" ref="txtEmail" autoComplete="off" placeholder="Enter your email" />
          <button className="pointer btn" onClick={this.addName.bind()} >Add client</button>
        </div>
      </div>
    return (
      <div className="tasks">
        <button className="pointer btn" onClick={this.open_closeModal}>Add task</button>
        <span className="right">Registered piople: # {this.state.todos.length}</span>
        {modalField}
        {this.state.todos.map(this.eachTask)}
      </div>
    );
  }
}

export default Tasks;