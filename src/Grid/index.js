import React from "react";
import NewsCard from "../NewsCard";
import "./styles.css";

class Grid extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch('https://hacker-times.s3-us-west-1.amazonaws.com/topStories')
            .then(res => res.json())
            .then(data => {
                console.log(data.top);
                this.setState({
                    isLoaded: true,
                    items: data.top,
                });

            });
    }
    render() {

        if (!this.state.isLoaded) {
            return <div>Loading ... </div>;
        }else{
            return(
                <div className="grid">
                    {this.state.items.map((newsItem,index)=>{
                        return <NewsCard title={newsItem.title} url={newsItem.htImage}
                                       description={newsItem.htDescription} time={newsItem.time}/>
                    })}
                </div>
            );
        }

    }
}
export default Grid