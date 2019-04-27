import React from 'react';
import CardList from '../componetes/CardList';
import Scroll from '../componetes/Scroll';
import SearchBox from '../componetes/SearchBox';
import {robots} from '../robots';
import './App.css';

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            robots : robots,
            searchField : ''
        }
    }

    onSearch =(e) =>{
        this.setState({searchField : e.target.value})
    }
        render(){
            const robotFiltred = this.state.robots.filter( robot => {
                return robot.name.toLowerCase().includes(this.state.searchField)
            })
            return (
                <div className='tc'>
               
                    <div class="hero-bg hero-content neon-hero neon hero-header">
                        <div class="title"><h1>ROBOT FREINDS</h1></div>
                        <SearchBox onSearch = {this.onSearch}/>
                        <Scroll>
                        <CardList robots={robotFiltred} />
                        </Scroll>
                    </div>
                </div>
            );
        }
} 
export default App;