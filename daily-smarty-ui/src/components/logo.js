import React, { Component } from "react";
import logo from "../../static/assets/ds_circle_logo.png";
import { Link } from 'react-router-dom';
import { fetchRecentPosts } from "../actions";

export default class Logo extends Component {
    render(){
        const size = {
            height: this.props.size ? this.props.size : 105,
            width: this.props.size ? this.props.size : 105
        }
        return(
            <div className="logo-main">
                <Link to="/">
                    <img style={size} src='../static/assets/ds_circle_logo.png' alt="Daily Smarty Main Logo" />
                </Link>
            </div>
        )
    }
}