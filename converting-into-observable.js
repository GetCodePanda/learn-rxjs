/**
*Converting to observable...
*
*/

var Rx = require('rxjs/Rx');

// converting one or more into observable  
const convertingObservable = Rx.Observable.of('foo','bar');
convertingObservable.subscribe(v=> console.log(v));

// converting array into observable  
const convertingObservableFromArray = Rx.Observable.from([1,2,3]);
console.log(convertingObservableFromArray);
convertingObservableFromArray.subscribe(v=>console.log(v));

// converting event into observable  
const selector = document.querySelector('button');
const convertingObservableFromEvent = Rx.Observable.fromEvent(selector , 'click');
convertingObservableFromEvent.subscribe((e) => console.log(e))

// converting promise into observable

const convertingObservableFromPromise = Rx.Observable.fromPromise(fetch('https://jsonplaceholder.typicode.com/posts'));

convertingObservableFromPromise.subscribe(
    v=>console.log(v),
    e=>console.log(e),
    c=>console.log('completed')
);

// converting callback into observable ..
const fs = require("fs");
const isFileExist = Rx.Observable.bindCallback(fs.exists);

isFileExist('./index.html').subscribe((e) => console.log('Does file exist?' , e));