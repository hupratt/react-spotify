import MostPlayed from "./component";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSongs, fetchRecentlyPlayed, updateViewType, fetchMostPlayed } from '../../actions/songActions';
import { fetchAlbums } from '../../actions/albumActions';
import { fetchArtists } from '../../actions/artistActions';
import { fetchFeatured } from '../../actions/browseActions';
import { updateHeaderTitle } from '../../actions/uiActions';

const mapStateToProps = (state) => {

  return {
    userId: state.userReducer.user ? state.userReducer.user.id : '',
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    artistIds: state.artistsReducer.artistIds,
    title: state.uiReducer.title,
    songs: state.songsReducer.songs
  };

};

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    fetchMostPlayed,
    fetchRecentlyPlayed,
    fetchSongs,
    fetchAlbums,
    fetchArtists,
    fetchFeatured,
    updateViewType,
    updateHeaderTitle,
  }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(MostPlayed);
