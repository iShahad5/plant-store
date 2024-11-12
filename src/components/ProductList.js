import React from 'react';
import Product from './Product';

const products = [
    { id: 1, name: 'Snake Plant', price: 20, image: 'snake-plant.jpg' },
    { id: 2, name: 'Fiddle Leaf Fig', price: 30, image: 'fiddle-leaf-fig.jpg' },
    { id: 3, name: 'Pothos', price: 15, image: 'pothos.jpg' },
    { id: 4, name: 'Spider Plant', price: 25, image: 'spider-plant.jpg' },
    { id: 5, name: 'Peace Lily', price: 35, image: 'peace-lily.jpg' },
    { id: 6, name: 'ZZ Plant', price: 40, image: 'zz-plant.jpg' },
];

const ProductList = () => {
    return (
        <div className="product-list">
            <h1>Product List</h1> {/* عنوان صفحة قائمة المنتجات */}
            <div className="products">
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;