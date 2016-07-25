/*global PlayerComponent:true*/

var AbsComponent;
if (typeof PlayerComponent === 'undefined') {
  AbsComponent = require('./Player');
} else {
  AbsComponent = PlayerComponent;
}

class ComputerComponent extends AbsComponent {
  startGuess() {
    this.choice = Math.round(Math.random() * 2);
  }
};

if (typeof module === 'object') {
  module.exports = ComputerComponent;
}
