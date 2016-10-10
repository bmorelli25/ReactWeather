var React = require('react');
var Nav = require('./Nav.jsx');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="columns medium-12 large-10 small-centered weather-form">
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
