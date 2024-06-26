import React, { Component } from "react";
import ProductItem from "./product-item";

export default class ProductList extends Component {
    render() {
        const { productList, getProductTryIt } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <ul className="list-group list-group-horizontal">
                        { productList.map((productItem) => {
                            return <ProductItem key={productItem.id} productItem={productItem} getProductTryIt={getProductTryIt} /> 
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}