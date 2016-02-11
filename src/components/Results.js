'use strict';

import React from 'react';
import Results from 

require('styles/Results.sass');

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.props.data = '';
  }
  render() {
    return (
      <div className="results">
        {this.props.data}
      </div>
    );
  }
}

Results.displayName = 'Results';

// Uncomment properties you need
Results.propTypes = {};
Results.defaultProps = {};

export default Results;
