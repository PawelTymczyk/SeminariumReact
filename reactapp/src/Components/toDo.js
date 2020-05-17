import React from 'react';
import ToDoItem from './todoItem';

class ToDo extends React.Component {
    state = {
        elements: [
            { id: '1', isCompleted: true, title: "Zrobić zakupy" },
            { id: '2', isCompleted: false, title: "Wyporwadzić psa" }
        ],
        newTask: '',
        button: false
    }

    markCompleted(id) {
        const index = this.state.elements.findIndex(x => x.id == id)
        const newElemets = this.state.elements
        newElemets[index].isCompleted = true

        this.setState({ elements: newElemets })
    }

    addItem() {
        const element = {
            id: Math.random(),
            isCompleted: false,
            title: this.state.newTask
        }

        const newElemets = [element, ... this.state.elements]

        this.setState({ elements: newElemets })
        this.setState({ newTask: '' })
    }

    InputHandler(event) {
        const newValue = event.target.value
        this.setState({ newTask: newValue })
    }

    clickedBuddon() {
        this.state.button = true;
        return this.state.button;
    }

    sum(a, b) {
        return a + b;
    };

    render() {

        const elements = this.state.elements.map(e => {
            return <ToDoItem element={e} markClicked={this.markCompleted.bind(this)} ></ToDoItem>
        })

        return (<div >
            Lista to do:
            <p>Lorem ipsum</p>
            <button onClick={this.clickedBuddon.bind(this)} data-testid="button"> Button </button>
            Dodaj zadanie:
            <input type="text" value={this.state.newTask} onChange={this.InputHandler.bind(this)} aria-label="input-new-task"></input>
            <button onClick={this.addItem.bind(this)}>Dodaj</button>
            {elements}
        </div>
        )
    }
}

export default ToDo