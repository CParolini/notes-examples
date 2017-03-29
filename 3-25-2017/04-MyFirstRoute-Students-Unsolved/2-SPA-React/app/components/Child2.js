// Include React
var React = require("react");

var Child2 = React.createClass({

    // Here we render the component
    render: function() {

        return (

            <div class="col-lg-12">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title">Child #1</h3>
                    </div>
                    <div class="panel-body">

                        <p>
                            <a class="btn btn-warning btn-sm">Show Grandchild #1</a>
                            <a class="btn btn-success btn-sm">Show Grandchild #2</a>
                        </p>

                        <div class="panel panel-warning">
                            <div class="panel-heading">
                                <h3 class="panel-title">Grandchild #1</h3>
                            </div>
                            <div class="panel-body">
                                Panel content
                            </div>
                        </div>

                        <div class="panel panel-success">
                            <div class="panel-heading">
                                <h3 class="panel-title">Grandchild #2</h3>
                            </div>
                            <div class="panel-body">
                                Panel content
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Child2;
