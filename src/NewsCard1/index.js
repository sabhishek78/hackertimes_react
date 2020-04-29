import React from "react";
import "./styles1.css";
import Truncate from 'react-truncate';

class NewsCard extends React.Component {
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
            <div className="newsCard1" >
                {this.props.newsItem.htImage!==undefined && <img src={this.props.newsItem.htImage} alt=""/>}
                <h2>{this.props.newsItem.title}</h2>
                <div>
                    <Truncate lines={5} ellipsis={<span>... <a href={this.props.newsItem.url}>Read more</a></span>}>
                        {this.props.newsItem.htDescription}
                    </Truncate>

                </div>
                <div className="footer">
                    <div className="footerRow">
                        <a className="alignTextLeft" href={this.props.newsItem.url}>{this.extractDomainFromUrl(this.props.newsItem.url)}</a>
                        <div>
                            {this.calculateTime(this.props.newsItem.time)} ago
                        </div>
                    </div>
                    <div className="footerRow">
                        <div className="comments">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path
                                    d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                                <path d="M0 0h24v24H0z" fill="none"/>
                            </svg>
                            <div>{this.props.newsItem.comments === undefined ? 0 : this.props.newsItem.comments} comments</div>
                        </div>
                        <div>
                            {this.props.newsItem.score} points
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsCard;