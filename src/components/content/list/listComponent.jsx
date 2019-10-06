import React, { Component } from 'react'
import PokemonComponent from "./pokemonComponent"

export default class listComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: null,
        };
      }
      componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/')
          .then(response => response.json())
          .then(data => this.setState({ data }));
      }
    render() {
        const results = this.state.data && this.state.data.results || false;
        return (
            <div className="row justify-content-center">
                <div className="col-6">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Figure</th>
                            <th scope="col">Name</th>
                            <th scope="col">HP / AP</th>
                            <th scope="col">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            Object.entries(results).map(([id, entries]) => <PokemonComponent key={id} data={entries} />)
                        }
                    </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
