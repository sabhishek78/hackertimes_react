import React from "react";
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
                        {this.props.newsItem.htDescription}
                    </div>
                    <Footer newsItem={this.props.newsItem}/>
                </div>
            </div>
        );
    }
}

export default PopularNewsCardSection3;