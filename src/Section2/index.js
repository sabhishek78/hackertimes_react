import React from "react";
// import "./styles1.css";
import PopularNewsCard from "../PopularNewsCard";
import NewsCard2 from "../NewsCard2";


class Section2 extends React.Component {
    render() {
        return (
            <div className="section2">
                <div id="section2Col">
                    <div id="section2story1">
                        {this.props.stories[0]!==undefined&&<PopularNewsCard newsItem={this.props.stories[0]}/>}
                    </div>
                   <div id="section2story2">
                       {this.props.stories[1]!==undefined&&<NewsCard2 newsItem={this.props.stories[1]}/>}
                   </div>

                </div>
                <div id="section2Col">
                    <div id="section2story1">
                        {this.props.stories[2]!==undefined&&<PopularNewsCard newsItem={this.props.stories[2]}/>}
                    </div>
                    <div id="section2story2">
                        {this.props.stories[3]!==undefined&&<NewsCard2 newsItem={this.props.stories[3]}/>}
                    </div>
                </div>
                <div id="section2Col">
                    <div id="section2story1">
                        {this.props.stories[4]!==undefined&&<PopularNewsCard newsItem={this.props.stories[4]}/>}
                    </div>
                    <div id="section2story2">
                        {this.props.stories[5]!==undefined&&<NewsCard2 newsItem={this.props.stories[5]}/>}
                    </div>
                </div>
                <div id="section2Col">
                    <div id="section2story1">
                        {this.props.stories[6]!==undefined&&<PopularNewsCard newsItem={this.props.stories[6]}/>}
                    </div>
                    <div id="section2story2">
                        {this.props.stories[7]!==undefined&&<NewsCard2 newsItem={this.props.stories[7]}/>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Section2;