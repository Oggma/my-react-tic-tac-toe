import React from 'react';

class History extends React.Component {
    constructor(props) {
        super(props);
        this.checked = React.createRef();
        this.state = {
            order: false
        }
        this.handleSwitch = this.handleSwitch.bind(this);
    }

    handleSwitch(event) {
        this.setState( {
            order: event.target.checked
        });
    }

    render() {
        const history = this.props.history.map((step, move) => {
            const desc = move ?
                'Jumo to move #' + move :
                'Jump to start';
            const pos = this.props.history[move].movePos;
            return (
                <li key={move}>
                    <div className="history-item">
                        <button className="btn-move-jump" onClick={() => this.props.onJumpTo(move)}>{desc}</button>
                        {move ? <div className="move-pos">{'(' + pos.col + ',' + pos.row + ')'}</div> : ''}
                    </div>
                </li>
            )
        });     
        return (
            <div>
                <label className="switch">
                    <input type="checkbox" checked={this.state.order} onChange={this.handleSwitch}/>
                    <span className="slider round"></span>
                    <div className="switch-text"> {this.state.order ? 'Descending' : 'Ascending'} </div>
                </label>            
                {this.state.order ? history.reverse() : history}
            </div>
        );
    }
}

export default History;