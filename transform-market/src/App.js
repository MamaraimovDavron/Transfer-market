import React, { Component } from 'react';
import PlayerModal from './components/PlayerModal';

class App extends Component {
    state = {
        players: [],
        modalVisibility: false,
    };
    
    componentDidMount() {
        const players = [
            {
                fname: 'Neymar',
                age: 30,
                position: 'Left Winger',
                value: 222,
            },

            {
                fname: 'Kylian Mbappe',
                age: 24,
                position: 'Center-Forward',
                value: 180,
            },

            {
                fname: 'Philippe Coutinho',
                age: 32,
                position: 'Left Winger',
                value: 135,
            },

            {
                fname: 'Ousmane Dembele',
                age: 36,
                position: 'Right Winger',
                value: 135,
            },
        ];

        this.setState({
            players,
        })
    }

    removePlayer = (index) => {
        const players = this.state.players;
        players.splice(index, 1);
        this.setState({
            players,
        })
    }

    openModal = () => {
        this.setState({
            modalVisibility: true,
        })
    }

    closeModal = () => {
        this.setState({
            modalVisibility: false,
        })
    }

    render() {
        const {players, modalVisibility} = this.state;
        
        return (
            <div className='container'>
                <h1 className='text-center'>Transfer Market</h1>
                <div className="row">
                    <div className="row text-center">
                        <div className="col">
                            <button className='btn btn-primary m-3' onClick={this.openModal}>Add a player</button>
                        </div>
                        {
                            modalVisibility ? <PlayerModal closeModal={this.closeModal}/> : ""
                        }
                    </div>
                    <div className="col-10">
                        <table className='table table-light table-hover m-5 text-left table-sm'>
                            <thead className='thead'>
                                <th>№</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Position</th>
                                <th>Value</th>
                                <th></th>
                            </thead>
                            <tbody>
                                {players.map((item, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.fname}</td>
                                        <td>{item.age}</td>
                                        <td>{item.position}</td>
                                        <td>
                                            <span className='badge bg-primary'>${item.value}.00m</span>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger btn-sm' onClick={() => this.removePlayer(index)}>Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
