import React, { Component, PropTypes } from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: ''
        }

        // bind context
        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="list-item-input">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        value={this.state.item}
                        onChange={this.onInputChange} />
                </form>
            </div>
        )
    }

    // updates state when input is changed
    onInputChange(event) {
        this.setState({ item: event.target.value});
    }

    // when form is submitted, add item to list
    handleSubmit(event) {
        event.preventDefault();
        // pass item to index.js
        this.props.onFormSubmit(this.state.item);
        // reset input
        this.setState({ item: '' });
    }
}


export default AddItem;