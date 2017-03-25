// Include React
var React = require("react");

// Here we include all of the sub-components
var Child = require("./Child");

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Parent = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return {
      clicks: 0
    };
  },
  // Whenever the button is clicked we'll use setState to add to the clickCounter
  // Note the syntax for setting the state
  handleClick: function() {
    this.setState({ clicks: this.state.clicks + 1 });
  },
  // Whenever the button is clicked we'll use setState to reset the clickCounter
  // This will reset the clicks -- and it will be passed  ALL children
  resetClick: function() {
    this.setState({ clicks: 0 });
  },

  // Here we render the function
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>Click this button</h2>
            <p><em>See crazy things happen.</em></p>

            <p>
              {/* Here we create a button click.
              Note how we have an onClick event associate with our handleClick function. */}
              <button className="btn btn-primary btn-lg" onClick={this.handleClick}>CLICK ME!!!!</button>
              {/* Here we create a button click for resetting the clickCounter */}
            </p>

          </div>

          <div className="col-md-12">

            <div className="panel panel-default">
              <div className="panel-body text-center">

                {/*
                  Here we'll render the Child component.
                  We'll pass it this component's clicks counter (this.state.clicks)
                  as a "prop" we will also name "clicks".
                  i.e.
                  <ComponentName propName={propValue} />
                */}
                <Child clicks={this.state.clicks} />

              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Parent;
