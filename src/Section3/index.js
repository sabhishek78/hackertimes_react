import React from "react";
// import "./styles1.css";

import PopularNewsCardSection3 from "../PopularNewsCardSection3";


class Section3 extends React.Component {
    render() {
        return (
            <div className="section3">
                <div className="section3Col1">
                    {this.props.stories[0]!==undefined&&<PopularNewsCardSection3  newsItem={this.props.stories[0]}/>}
                </div>
                <div className="section3Col2">
                    {this.props.stories[1]!==undefined&&<PopularNewsCardSection3  newsItem={this.props.stories[1]}/>}
                </div>

            </div>
        );
    }
}

export default Section3;