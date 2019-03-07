import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store';

class Home extends React.Component {
  componentDidMount() {
    const { circuits, fetchDataApi } = this.props;
    if (circuits.length <= 0) {
      fetchDataApi();
    }
  }

  render() {
    const { circuits } = this.props;

    return (
      <div>
        <h2>F1 2018 Season Calendar</h2>
        <ul>
          {circuits.map(({ circuitId, circuitName, Location }) => (
            <li key={circuitId}>
              {circuitName} - {Location.locality}, {Location.country}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
Home.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = state => ({
  circuits: state.data
});

const mapDispatchToProps = {
  fetchDataApi: fetchData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
