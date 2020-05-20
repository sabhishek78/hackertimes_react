import React from "react";

import Truncate from 'react-truncate';
import Footer from "../Footer";

class PopularNewsCardSection3 extends React.Component {
    render() {
        return (
            <div className="popularNewsCardSection3" >
                <div className="section3Image">
                    {this.props.newsItem.htImage!==undefined && <a href={this.props.newsItem.url} target="_blank"><img className="image" src={this.props.newsItem.htImage} alt=""/></a>}
                </div>
                <div className="section3Text">
                    <a href={this.props.newsItem.url} style={{textDecoration: 'none'}} target="_blank"><h2
                        className="underline-on-hover">{this.props.newsItem.title}</h2></a>
                    <div>
                        <Truncate lines={5} ellipsis={<span>... <a href={this.props.newsItem.url}>Read more</a></span>}>
                            {this.props.newsItem.htDescription}
                        </Truncate>

                    </div>
                    <Footer newsItem={this.props.newsItem}/>
                </div>
            </div>
        );
    }
}

export default PopularNewsCardSection3;