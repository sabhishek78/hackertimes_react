import React from "react";

import Truncate from 'react-truncate';
import Footer from "../Footer";
class NewsCard2 extends React.Component {

    render() {
        return (
            <div className="newsCard2" >
                <a href={this.props.newsItem.url} target="_blank"><h3 class="underline-on-hover"> {this.props.newsItem.title}</h3></a>
                <div>
                    {this.props.newsItem.htImage!==undefined && <a href={this.props.newsItem.url} target="_blank"><img className="floatImageRight" src={this.props.newsItem.htImage} alt=""/></a>}
                    <Truncate lines={3} ellipsis={<span>... <a href={this.props.newsItem.url}>Read more</a></span>}>
                        {this.props.newsItem.htDescription}
                    </Truncate>
                </div>
                <Footer newsItem={this.props.newsItem}/>
            </div>


        );
    }
}

export default NewsCard2;