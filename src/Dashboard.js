import React, { Component } from "react";
import MovieForm from "./movieForm";
import MovieList from "./MovieList";
const dummyData = {
  name: "",
  rating: "",
  duration: ""
};
class Dashboard extends Component {
  state = {
    products: []
  };

  onsubmithandler = data => {
    debugger;
    const products = this.state.products;

    products.push({
      ...data,
      id: products.length
    });
    this.setState({
      products: []
    });
    this.setState({
      products: products
    });
  };

  render() {
    return (
      <div className="container" style={{ marginTop: 50 }}>
        <MovieForm data={dummyData} onsubmithandler={this.onsubmithandler} />
        <MovieList products={this.state.products} />
      </div>
    );
  }
}

export default Dashboard;
