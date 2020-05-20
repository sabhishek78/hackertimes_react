import React from "react";
import "./styles.css";
import NewsCardGrid from "../NewsCardGrid";
import mclarenLogo from "../mclaren.png";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stories:[],
            storiesLoaded:false,

        };
    }

    componentDidMount() {
         this.fetchTopStories();
    }

    async fetchTopStories() {
        let storiesWithoutImage = [];
        let popularStoriesWithImage = [];
        let unPopularStoriesWithImage = [];

        let response = await fetch('https://hacker-times.s3-us-west-1.amazonaws.com/topStories_prod');
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
        let resultArray=this.newsCardGenerator(popularStoriesWithImage,unPopularStoriesWithImage,storiesWithoutImage);
        console.log("result Array of stories after sorting...");
        console.log(resultArray);
        console.log("No of stories="+resultArray.length);
        this.setState({
            stories:resultArray,
            storiesLoaded:true,
        });
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
    getTabName() {
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
        return tabList;
    }
    async fetchNthDayStories(day, e) {
        e.preventDefault();
        let storiesWithoutImage = [];
        let popularStoriesWithImage = [];
        let unPopularStoriesWithImage = [];

        let response = await fetch(day === 0 ? 'https://hacker-times.s3-us-west-1.amazonaws.com/topStories_prod' : 'https://cors-anywhere.herokuapp.com/https://hacker-times.s3-us-west-1.amazonaws.com/' + day + 'dayStories_prod');
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
        let resultArray=this.newsCardGenerator(popularStoriesWithImage,unPopularStoriesWithImage,storiesWithoutImage);
        console.log("result Array of stories after sorting...");
        console.log(resultArray);
        console.log("No of stories="+resultArray.length);
        this.setState({
            stories:resultArray,
            storiesLoaded:true,
        });
    }
    newsCardGenerator(pArray, uArray, wArray) {
        console.log("inside newsCardGenerator");
        // console.log("length of pArray=" + pArray.length);
        // console.log("length of uArray=" + uArray.length);
        // console.log("length of wArray=" + wArray.length);
        var resultArray = [];
        while (pArray.length !== 0 || uArray.length !== 0 || wArray.length !== 0) {
            resultArray.push(pArray.length > 1
                ? this.getSection1(pArray, wArray, uArray)
                : this.getSection2(pArray, wArray, uArray));
            resultArray.push(this.getSection2(pArray, wArray, uArray));
            resultArray.push(pArray.length >= 2
                ? this.getSection3(pArray, wArray, uArray)
                : this.getSection2(pArray, wArray, uArray));
            resultArray.push(this.getSection2(pArray, wArray, uArray));
        }
        console.log('resultArray.length='+resultArray.length);
        let finalArray = [];
        for (let i = 0; i < resultArray.length; i++) {
            if (resultArray[i] !== '') {
                finalArray.push(resultArray[i]);
            }
        }
       console.log("final array=");
        console.log(finalArray);
        return finalArray;
    }
    getSection1(pArray, wArray, uArray) {
        var temp = []; //get primary card
        temp.push(pArray.shift());
        for (let i = 1; i <= 2; i++) {
          var block=  this.getBlock(pArray, wArray, uArray);
          temp.push(block[0]);
          temp.push(block[1]);
        }

        return temp;
    }
    getSection3(pArray, wArray, uArray) {

        let temp = [];
        temp.push(pArray.shift());
        temp.push(pArray.shift());

        return temp;
    }
    getSection2(pArray, wArray, uArray) {
        let temp = [];
        for (let i = 1; i <= 4; i++) {
            var block=  this.getBlock(pArray, wArray, uArray);
            temp.push(block[0]);
            temp.push(block[1]);

        }
        return temp;
    }
    getBlock(pArray, wArray, uArray) {
        // console.log("creating block");
        let temp = [];
        if (pArray.length !== 0 && wArray.length !== 0) {
            //make type1 card
            // let temp = [];
            temp.push(pArray.shift());
            temp.push(wArray.shift());
            // console.log("type1 card made");
        } else if (uArray.length >= 2) {
            //or make type2 card
            // let temp = [];
            temp.push(uArray.shift());
            temp.push(uArray.shift());
            // console.log("type2 card made");
        } else if (wArray.length >= 2) {
            // or make type3 card
            // let temp = [];
            temp.push(wArray.shift());
            temp.push(wArray.shift());
            // console.log("type3 card made");
        } else {
            // let temp = [];
            if (pArray.length !== 0) {
                temp.push(pArray.shift());
            }
            if (uArray.length !== 0) {
                temp.push(uArray.shift());
            }
            if (wArray.length !== 0) {
                temp.push(wArray.shift());
            }
            // console.log("last card made");
        }
        return temp;
    }
    render() {
        const tabNames = this.getTabName();
        return (
            <div className="main-column">
                <div className="titleRow" >


                        <h1><img className="titleImage" src={mclarenLogo} alt="Logo" />The McLaren Times </h1>


                </div>
                <div className="TabRow">
                    <Tabs
                        value={this.state.value} onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab  onClick={(e) => this.fetchTopStories()} label="LATEST" />
                        <Tab onClick={(e) => this.fetchNthDayStories(1, e)} label="YESTERDAY" />
                        <Tab  onClick={(e) => this.fetchNthDayStories(2, e)} label={tabNames[2]} />
                        <Tab onClick={(e) => this.fetchNthDayStories(3, e)} label={tabNames[3]} />
                        <Tab onClick={(e) => this.fetchNthDayStories(4, e)} label={tabNames[4]} />
                        <Tab onClick={(e) => this.fetchNthDayStories(5, e)} label={tabNames[5]} />
                        <Tab onClick={(e) => this.fetchNthDayStories(6, e)} label={tabNames[6]} />
                    </Tabs>

                </div>
                {this.state.storiesLoaded?<NewsCardGrid stories={this.state.stories}/>:''}

            </div>
        );
    }
}
export default HomePage