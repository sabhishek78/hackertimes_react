import React from "react";

import Section1 from "../Section1";
import Section2 from "../Section2";
import Section3 from "../Section3";
import Section4 from "../Section4";

class NewsCardGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultArray: this.newsCardGenerator(this.props.popularStoriesWithImage,this.props.unPopularStoriesWithImage,this.props.storiesWithoutImage),
             index:0,
        };
        console.log("resultArray");
        console.log(this.state.resultArray);
    }
     newsCardGenerator(pArray, uArray, wArray) {
        console.log("inside newsCardGenerator");
        console.log("length of pArray="+pArray.length);
         console.log("length of uArray="+uArray.length);
         console.log("length of wArray="+wArray.length);
        var resultArray = [];
        while (pArray.length !== 0 || uArray.length !== 0 || wArray.length !== 0) {
            resultArray.push(pArray.length > 1
                ? this.getSection1(pArray, wArray, uArray)
                : this.getSection2(pArray, wArray, uArray)) ;
            resultArray.push(this.getSection2(pArray, wArray, uArray));


            resultArray.push(pArray.length >= 2
                ? this.getSection3(pArray, wArray, uArray)
                : this.getSection2(pArray, wArray, uArray));

            resultArray.push(this.getSection2(pArray, wArray, uArray));
        }
        let finalArray=[];
        for(let i=0;i<resultArray.length;i++){
            if(resultArray[i]!==''){
                finalArray.push(resultArray[i]);
            }
        }
        return finalArray;
    }
    getSection1(pArray, wArray, uArray) {
        var temp = []; //get primary card
        temp.push(pArray.shift());

        for (let i = 1; i <= 2; i++) {
            temp.push(this.getBlock(pArray, wArray, uArray));
        }
        return temp.join('');
    }
    getSection3(pArray, wArray, uArray) {
        // console.log("creating section3");
        let temp=[];
        for (let i = 1; i <= 2; i++) {
            // console.log("inside for loop of creating section3");
            // console.log("no of p stories=" + pArray.length);
            temp.push(this.getBlock(pArray, wArray, uArray));
        }
        return temp.join('');
    }
    getSection2(pArray, wArray, uArray) {
        let temp=[];
        for (let i = 1; i <= 4; i++) {
            temp.push(this.getBlock(pArray, wArray, uArray));
        }
        return temp.join('');
    }
     getBlock(pArray, wArray, uArray) {
        // console.log("creating block");
        let temp=[];
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

        return temp.join('');
    }
    render() {
        let currentStoryBlock=this.state.resultArray[this.state.index];
        let newsGrid=[];
        let index=0;
        while(index<this.state.resultArray.length) {
            if (currentStoryBlock.length === 5) {
                newsGrid.push( <Section1 stories={this.state.resultArray[index]}/>);
            } else if (currentStoryBlock.length === 8) {
                newsGrid.push(<Section2 stories={this.state.resultArray[index]}/>);
            } else if (currentStoryBlock.length === 2) {
                newsGrid.push(<Section3 stories={this.state.resultArray[index]}/>);
            } else  {
                newsGrid.push(<Section4 stories={this.state.resultArray[index]}/>);
            }
            index=index+1;

        }
        return (
            <div>
                {newsGrid}
            </div>
        );

}
}

export default NewsCardGrid;