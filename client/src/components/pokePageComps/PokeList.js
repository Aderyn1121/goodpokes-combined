import React from 'react';
import PokeLink from './PokeLink';


const PokeList = ({ list, ...rest }) => (
    <ul className="pokeList">
        {list.map((poke, i) => (
            <div className="ui circular segment" key={i}>
                <PokeLink key={i} name={poke.name} url={poke.url} />
            </div>
        ))}
    </ul>
)

export const PokeListType = ({ list, ...rest }) => {

    const flatterList = list.map(item => {
        return item.pokemon
    });


    return (
        <ul className="pokeList">
            {flatterList.map((poke, i) => (
                <div className="ui circular segment" key={i}>
                    <PokeLink key={i} name={poke.name} url={poke.url} />
                </div>
            ))}
        </ul>
    )
}

export default PokeList;
