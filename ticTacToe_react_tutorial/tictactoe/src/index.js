import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value + "!!"}
      </button>
    );
  }

// class Square extends React.Component {
//     // constructor(props){
//     //     // super when defining the constructor of a subclass. All React component classes that have a constructor should start it with a super(props) call.
//     //     super(props);
//     //     this.state={
//     //         value:null
//     //     };
//     // }

//     render() {
//       return (
//         // onClick={() => alert('click')}, we’re passing a function as the onClick prop. It only fires after a click. Forgetting () => and writing onClick={alert('click')}
//         <button className="square" /*TODO onClick={function(){alert('click');}}*/ onClick={()=>this.props.onClick()}>
//           {/* TODO */this.props.value}
//         </button>
//       );
//     }
//   }
  
class Board extends React.Component {
    constructor(props){
        super(props);
        this.state={
            squares : Array(9).fill(null)
        };
    }
    handleClick(i) {
        const squares = this.state.squares.slice(); // copy an array to modify
        squares[i] = 'X';
        this.setState({squares: squares});
      }

    renderSquare(i) { // square prop
        return <Square value={this.state.squares[i]} /*{i}*/
            onClick = {()=>this.handleClick(i)} />;
    }

    render() {
        const status = 'Next player: X';

        return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>
            <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </div>
            <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </div>
        </div>
        );
    }
}

class Game extends React.Component {
render() {
    return (
    <div className="game">
        <div className="game-board">
            <Board />
        </div>
        <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
        </div>
    </div>
    );
}
}
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  