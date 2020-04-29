import React from "react";

import "./styles.css";
import NewsCardGrid from "../NewsCardGrid";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            popularStory:"",
            isLoaded: false,
            count2: 1,
        };
    }
    // https://hacker-times.s3-us-west-1.amazonaws.com/${category}dayStories
    componentDidMount() {
        // fetch('https://cors-anywhere.herokuapp.com/https://hacker-times.s3-us-west-1.amazonaws.com/0dayStories')
        fetch('https://hacker-times.s3-us-west-1.amazonaws.com/topStories_prod')
            .then(res => res.json())
            .then(data => {
                // console.log(data.top);
                let popularStory=this.getPopularStoryWithImage(data.top);
                console.log("popular story=");
                console.log(JSON.stringify(popularStory));
                this.setState({
                    isLoaded: true,
                    items: data.top,
                    popularStory:popularStory,
                });

            });


    }
     isItPopular(newsItem) {
         var date = new Date();
         var currentTimestamp = Math.floor(date.getTime() / 1000);
         var seconds = currentTimestamp - newsItem.time;
         var timeInHours = Math.floor((seconds % (3600 * 24)) / 3600);
         let pointsSoFar=newsItem.score;

        if ((timeInHours < 12 && timeInHours > 0) &&
            pointsSoFar >= (timeInHours * 10)) {
            console.log('popular story');
            return true;
        }
        else if (timeInHours >= 12 && pointsSoFar >= 120) {
            console.log('popular story');
            return true;
        }
        return false;
    }
     getPopularStoryWithImage(items){
        for(let i=0;i<items.length;i++){
           if(this.isItPopular(items[i]) && (items[i].htImage!==undefined)) {
               return items[i];
           }
       }
    }
     getTabName(dayNumber) {
        var daysOfWeek=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        daysOfWeek.reverse();
        console.log(daysOfWeek);
        var d = new Date();
        var today = d.getDay();
        console.log('today='+today);
        let daysArray=[];
        for(let i=today;i<=6;i++){
            daysArray.push(i);
        }
        console.log('daysArray='+daysArray);
        for(let i=0;i<today;i++){
            daysArray.push(i);
        }
        console.log('daysArray='+daysArray);
        let tabList=[];
        for(let i=0;i<daysArray.length;i++){
            tabList.push(daysOfWeek[daysArray[i]]);
        }
        console.log(tabList);
        return tabList[dayNumber];
    }
  fetchNthDayStories(day){
        if(day===0){
            fetch('https://hacker-times.s3-us-west-1.amazonaws.com/topStories_prod')
                .then(res => res.json())
                .then(data => {
                    let popularStory=this.getPopularStoryWithImage(data.top);
                    this.setState({
                        isLoaded: true,
                        items: data.top,
                        popularStory:popularStory,
                    });

                });


        }else{
            fetch('https://cors-anywhere.herokuapp.com/https://hacker-times.s3-us-west-1.amazonaws.com/'+day+'dayStories_prod')
                .then(res => res.json())
                .then(data => {
                    let popularStory=this.getPopularStoryWithImage(data.top);
                    this.setState({
                        isLoaded: true,
                        items: data.top,
                        popularStory:popularStory,
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

                        <button className="tab" onClick={()=>this.fetchNthDayStories(0)}>Latest</button>
                        <button className="tab" onClick={()=>this.fetchNthDayStories(1)}>Yesterday</button>
                        <button className="tab" onClick={()=>this.fetchNthDayStories(2)}>{this.getTabName(2)}</button>
                        <button className="tab" onClick={()=>this.fetchNthDayStories(3)}>{this.getTabName(3)}</button>
                        <button className="tab" onClick={()=>this.fetchNthDayStories(4)}>{this.getTabName(4)}</button>
                        <button className="tab" onClick={()=>this.fetchNthDayStories(5)}>{this.getTabName(5)}</button>
                        <button className="tab" onClick={()=>this.fetchNthDayStories(6)}>{this.getTabName(6)}</button>
                    </div>
                   <NewsCardGrid popularStory={this.state.popularStory} items={this.state.items}/>

                </div>

            );
        }

    }
}

export default HomePage