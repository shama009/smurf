import React, { Component } from "react";

class ResultItem extends Component {

    render() {
        return (
            <div className="col-md-3 col-sm-6">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {this.props.User}
                    </div>
                </div>
            </div>
        );
    }
}

export default ResultItem;
