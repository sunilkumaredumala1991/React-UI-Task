import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
const MySearch = props => {
  let input;
  const handleClick = () => {
    props.onSearch(input.value);
  };
  return (
    <div>
      <input
        id="search-input"
        className="form-control"
        ref={n => (input = n)}
        type="text"
      />
      <button className="btn btn-success" onClick={handleClick}>
        Click to Search!!
      </button>
    </div>
  );
};

class MovieList extends Component {
  state = {
    columns: [
      {
        dataField: "name",
        text: "Movie Name",
        sort: true
      },
      {
        dataField: "rating",
        text: "Rating",
        sort: true
      },
      {
        dataField: "duration",
        text: "Duration",
        sort: true
      }
    ]
  };

  render() {
    const { SearchBar } = Search;
    const defaultSorted = [
      {
        dataField: "duration",
        order: "desc"
      }
    ];

    return (
      <div className="container" style={{ marginTop: 50 }}>
        {this.props.products.length === 0 ? (
          <h3 id="no-result">No Results Found` message</h3>
        ) : (
          <div>
            <div>
              <ToolkitProvider
                ref="toolkit"
                keyField="id"
                data={this.props.products}
                columns={this.state.columns}
                search
              >
                {props => (
                  <div>
                    <h3>Input something at below input field:</h3>
                    <MySearch {...props.searchProps} />
                    <hr />
                    <BootstrapTable
                      id="directory-table"
                      defaultSorted={defaultSorted}
                      {...props.baseProps}
                    />
                  </div>
                )}
              </ToolkitProvider>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MovieList;
