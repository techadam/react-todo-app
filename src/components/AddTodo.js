import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    
    state = {
        'title': '',
    }
    
    onChange = (e) => {
        this.setState({ title : e.target.value });
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group row">
                    <div className="col-sm-9">
                        <input type="text" name="title" onChange={this.onChange.bind(this)} value={this.state.title} className="form-control" />
                    </div>
                    <div className="col-sm-3">
                        <button type="submit" className="btn btn-primary btn-block">Add todo</button>
                    </div>
                </div>
            </form>
        );
    }
    
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo;