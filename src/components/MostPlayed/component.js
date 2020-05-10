import React from "react";
import PropTypes from "prop-types";

import "./MostPlayed.css";



const MostPlayed = ({fetchMostPlayed, token, songs}) => {
    const handleBrowseClick = () => {
        fetchMostPlayed(token)
        };
    handleBrowseClick()
    const render = (items) => {
        return items.map((item) => {
            return(<li key={item.id}> {item.name} {item.genres && item.genres.map((genre,i)=><ul key={item.id+genre+i}>{genre}</ul>)}</li>)
          });
    }
    return (
    <React.Fragment>
        {songs ? (render(songs)):(<button/>)}
    </React.Fragment>
    );
};

MostPlayed.propTypes = {
    token: PropTypes.string,
    songs: PropTypes.array,
    fetchMostPlayed: PropTypes.func,
};

export default MostPlayed;