
import React, { Component } from 'react';
class Player extends Component {
   
    handleClick = () => {
        this.props.onVoteCasted(this.props.name)
   }
    render() {
        return (
            <div className="App">
                <img className="rounded-circle" src={this.props.image} alt="player" />
                <div className="mt-2">
                    <h5 className="card-title">{this.props.name}</h5>
                </div>
                <h5>Goals: {this.props.goals} </h5>
                <div>
                    <h2> Votes: {this.props.votes} </h2>
                </div>
                <div className="mb-3">
                    <button type="button" onClick={this.handleClick} className="btn btn-primary btn-lg">Vote For {this.props.name}</button>
                </div>
            </div>
        );
    }
}
export default Player;
