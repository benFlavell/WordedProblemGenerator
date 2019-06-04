import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
  }

  studentNames = [
    "Sleve",
    "Willie",
    "Onson",
    "Jeremy",
    "Darryl",
    "Scott",
    "Anatoli",
    "Shown",
    "Rey",
    "Dean",
    "Glenallen",
    "Mike",
    "Mario",
    "Dwigt",
    "Waul",
    "Tim",
    "Kevin",
    "Karl",
    "Tony",
    "Mike",
    "Bobson",
    "Todd"
  ]

  objectNames = [
    "Baseball",
    "Cat",
    "Beanbag",
    "Glove",
    "Phone",
    "Drink Bottle",
    "Lollypop",
    "Lunchbox",
    "Hand",
    "Earring",
  ]

  generateWordedProblems() {
    var problemsJsx = [];
    
    for (var i = 0; i < this.studentNames.length / 2; i++) {
      problemsJsx.push(
      <div className="col-auto card bg-info text-white">
        {this.compileWordedProblem(
          this.studentNames[i * 2],
          this.studentNames[i * 2 + 1],
          Math.floor(Math.random() * 10) + 10,
          Math.floor(Math.random() * 10),
          this.objectNames[Math.floor(Math.random() * this.objectNames.length)]
        )}
      </div>);
    }

    return problemsJsx;
  }

  compileWordedProblem(ownerName, receiverName, originalNumber, givingNumber, object) {
    return `${ownerName} has ${originalNumber} ${object}s and gives ${givingNumber} to ${receiverName}. How many are left?`
  }

  render() {
    return (
      <div className="container">
        <h1 class="text-center text-primary">Worded Problems</h1>
        <div className="card-columns">
          {this.generateWordedProblems()}
        </div>
      </div>
    );
  }
}

export default App;
