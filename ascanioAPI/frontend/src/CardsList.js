import './App.css'
import React, { Component } from 'react'
import Board from 'react-trello'
import CardsService from './CardsService';

const cardsService = new CardsService();


const handleDragStart = (cardId, laneId) => {
  console.log('drag started')
  console.log(`cardId: ${cardId}`)
  console.log(`laneId: ${laneId}`)
}

const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
  console.log('drag ended')
  console.log(`cardId: ${cardId}`)
  console.log(`sourceLaneId: ${sourceLaneId}`)
  console.log(`targetLaneId: ${targetLaneId}`)
}

class App extends Component {
  state = { boardData: { lanes: [] } }

  setEventBus = (eventBus) => {
    this.setState({ eventBus })
  }

  async componentWillMount() {
    const response = await this.getBoard()
    this.setState({ boardData: response })
  }

  async getBoard() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const todos = await res.json();
      return {lanes: [{id: 1, title: "TO DO", label: "", style: {width: 280}, cards: todos}]}
    } catch (e) {
      console.log(e);
    }
  }


  shouldReceiveNewData = (nextData) => {
    console.log('New card has been added')
    console.log(nextData)
  }

  handleCardAdd = (card, laneId) => {
    cardsService.createCard(card).then((result) => 
    	console.log("Card added")
    );
  }

  handleCardDelete = (card, laneId) => {
    cardsService.deleteCard(card).then((result) => 
    	console.log("Card deleted")
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Test Ascanio</h3>
        </div>
        <div className="App-intro">
          <Board
            editable
            onCardAdd={this.handleCardAdd}
            onCardDelete={this.handleCardDelete}
            data={this.state.boardData}
            draggable
            onDataChange={this.shouldReceiveNewData}
            eventBusHandle={this.setEventBus}
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
          />
        </div>
      </div>
    )
  }
}

export default App
