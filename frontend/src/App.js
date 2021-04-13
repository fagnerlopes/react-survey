import React, { Component } from 'react';
import Candidates from './components/candidates/Candidates';
import Header from './components/header/Header';
import Preloader from './components/preloader/Preloader';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      candidates: [],
    }
    this.interval = null;
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      fetch('http://localhost:8080/votes')
      .then(res => {
        return res.json().then((json)=>{
          console.log(json);
          this.setState({
            candidates: json.candidates,
          });
        });
      });

    }, 3000);

  }
  render() {
    const { candidates } = this.state;
    if(candidates.length === 0) {
      return (
        <div className="container col s-4">
          <Preloader description="Carregando..."/>
        </div>      
      );
    }

    return (
      <div className="container">
        <Header>Votação</Header>
        <Candidates candidates={candidates}/>
      </div>
    )
  }
}
