import React from "react";

import "./styles.css";
import NewsCardGrid from "../NewsCardGrid";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            count2: 1,
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
        } else {
            return (
                <div className="main-column">
                    <div className="Title">
                        <h1 className="title">The McLaren Times </h1>
                    </div>
                    <div className="Tabs">
                        <a className="tab">Latest</a>
                        <a className="tab">Yesterday</a>
                        <a className="tab">Sunday</a>
                        <a className="tab">Monday</a>
                        <a className="tab">Tuesday</a>
                        <a className="tab">Wednesday</a>
                        <a className="tab">Thursday</a>
                    </div>
                   <NewsCardGrid items={this.state.items}/>

                </div>

            );
        }

    }
}

export default HomePage