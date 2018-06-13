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
<<<<<<< HEAD
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
=======
      <form className="store-selector">
        <h2>Please Enter a Store Name</h2>
      </form>
>>>>>>> 203773c255d9a406c99e37e031de34958edc918d
    )
  }
}

export default StorePicker;
