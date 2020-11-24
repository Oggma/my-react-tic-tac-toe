import React from 'react';
import Square from './Square';

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        const bordRows = new Array(3);
        for (var i = 0; i < 9;) {
            var rowSquares = new Array(3);
            for (var j = 0; j < 3; i++, j++) {
                rowSquares.push(this.renderSquare(i));
            }
            bordRows.push(<div className="board-row"> {rowSquares} </div>)
        }
        return (
            <div>
                {bordRows}
            </div>
        );
    }
}

export default Board;