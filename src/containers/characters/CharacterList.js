import React, { Component } from 'react'
import CharacterCard from '../../components/characters/CharacterCard';
import { connect } from 'react-redux';

export class CharacterList extends Component {
    render() {

        if(this.props.loading) {
            return <div>Loading...</div>
        } else {
            const characters = this.props.characters.map((character, i) => {
                return <CharacterCard key={i} character={character} />
            })
            
            return (
                <div>
                    <h3>Here's a list of characters</h3>
                    <ul>
                        { characters }
                    </ul>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        characters: state.charactersReducer.characters,
        loading: state.charactersReducer.loading
    }
}

export default connect(mapStateToProps)(CharacterList);

