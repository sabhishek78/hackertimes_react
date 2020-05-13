import React from "react";
// import "./styles1.css";

import PopularNewsCardSection3 from "../PopularNewsCardSection3";


class Section3 extends React.Component {
    render() {
        return (
            <div className="section3">
                {this.props.stories[0]!==undefined&&<PopularNewsCardSection3 className="section3Story" newsItem={this.props.stories[0]}/>}
                {this.props.stories[1]!==undefined&&<PopularNewsCardSection3 className="section3Story" newsItem={this.props.stories[1]}/>}
            </div>
        );
    }
}

export default Section3;