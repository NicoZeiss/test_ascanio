import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'
import  CardsList  from  './CardsList'
import  './App.css';


const  BaseLayout  = () => (
<div  className="container-fluid">
    <div  className="content">
        <Route  path="/"  exact  component={CardsList}  />
    </div>
</div>
)

class  App  extends  Component {

render() {
    return (
    <BrowserRouter>
        <BaseLayout/>
    </BrowserRouter>
    );
}
}
export  default  App;