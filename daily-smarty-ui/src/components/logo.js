import React, { Component } from "react";
import logo from "../../static/assets/ds_circle_logo.png";

export default class Logo extends Component {
    render(){
        const size = {
            height: this.props.size ? this.props.size : 105,
            width: this.props.size ? this.props.size : 105
        }
        return(
            <div className="logo-main">
                <img style={size} src='../static/assets/ds_circle_logo.png' alt="Daily Smarty Main Logo" />
            </div>
        )
    }
}