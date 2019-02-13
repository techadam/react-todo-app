import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    
    getStyle = () => {
        return {
                textDecoration: this.props.todo.completed? 'line-through' : 'none',
                background: '#f4f4f4',
                borderBottom: '1px #ccc dotted',
                padding: '15px',
               };
    }
    
    render() {
        const {id, title} = this.props.todo;
        return (
            <div className="todo">    
                <h5 className="mb-0" style={this.getStyle()}><input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {this.props.todo.title} <button onClick={this.props.deleteTodo.bind(this, id)} className="btn btn-danger rounded-circle float-right">x</button><span className="clearfix"></span></h5>
            </div>
        );
    }
    
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
}

export default TodoItem;