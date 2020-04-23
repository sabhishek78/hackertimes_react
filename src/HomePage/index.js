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
    // https://hacker-times.s3-us-west-1.amazonaws.com/${category}dayStories
    componentDidMount() {
        // fetch('https://cors-anywhere.herokuapp.com/https://hacker-times.s3-us-west-1.amazonaws.com/0dayStories')
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
     getTabName(dayNumber) {
        var daysOfWeek=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
        daysOfWeek.reverse();
        var today = new Date().getDay();
        let daysArray=[];
        for(let i=today;i<=7;i++){
            daysArray.push(i);
        }
        for(let i=1;i<today;i++){
            daysArray.push(i);
        }

        let tabList=[];
        for(let i=0;i<daysArray.length;i++){
            tabList.push(daysOfWeek[daysArray[i]-1]);
        }
        return tabList[dayNumber];
    }
  fetchNthDayStories(day){
        if(day==0){
            fetch('https://hacker-times.s3-us-west-1.amazonaws.com/topStories')
                .then(res => res.json())
                .then(data => {
                    console.log(data.top);
                    this.setState({
                        isLoaded: true,
                        items: data.top,
                    });

                });
        }else{
            fetch('https://cors-anywhere.herokuapp.com/https://hacker-times.s3-us-west-1.amazonaws.com/'+day+'dayStories')
                .then(res => res.json())
                .then(data => {
                    console.log(data.top);
                    this.setState({
                        isLoaded: true,
                        items: data.top,
                    });

                });
        }

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

                        <button className="tab" onClick={()=>this.fetchNthDayStories(0)}>Today</button>
                        <button className="tab" onClick={()=>this.fetchNthDayStories(1)}>Yesterday</button>
                        <button className="tab" onClick={()=>this.fetchNthDayStories(2)}>{this.getTabName(2)}</button>
                        <button className="tab" onClick={()=>this.fetchNthDayStories(3)}>{this.getTabName(3)}</button>
                        <button className="tab" onClick={()=>this.fetchNthDayStories(4)}>{this.getTabName(4)}</button>
                        <button className="tab" onClick={()=>this.fetchNthDayStories(5)}>{this.getTabName(5)}</button>
                        <button className="tab" onClick={()=>this.fetchNthDayStories(6)}>{this.getTabName(6)}</button>
                    </div>
                   <NewsCardGrid items={this.state.items}/>

                </div>

            );
        }

    }
}

export default HomePage