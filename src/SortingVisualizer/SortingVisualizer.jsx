import React ,{useState,useEffect} from 'react';
import {getMergeSortAnimations,getBubbleSortAnimations,getInsertionSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';
import ReactDOM from 'react-dom';
import App from '../App.js';

//ANIMATION_SPEED_MS = val;
// Change this value for the speed of the animations.
var ANIMATION_SPEED_MS = 10;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 30;

// This is the main color of the array bars.
const PRIMARY_COLOR = '#4AF1F2';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      sarray: 500,
      userip:false,
      
    };

    this.handleSpeedChange = this.handleSpeedChange.bind(this);

  }

  componentDidMount() {
    this.resetArray();
  }
 
  resetArray() {
    const array = [];
    this.setState({userip:false});
    if(!this.state.userip){
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 500));
    }
    this.setState({array});

  }
    //document.write(array);
  }

  mergeSort() {
    var speed= document.getElementById('speed');
    speed.innerHTML="MERGE SORT    " ;
    document.getElementById('complexity').innerHTML="Time Complexity :  O(n*logn)"  ;   

    var check = getMergeSortAnimations(this.state.array);
    const animations= check[0];
    const farray = check[1];
    console.log("farray",farray);
    console.log("merge",animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
    
      console.log(arrayBars.height);
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;

        //
      


        //
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          //const va1 = val[barOneIdx].style;
          const barOneStyle = arrayBars[barOneIdx].style;
          const bar1 = arrayBars[barOneIdx];
          barOneStyle.height = `${newHeight}px`;
          bar1.innerHTML=`${newHeight}`;
        }, i * ANIMATION_SPEED_MS);
      }
    }

    
   
  }


 insertionSort() {
  var speed= document.getElementById('speed');
  var speed= document.getElementById('speed');
  speed.innerHTML="Insertion Sort    " ;
  document.getElementById('complexity').innerHTML="Time Complexity :  O(n"+"<sup>2</sup>"+")"  ;  
  


    const animations = getInsertionSortAnimations(this.state.array);
    console.log(animations);

    console.log(animations[1][0]);
    for (let i = 0; i < animations.length; i++) {

      const arrayBars = document.getElementsByClassName('array-bar');
      
      if(animations[i].length==2){
        setTimeout(() => {
          const check_i=i;
          const [barOneIdx, newHeight] = animations[i];
          //const va1 = val[barOneIdx].style;
          const barOneStyle = arrayBars[barOneIdx].style;
          const bar1 = arrayBars[barOneIdx];
          barOneStyle.backgroundColor = 'blue';
          barOneStyle.height = `${newHeight}px`;
          bar1.innerHTML=`${newHeight}`;
          speed.innerHTML= "Element Selected : "+ animations[i][1];

        }, i *ANIMATION_SPEED_MS );
        for(var k=animations[i][0];k>=0;k--){
          arrayBars[k].style.backgroundColor = " rgb(49, 226, 13)";
       }

      }

      else{
        
           
     const [barOneIdx,baroneheight, barTwoIdx,bartwoheight] = animations[i];
     const barOneStyle = arrayBars[barOneIdx].style;
     const barTwoStyle = arrayBars[barTwoIdx].style;
     const barOne = arrayBars[barOneIdx];
     const barTwo = arrayBars[barTwoIdx];
     const color = "green"; 
     //i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

     setTimeout(() => {
       barOneStyle.backgroundColor = "yellow";
       barOneStyle.height=`${bartwoheight}px`
       barOne.innerHTML=`${bartwoheight}`;
       barTwoStyle.backgroundColor = "blue";
       barTwoStyle.height=`${baroneheight}px`;
       barTwo.innerHTML=`${baroneheight}`;


     }, i* ANIMATION_SPEED_MS);
      

     
      }




    }
    speed.innerHTML="Insertion Sort    " ;


    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  heapSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  bubbleSort() {
    var speed= document.getElementById('speed');
  speed.innerHTML="Bubble Sort    " ;
    document.getElementById('complexity').innerHTML="Time Complexity :  O(n"+"<sup>2</sup>"+")"  ;  
    const animations = getBubbleSortAnimations(this.state.array);
    
    //console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');

    const isColorChange = i%4 < 2;
    //console.log(isColorChange);
    if(isColorChange){
      
     const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
     
    }
    else{

      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const bar1 = arrayBars[barOneIdx];

        barOneStyle.height = `${newHeight}px`;
        bar1.innerHTML=`${newHeight}`;

      }, i * ANIMATION_SPEED_MS);

      
    }
  }
    // We leave it as an exercise to the viewer of this code to implement this method.
  }



// inseertion sort











 
  handleSpeedChange(event){
    this.setState(()=>({sarray: 500-event.target.value}));
    ANIMATION_SPEED_MS=500-event.target.value;
    console.log(ANIMATION_SPEED_MS);
    }
  // NOTE: This method will only work if your sorting algorithms actually return
  // the sorted arrays; if they return the animations (as they currently do), then
  // this method will be broken.
  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 500);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-500, 500));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      const BubbleSortedArray = getBubbleSortAnimations(array.slice());

      console.log(arraysAreEqual(javaScriptSortedArray, BubbleSortedArray));
    }
  }
  

  render() {
   

  const {array} = this.state;
 
    return (
      <body>
                
                

                <div class="header">
      <h1 class="logo"  >Sorting Visualizer</h1>

  <div class="header-right">
    <button onClick={() => this.bubbleSort()} class="active" >Bubble Sort</button>
    <button onClick={() => this.mergeSort()} class="active"> Merge Sort</button>
    <button onClick={() => this.insertionSort()}>Insertion Sort</button>
    <button onClick={() => this.resetArray()} style={{float:"left"}}>Generate New Array</button>

  </div>
</div>




<div id="complexity" style={{float:"right"}} className="speed"></div>
<div id="speed" className="speed"> </div>

      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            id = {value}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
              margin: `1px`,
              width:`40px`,
              
            }}>{value}</div>
        ))}
        {/* <div className="but">
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.insertionSort()}>Insertion Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
         

        </div> */}
      </div>
     
      </body>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript       <div id="yoiw" style={{color:"gold", margin:"10px"}}>Animation Speed:  <input type="range" value={null} min="1" max="500" onChange={this.handleSpeedChange} /> </div>

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}