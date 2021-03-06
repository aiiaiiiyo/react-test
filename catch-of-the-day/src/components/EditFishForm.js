import React from 'react';

class EditFishForm extends React.Component {
  handleChange = (e) => {
    //console.log(e.currentTarget.value);
    // e.currentTarget.name
    //update that fish
    //take copy of current fish
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    };
    //console.log('UPDATEDFISH', updatedFish);
    this.props.updatedFish(this.props.index, updatedFish);
  }
  render() {
    return <div className="fish-edit">
      <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
      <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
        <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
      <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
      <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
    </div>;
  }
}

export default EditFishForm;
