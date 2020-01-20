import React from 'react';
import { connect } from 'react-redux';
import { decrease, increase, reset, modalOpen } from './action';

const Counter = ({ count, name, decrease, increase, reset, modalOpen }) => {
  return (
    <div className="container">
      <h1>counter</h1>
      <h2>{name}</h2>
      <h2 className="counter">{count}</h2>
      <div className="buttons">
        <button type="button" className="btn" onClick={decrease}>
          decrease
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => {
            reset();
            modalOpen(
              'Mekish',
              'Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo hic ex illum totam debitis quasi itaque odit, laboriosam perspiciatis sunt ?'
            );
          }}
        >
          reset
        </button>
        <button type="button" className="btn" onClick={increase}>
          increase
        </button>
      </div>
    </div>
  );
};
function mapStateToProps({ countState: { count, name } }) {
  return { count: count, name: name };
}
// const mapDispatchToProps = {
//   decrease,
//   increase,
//   reset,
//   modalOpen
// };
// function mapDispatchToProps(dispatch, ownProps) {
//   console.log(ownProps);
//   return {
//     decrease: () => dispatch(decrease()),
//     increase: () => dispatch(increase()),
//     reset: () => {
//       dispatch(reset());
//       dispatch(
//         modalOpen(
//           'Mekish',
//           'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo hic ex illum totam debitis quasi itaque odit, laboriosam perspiciatis sunt?'
//         )
//       );
//     }
//   };
// }
export default connect(mapStateToProps, {
  decrease,
  increase,
  reset,
  modalOpen
})(Counter);
