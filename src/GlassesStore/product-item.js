import React, { Component } from 'react';

export default class ProductItem extends Component {
    render() {
        const { id, price, name, url, desc } = this.props.productItem;
        return (
            <li className="list-group-item">
                <img className="card-img-top" src={url} alt={name} />
                <p>{name}</p>
            </li>
        );
    }
}