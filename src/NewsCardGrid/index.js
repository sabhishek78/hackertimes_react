import React from "react";
import Section1 from "../Section1";
import Section2 from "../Section2";
import Section3 from "../Section3";
import Section4 from "../Section4";
class NewsCardGrid extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         resultArray: this.props.resultArray,
    //         index: 0,
    //     };
    //     console.log("resultArray");
    //     // console.log(this.state.resultArray);
    // }

    render() {
        console.log("rendering newsgrid");
        console.log(this.props.stories.length);
        let index = 0;

        let newsGrid=[];
        while(index<this.props.stories.length) {
            let currentStoryBlock = this.props.stories[index];
            if (currentStoryBlock.length === 5) {
                console.log("pushing section1");
                newsGrid.push( <Section1 stories={this.props.stories[index]}/>);
            } else if (currentStoryBlock.length === 8) {
                console.log("pushing section2");
                newsGrid.push(<Section2 stories={this.props.stories[index]}/>);
            } else if (currentStoryBlock.length === 2) {
                console.log("pushing section3");
                newsGrid.push(<Section3 stories={this.props.stories[index]}/>);
            } else  {
                console.log("pushing section4");
                newsGrid.push(<Section4 stories={this.props.stories[index]}/>);
            }
            index=index+1;
        }
        return (
            <div>
                {/*{newsGrid.map((item) => item)}*/}
                {newsGrid}
            </div>
        );
    }
}
export default NewsCardGrid;