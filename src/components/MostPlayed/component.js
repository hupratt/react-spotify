import React from "react";
import PropTypes from "prop-types";

import "./MostPlayed.css";



const MostPlayed = ({fetchMostPlayed, updateHeaderTitle, updateViewType, token, songs}) => {
    const handleBrowseClick = () => {
        fetchMostPlayed(token)
        };
    handleBrowseClick()
    const render = (items) => {
        return items.map(item => {
            return (
              <li
                key={item.key}
              >
                {item.name} 
              
              
                {console.log(item.genres)}
          </li>
            );
          });
    }
    return (
    <React.Fragment>
        {songs ? (render(songs)):(<button/>)}
        
    </React.Fragment>
    );
};

// MostPlayed.propTypes = {
//   headerTitle: PropTypes.string,
//   audioControl: PropTypes.func,
//   resumeSong: PropTypes.func,
//   pauseSong: PropTypes.func
// };

export default MostPlayed;