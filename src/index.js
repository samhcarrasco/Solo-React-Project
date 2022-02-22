import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import logo from "../assets/pic.png"

class App extends React.Component{

  render(){
    return(
  <div id = "app "> 
    <h1 id="Header">NY Times Best Sellers   <img src={logo} height = "25"/></h1>
      <Container/>
   </div>
    )
  }
}

class Container extends React.Component{
  constructor(props){
  super(props);

  this.state = {
    list: [],
  };
}

  componentDidMount(){
    fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Rs7R7YKmE778AEx4pIzF3Cl8uuV8VeKY')
    .then(res => res.json())
    .then(data => this.setState({list: data.results.books}))
    
  }
 
  
  render(){
    console.log(this.state)
    const books = [];
    for(let i = 0; i < this.state.list.length; i++){
      books.push(<Book title={this.state.list[i].title} link = {this.state.list[i].amazon_product_url} cover = {this.state.list[i].book_image} author = {this.state.list[i].author} rank = {this.state.list[i].rank} desc = {this.state.list[i].description}/>)
    }
    return(<div id = "contain">
      {books}
    </div>)}
}

class Book extends React.Component{
  render(){
    return(<div id = "book" ><h1> Here's a book ranked #{this.props.rank} by Author {this.props.author}:  <u>{this.props.title}</u>  <button className = "button"> <a href = {this.props.link} target = "_blank">Buy here! </a></button></h1>
    <div id = "picndesc">
    <img src = {this.props.cover}/> 
    <p>{this.props.desc}</p>
    </div>
    </div>
     ) 
  }
}
 ReactDOM.render(<App/>, document.getElementById('root'));