import React, { Component } from 'react';

class App extends Component {
    state = {
        players: [],
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

    render() {
        const {players} = this.state;
        
        return (
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <table className='table table-light table-hover m-5 p-2 text-left'>
                            <thead className='thead'>
                                <th>№</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Position</th>
                                <th>Value</th>
                            </thead>
                            <tbody>
                                {
                                    players.map((item, index) => (
                                        <tr>
                                            <td>
                                                {index + 1}
                                            </td>
                                            <td>
                                                {
                                                    item.fname
                                                }
                                            </td>

                                            <td>
                                                {
                                                    item.age
                                                }
                                            </td>

                                            <td>
                                                {
                                                    item.position
                                                }
                                            </td>
                                            <td>
                                                {
                                                    item.value
                                                }
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
