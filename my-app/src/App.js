import React, { Component } from 'react';
import FriendCard from "./components/friendCard";
import images from "./images.json";
import Jumbotron from "./components/jumbotron";
import Navbar from "./components/navbar";
import './App.css';

class App extends Component {
  state = {
    images,
    picClick: [],
    score: 0
  }

  picClick = event => {
    const currentStack = event.target.alt;
    const onceClicked = this.state.picClick.indexOf(currentStack) > -1;

    if (onceClicked) {
      this.setState({
        images: this.state.images.sort(function (a, b) {
          return 0.5 - Math.random();
        }),

        picClick: [],
        score: 0
      })

      alert("Waaaaaaahhhhh!  You clicked on the same image!")

    } else {
      this.setState(
        {
          images: this.state.images.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          picClick: this.state.picClick.concat(
            currentStack
          ),
          score: this.state.score + 1
        },

        () => {
          if(this.state.score === 12) {
            alert("Yippee! 1-UP");
            this.setState({
              images: this.state.images.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              picClick: [],
              score: 0
            })
          }
        }
      );
    }
  }
  render() {

    return (
      <div>
        <Navbar
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.images.map(images => (
            <FriendCard
              picClick={this.picClick}
              id={images.id}
              key={images.id}
              image={images.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
