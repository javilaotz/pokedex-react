import React, { Component } from 'react'

import './list.css'



export default class pokemonComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pokemon: false
        }
    } 
    componentDidMount(){
        const data = this.props.data;
        fetch(data.url)
          .then(response => response.json())
          .then(data => this.setState({pokemon: data}));
    }   

    handleType(type){
        let typesarr={
            normal: "badge badge-secondary typeclass",
            poison: "badge badge-dark typeclass",
            grass: "badge badge-success typeclass",
            fire: "badge badge-danger typeclass",
            flying: "badge badge-warning typeclass",
            water: "badge badge-primary typeclass",
            bug: "badge badge-success typeclass"
        }
        return <span className={typesarr[type]}>{type}</span>
    }
    render() {
        const pokemon = this.state.pokemon && this.state.pokemon
        let types = []

        pokemon.types && pokemon.types.map(value => {
            types.push(value.type.name)
        })
        
        return (
            <tr>
                <th scope="row">{pokemon.id}</th>
                <td></td>
                <td>{pokemon.name}</td>
                <td></td>
                <td>{
                    types.map(type => this.handleType(type))
                }</td>
            </tr>
        )
    }
}
