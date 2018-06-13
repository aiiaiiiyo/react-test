import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    // Stop the store from submitting
    event.preventDefault();
    // get text from input
    const storeName = this.myInput.value.value;
    // Change page store/blabla
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Pleas Enter a Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store →</button>
        </form>
      </Fragment>
    )
  }
}

export default StorePicker;
