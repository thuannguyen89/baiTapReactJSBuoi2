import React, { Component } from 'react';

export default class ProductItem extends Component {
    handleProductTryIt = () => {
        this.props.getProductTryIt(this.props.productItem);
    }

    render() {
        const { id, price, name, url, desc } = this.props.productItem;
        return (
            <li className="list-group-item">
                <img className="card-img-top" src={url} alt={name} />
                <p>{name}</p>
                <button className="btn btn-dark"
                        onClick={this.handleProductTryIt}>Try it
                </button>
            </li>
        );
    }
}