import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Component from './component';

import { services } from '../../actions';

const mapStateToProps = state => ({
    todos: state.services.todos,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(services.todos, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
