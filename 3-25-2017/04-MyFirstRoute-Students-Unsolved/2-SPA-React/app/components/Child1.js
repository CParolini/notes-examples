// Include React
var React = require("react");

var Child1 = React.createClass({

    // Here we render the component
    render: function() {

        return (

            <div class="col-lg-12">
                <div class="panel panel-danger">
                    <div class="panel-heading">
                        <h3 class="panel-title">Child #2</h3>
                    </div>
                    <div class="panel-body">
                        Panel content
                    </div>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Child1;
