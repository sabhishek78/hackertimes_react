import React from "react";
import Footer from "../Footer";
class PopularNewsCard extends React.Component {
    render() {
        return (
            <div className="popularNewsCard" >
                {this.props.newsItem.htImage!==undefined && <a href={this.props.newsItem.url} target="_blank"><img className="image" src={this.props.newsItem.htImage} alt=""/></a>}
                <a href={this.props.newsItem.url} style={{textDecoration: 'none'}} target="_blank"><h2 class="underline-on-hover">{this.props.newsItem.title}</h2></a>
                <div>
                    {this.props.newsItem.htDescription}
                </div>
                <Footer newsItem={this.props.newsItem}/>
            </div>
        );
    }
}

export default PopularNewsCard;