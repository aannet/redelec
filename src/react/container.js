import {connect}                from 'react-redux';
import * as components          from './components';
import {addTodo, toggleTodo}    from './actions';



export const TodoList = connect(
    /**
     * @param state tore's current state as arguments
     */
    function mapStateToProps(state) {
        return {todos:state}
    }

    function mapDispatchToProps(dispatch) {

    }


)(components.TodoList);