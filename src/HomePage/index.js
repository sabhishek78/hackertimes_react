import React from "react";
import "./styles.css";
import NewsCardGrid from "../NewsCardGrid";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popularStoriesWithImage: [],
            unPopularStoriesWithImage: [],
            storiesWithoutImage: [],

        };
    }

    // https://hacker-times.s3-us-west-1.amazonaws.com/${category}dayStories
    componentDidMount() {
        this.getNews();

    }

    async getNews() {
        let storiesWithoutImage = [];
        let popularStoriesWithImage = [];
        let unPopularStoriesWithImage = [];
        // fetch('https://cors-anywhere.herokuapp.com/https://hacker-times.s3-us-west-1.amazonaws.com/0dayStories')
        let response = await fetch('https://hacker-times.s3-us-west-1.amazonaws.com/topStories_prod')
        let data = await response.json();

        let storiesWithImage = this.getStoriesWithImage(data.top);
        // console.log("stories with image="+storiesWithImage);

        storiesWithoutImage = this.getStoriesWithoutImage(data.top);
        // console.log("stories without image="+storiesWithoutImage);
         console.log("no of stories without image=" + storiesWithoutImage.length);
        popularStoriesWithImage = this.getPopularStoriesWithImage(storiesWithImage);
        console.log("no of popular stories with image=" + popularStoriesWithImage.length);
        unPopularStoriesWithImage = this.getUnPopularStoriesWithImage(storiesWithImage);
        console.log("no of unpopular stories with image=" + unPopularStoriesWithImage.length);
        console.log("fetch finished");
        this.setState({
            isLoaded: true,
            popularStoriesWithImage: popularStoriesWithImage,
            unPopularStoriesWithImage: unPopularStoriesWithImage,
            storiesWithoutImage: storiesWithoutImage,
        });


        console.log("printing state variables");
        console.log("no of stories without image=" + this.state.storiesWithoutImage.length);
        console.log("no of popular stories with image=" + this.state.popularStoriesWithImage.length);
        console.log("no of unpopular stories with image=" + this.state.unPopularStoriesWithImage.length);
    }

    getPopularStoriesWithImage(items) {
        let list = [];
        for (let i = 0; i < items.length; i++) {
            if (this.isPopular(items[i])) {
                list.push(items[i]);
            }
        }
        return list;
    }

    getUnPopularStoriesWithImage(items) {
        let list = [];
        for (let i = 0; i < items.length; i++) {
            if (!this.isPopular(items[i])) {
                list.push(items[i]);
            }
        }
        return list;
    }

    hasImage(newsItem) {
        return newsItem.htImage !== undefined;
    }

    isPopular(newsItem) {
        var date = new Date();
        var currentTimestamp = Math.floor(date.getTime() / 1000);
        var seconds = currentTimestamp - newsItem.time;
        var timeInHours = Math.floor((seconds % (3600 * 24)) / 3600);
        let pointsSoFar = newsItem.score;

        if ((timeInHours < 12 && timeInHours > 0) &&
            pointsSoFar >= (timeInHours * 10)) {
            // console.log('popular story');
            return true;
        } else if (timeInHours >= 12 && pointsSoFar >= 120) {
            // console.log('popular story');
            return true;
        }
        return false;
    }
    getStoriesWithImage(items) {
        let storyList = [];
        for (let i = 0; i < items.length; i++) {
            if (this.hasImage(items[i])) {
                storyList.push(items[i]);
            }
        }
        return storyList;
    }

    getStoriesWithoutImage(items) {
        let storyList = [];
        for (let i = 0; i < items.length; i++) {
            if (!this.hasImage(items[i])) {
                storyList.push(items[i]);
            }
        }
        return storyList;
    }

    getTabName(dayNumber) {
        var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date();
        var today = d.getDay();
        // console.log('today='+today);
        let daysArray = [];
        for (let i = today; i >= 0; i--) {
            daysArray.push(i);
        }
        // console.log('daysArray='+daysArray);
        for (let i = 6; i > today; i--) {
            daysArray.push(i);
        }
        // console.log('daysArray='+daysArray);
        let tabList = [];
        for (let i = 0; i < daysArray.length; i++) {
            tabList.push(daysOfWeek[daysArray[i]]);
        }
        // console.log(tabList);
        return tabList[dayNumber];
    }

    fetchNthDayStories(day) {
        fetch(day === 0 ? 'https://hacker-times.s3-us-west-1.amazonaws.com/topStories_prod' : 'https://cors-anywhere.herokuapp.com/https://hacker-times.s3-us-west-1.amazonaws.com/' + day + 'dayStories_prod')
            .then(res => res.json())
            .then(data => {
                let storiesWithImage = this.getStoriesWithImage(data.top);
                // console.log("stories with image="+storiesWithImage);
                console.log("no of stories with image=" + storiesWithImage.length);
                let storiesWithoutImage = this.getStoriesWithoutImage(data.top);
                // console.log("stories without image="+storiesWithoutImage);
                console.log("no of stories without image=" + storiesWithoutImage.length);
                let popularStoriesWithImage = this.getPopularStoriesWithImage(storiesWithImage);
                console.log("no of popular stories with image=" + popularStoriesWithImage.length);
                let unPopularStoriesWithImage = this.getUnPopularStoriesWithImage(storiesWithImage);
                console.log("no of unpopular stories with image=" + unPopularStoriesWithImage.length);
                this.setState({
                    items: data.top,
                    popularStoriesWithImage: popularStoriesWithImage,
                    unPopularStoriesWithImage: unPopularStoriesWithImage,
                    storiesWithoutImage: storiesWithoutImage,
                });
            });
        console.log("printing state variables");
        console.log("no of stories without image=" + this.state.storiesWithoutImage.length);
        console.log("no of popular stories with image=" + this.state.popularStoriesWithImage.length);
        console.log("no of unpopular stories with image=" + this.state.unPopularStoriesWithImage.length);
    }

    render() {
        return (
                <div className="main-column">
                    <div className="Title">
                        <h1 className="title">The McLaren Times </h1>
                    </div>
                    <div className="Tabs">
                        <button className="tab" onClick={() => this.fetchNthDayStories(0)}>{this.getTabName(0)}</button>
                        <button className="tab" onClick={() => this.fetchNthDayStories(1)}>{this.getTabName(1)}</button>
                        <button className="tab" onClick={() => this.fetchNthDayStories(2)}>{this.getTabName(2)}</button>
                        <button className="tab" onClick={() => this.fetchNthDayStories(3)}>{this.getTabName(3)}</button>
                        <button className="tab" onClick={() => this.fetchNthDayStories(4)}>{this.getTabName(4)}</button>
                        <button className="tab" onClick={() => this.fetchNthDayStories(5)}>{this.getTabName(5)}</button>
                        <button className="tab" onClick={() => this.fetchNthDayStories(6)}>{this.getTabName(6)}</button>
                    </div>
                    <NewsCardGrid popularStoriesWithImage={this.state.popularStoriesWithImage}
                                  unPopularStoriesWithImage={this.state.unPopularStoriesWithImage}
                                  storiesWithoutImage={this.state.storiesWithoutImage}/>

                </div>

            );
        }


}

export default HomePage