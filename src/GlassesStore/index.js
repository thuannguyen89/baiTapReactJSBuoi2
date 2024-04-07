import React, { Component } from "react";
import ProductList from "./product-list";
import data from './dataGlasses.json';

export default class GlassesStore extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productList: data,
        }
    }

    render() {
        return (
            <div>
                <hr />
                <h1 className="title">Bài tập React JS Buổi 2 State - Glasses Store</h1>
                <hr />
                <ProductList productList={this.state.productList} />
            </div>
        );
    }
}