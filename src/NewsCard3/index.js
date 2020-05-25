import React from "react";
import Footer from "../Footer";

class NewsCard3 extends React.Component {

    render() {
        if(this.props.newsItem!==undefined){
            return (
                <div className="newsCard3" >
                    {/*{this.props.newsItem.htImage!==undefined && <img className="newsCard3Image" src={this.props.newsItem.htImage} alt="" />}*/}
                    {this.props.newsItem.htImage!==undefined && <a href={this.props.newsItem.url} target="_blank"><img className="newsCard3Image" src={this.props.newsItem.htImage} alt=""/></a>}
                    <div className="newsCard3TextSection">
                        <a href={this.props.newsItem.url} target="_blank"><h3 class="underline-on-hover"> {this.props.newsItem.title}</h3></a>
                        {this.props.newsItem.htDescription}
                        <Footer newsItem={this.props.newsItem}/>
                    </div>
                </div>
            );
        }

    }
}

export default NewsCard3;