import React, { Component } from "react";
import ProductList from "./product-list";
import data from './dataGlasses.json';

export default class GlassesStore extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productList: data,
            productTryIt: null
        }
    }

    handleProductTryIt = (product) => {
        if (product) {
            this.setState({
                productTryIt: product
            });
        }
    }

    render() {
        const imageUrl = this.state.productTryIt?.url;
        
        return (
            <div>
                <hr />
                <h1 className="title">Bài tập React JS Buổi 2 State - Glasses Store</h1>
                <hr />
                <div className="container">
                    <div id="try-glasses">
                        <div className="position-glasses">
                            <img src={imageUrl} alt="" />
                        </div>
                    </div>
                </div>
                <ProductList productList={this.state.productList} getProductTryIt={this.handleProductTryIt} />
            </div>
        );
    }
}