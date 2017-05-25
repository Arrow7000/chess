import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Board from './Board';
import { newGame } from '../actions/actions';

const mapStateToProps = (state) => {
    return {
        board: state.board
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        newGame
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Board);
