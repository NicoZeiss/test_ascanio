import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class CardsService{

    constructor(){}


    getCards() {
        const url = `${API_URL}/api/`;
        return axios.get(url).then(response => response.data);
    }
    getCardsByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getCard(id) {
        const url = `${API_URL}/api/cards/${id}`;
        return axios.get(url).then(response => response.data);
    }
    deleteCard(card){
        console.log("ok")
        const url = `${API_URL}/api/${card}/`;
        console.log(url)
        return axios.delete(url);
    }
    createCard(card){
        const url = `${API_URL}/api/`;
        return axios.post(url,card);
    }
    updateCard(card){
        const url = `${API_URL}/api/${card.id}`;
        return axios.put(url,card);
    }
}