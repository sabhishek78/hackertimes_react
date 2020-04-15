import React from "react";
import "./styles.css";

class NewsCard extends React.Component {
    render() {
        return (
            <div class="news-card">
                <div class="image">
                    <img src={this.props.url}/>
                </div>
               <div class="container">
                   <h1>{this.props.title}</h1>
                   <hr/>
                   <p className="description">{this.props.description}
                   </p>
               </div>
            </div>

        );
    }
}

export default NewsCard;