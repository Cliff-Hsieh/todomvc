
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Component from './component';

import { services } from '../../actions';
const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
    addTodo: bindActionCreators(services.todos.addTodo, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
