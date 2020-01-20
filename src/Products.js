import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from './action';

const Products = ({ products, loading, getProducts }) => {
  React.useEffect(() => {
    getProducts();
  }, [getProducts]);
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">our products</h2>
      <ul className="products">
        {products.map(item => {
          return (
            <li key={item.id} className="product">
              <img src={item.image.url} alt={item.title} />
              <h4>{item.title}</h4>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  getProducts: PropTypes.func.isRequired
};
const mapStateToProps = ({ productState: { products, loading } }) => {
  return { products, loading };
};
export default connect(mapStateToProps, { getProducts })(Products);
