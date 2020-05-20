import React from "react";

import Truncate from 'react-truncate';
import Footer from "../Footer";

class PopularNewsCardSection3 extends React.Component {
    calculateTime(input) {
        var date = new Date();
        var currentTimestamp = Math.floor(date.getTime() / 1000);
        var seconds = currentTimestamp - input;
        var d = Math.floor(seconds / (3600 * 24));
        var h = Math.floor((seconds % (3600 * 24)) / 3600);
        var m = Math.floor((seconds % 3600) / 60);
        // var s = Math.floor(seconds % 60);
        var dDisplay = d > 0 ? d +'d':'';
        var hDisplay = h > 0 ? h +'h':'';
        var mDisplay = m > 0 ? m +'m':'';
        if(dDisplay!==""){
            return dDisplay + hDisplay;
        }
        else if(dDisplay===""){
            return hDisplay + mDisplay;
        }
    }


    extractDomainFromUrl(url) {
        try {
            var loc = new URL(url);
            return loc.hostname.replace("www.", "");
        } catch (e) {
            return "";
        }
        // return url;
    }


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