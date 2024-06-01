import './App.css';

import Navbar from './containers/Navbar';
import theme from './theme/theme';
import {compose,pipe} from 'lodash/fp';

import {Map} from  'immutable';
import {produce} from 'immer';
import { ThemeProvider } from '@emotion/react';
import Item from './containers/Item';
import { Grid, Toolbar } from '@mui/material';
import Products from './containers/Products';
import Cart from './containers/Cart';

function App() {

let input ="                   Hello World   ";
const trim= str => str.trim();
const toLowerCase= str=>str.toLowerCase();

const transform = pipe(trim,toLowerCase);
// console.log('transform', transform(input))
// console.log('transform', toLowerCase(trim(input)))

const person={name:"Dasuni"}
//first ceate a empty object and then assign the person object to it and then write which are to ovrride
const updated= Object.assign({},person,{name:"Danushi",age:25});
// better way to do the same thing in the line before.
const betterUpdated = {...person, name:"dhanushi"};
console.log('betterUpdated', betterUpdated)
console.log('person', person)
console.log('updated', updated)
const numbers = [1,2,3,4];


// updating arrays

// adding
const addedFront=[5,...numbers]; //add in to front of an array [5,1,2,3,4]
const addedEnd=[...numbers,5]; //add in to end of an array [1,2,3,4,5]
//add to specific index [1,5,2,3,4]
const index = numbers.indexOf(2); 
const specificAdd =[...numbers.slice(0,index),5,...numbers.slice(index)];

//removing
const removed= numbers.filter(n => n !== 2); //[1,3,4]

//updating

const updatedArray = numbers.map(n=> (n===2? 20: n))
//******************************************************** */
//normal way
let book ={ title:"Harry Potter"};

function publish(book){
  book.isPublished=true;
}

publish(book);
console.log(book);

//instead of using normal way
let bookImmutable= Map({ title:"Harry potter"});
console.log('bookImmutable', bookImmutable)
console.log( bookImmutable.get("title"))
console.log( bookImmutable.toJS())  //will return plain javascript object

function publishBookImmutable(book){
  return book.set("isPublished", true);
}

bookImmutable=publishBookImmutable(bookImmutable);
console.log( bookImmutable.toJS())  //will return plain javascript object


let bookImmer ={ title:"Harry Potter deathly hallow"};

function publishBookImmer(bookImmer){
  produce(bookImmer,draftBook =>{
    draftBook.ispublished=true;
  })
}

let updatedImmerBook= publishBookImmer(bookImmer);
console.log(bookImmer);
console.log(updatedImmerBook);







  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar/>
        <Toolbar/>

        <Grid container>
        <Products/>

        </Grid>
        <Grid>
          <Cart/>
        </Grid>


      </div>
    </ThemeProvider>
  );
}

export default App;
