// interval :
// //emit value in sequence every 1 second
// const source = Rx.Observable.interval(3000);
// //output: 0,1,2,3,4,5....
// const subscribe = source.subscribe(val => console.log(val));

// take:
//emit 1,2,3,4,5
// const source = Rx.Observable.of(4,2,3,1,5);
// //take the first emitted value then complete
// const example = source.take(1);
// //output: 1
// const subscribe = example.subscribe(val => console.log(val));

//emit every 1s, take 2
// const source = Rx.Observable.interval(1000).take(2);

// source.subscribe((v) => console.log(v));

//map each emitted value from source to interval observable that takes 5 values
// const example = source.map(val => Rx.Observable.interval(1000).map(i => `Result (${val}): ${i}`).take(5));
// /*
//   2 values from source will map to 2 (inner) interval observables that emit every 1s
//   combineAll uses combineLatest strategy, emitting the last value from each
//   whenever either observable emits a value
// */
// const combined = example.combineAll();
/*
  output:
  ["Result (0): 0", "Result (1): 0"]
  ["Result (0): 1", "Result (1): 0"]
  ["Result (0): 1", "Result (1): 1"]
  ["Result (0): 2", "Result (1): 1"]
  ["Result (0): 2", "Result (1): 2"]
  ["Result (0): 3", "Result (1): 2"]
  ["Result (0): 3", "Result (1): 3"]
  ["Result (0): 4", "Result (1): 3"]
  ["Result (0): 4", "Result (1): 4"]
*/
// const subscribe = combined.subscribe(val => console.log(val));


// //emit a value every 2 seconds
// const source = Rx.Observable.interval(2000);
// const example = source
//   //for demonstration, add 10 to and return as observable
//   .map(val => Rx.Observable.of(val + 10))
//   //merge values from inner observable
//   .concatAll();
// //output: 'Example with Basic Observable 10', 'Example with Basic Observable 11'...
// const subscribe = example.subscribe(val => console.log('Example with Basic Observable:', val));


// const myPromise = val => new Promise(resolve => setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000))

// /*
//   when all observables complete, give the last
//   emitted value from each as an array
// */
// const example = Rx.Observable.forkJoin(
//   //emit 'Hello' immediately
//   Rx.Observable.of('Hello'),
//   //emit 'World' after 1 second
//   Rx.Observable.of('World').delay(1000),
//   //emit 0 after 1 second
//   Rx.Observable.interval(1000).take(1),
//   //emit 0...1 in 1 second interval
//   Rx.Observable.interval(1000).take(2),
//   //promise that resolves to 'Promise Resolved' after 5 seconds
//   myPromise('RESULT')
// );
// //output: ["Hello", "World", 0, 1, "Promise Resolved: RESULT"]
// const subscribe = example.subscribe(val => console.log(val));

// //make 5 requests
// const queue = Rx.Observable.of([1,2,3,4,5]);
// //emit array of all 5 results
// const exampleTwo = queue
//   .mergeMap(q => Rx.Observable.forkJoin(...q.map(myPromise)));
// /*
//   output:
//   [
//    "Promise Resolved: 1", 
//    "Promise Resolved: 2", 
//    "Promise Resolved: 3", 
//    "Promise Resolved: 4",    
//    "Promise Resolved: 5"
//   ]
// */
// const subscribeTwo = exampleTwo.subscribe(val => console.log(val));


// //emit every 2.5 seconds
// const first = Rx.Observable.interval(2500);
// //emit every 2 seconds
// const second = Rx.Observable.interval(2000);
// //emit every 1.5 seconds
// const third = Rx.Observable.interval(1500);
// //emit every 1 second
// const fourth = Rx.Observable.interval(1000);

// //emit outputs from one observable
// const example = Rx.Observable.merge(
//   first.mapTo('FIRST!'),
//   second.mapTo('SECOND!'),
//   third.mapTo('THIRD'),
//   fourth.mapTo('FOURTH')
// );
// //output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
// const subscribe = example.subscribe(val => console.log(val));

// //emits 1,2,3
// const sourceOne = Rx.Observable.of(1,2,3);
// //emits 4,5,6
// const sourceTwo = Rx.Observable.of(4,5,6);

// const example = Rx.Observable.concat(sourceOne, sourceTwo);

// example.subscribe(v=>console.log(v)); 

// const myPromise = val => new Promise(resolve => setTimeout(() => resolve(`Result: ${val}`), 2000))
// //emit 1,2,3
// const source = Rx.Observable.of(1,2,3);

// const example = source
//   //map each value to promise
//   .map(val => myPromise(val))
//   //emit result from source
//   .mergeAll();

// /*
//   output:
//   "Result: 1"
//   "Result: 2"
//   "Result: 3"
// */

// const subscribe = example.subscribe(v => console.log(v));

// var interval = Rx.Observable.interval(1000);

// //Returns: [0,1], [1,2], [2,3], [3,4], [4,5]
// interval.pairwise()
//     .take(5)
//     .subscribe(console.log);

//take the first observable to emit
// const example = Rx.Observable.race(
//     //emit every 1.5s
//     Rx.Observable.interval(1500),
//     //emit every 1s
//     Rx.Observable.interval(1000).mapTo('1s won!'),
//     //emit every 2s
//     Rx.Observable.interval(2000),
//     //emit every 2.5s
//     Rx.Observable.interval(2500)
//   );
//   //output: "1s won!"..."1s won!"...etc
//   const subscribe = example.subscribe(val => console.log(val));

// //emit (1,2,3)
// const source = Rx.Observable.of(1,2,3);
// //start with 0
// const example =  source.startWith(2);
// //output: 0,1,2,3
// const subscribe = example.subscribe(val => console.log(val));


// //emit every 5s
// const source = Rx.Observable.interval(5000);
// //emit every 1s
// const secondSource = Rx.Observable.interval(1000);
// const example = source
//   .withLatestFrom(secondSource)
//   .map(([first, second]) => {
//     return `First Source (5s): ${first} Second Source (1s): ${second}`;
//   });
// /*
//   "First Source (5s): 0 Second Source (1s): 4"
//   "First Source (5s): 1 Second Source (1s): 9"
//   "First Source (5s): 2 Second Source (1s): 14"
//   ...
// */
// const subscribe = example.subscribe(val => console.log(val));


/**
*Conditional Operator
*
*/

// const empty = Rx.Observable.of('w');
// //emit 'Observable.of() Empty!' when empty, else any values from source
// const exampleOne = empty.defaultIfEmpty('if default is empty, you will see me. ..');
// //output: 'Observable.of() Empty!'
// const subscribe = exampleOne.subscribe(val => console.log(val));

// //empty observable
// const empty = Rx.Observable.empty();
// //emit 'Observable.empty()!' when empty, else any values from source
// const example = empty.defaultIfEmpty('Observable.empty()!');
// //output: 'Observable.empty()!'
// const subscribe = example.subscribe(val => console.log(val));

// //emit 5 values
// const source = Rx.Observable.of(2,4,6);
// const example = source
//   //is every value even?
//   .every(val => val % 2 === 0)
// //output: false
// const subscribe = example.subscribe(val => console.log(val));

/**
*Creation
*
*/



/*
  Increment value every 1s, emit even numbers.
*/
// const evenNumbers = Rx.Observable.create(function(observer) {
//     let value = 0;
//     const interval = setInterval(() => {
//       if(value % 2 === 0){
//         observer.next(value);
//       }
//       value++;
//     }, 1000);
  
//     return () => clearInterval(interval);
//   });
//   //output: 0...2...4...6...8
//   const subscribe = evenNumbers.subscribe(val => console.log(val));
//   //unsubscribe after 10 seconds
//   setTimeout(() => {
//     subscribe.unsubscribe();
//   }, 10000);

// //Create observable that immediately completes
// const example = Rx.Observable.empty();
// //output: 'Complete!'
// const subscribe = example.subscribe({
//   next: () => console.log('Next'),
//   complete: () => console.log('Complete!')
// }); 


// //emit array as a sequence of values
// const arraySource = Rx.Observable.from([1,2,3,4,5]);
// //output: 1,2,3,4,5
// const subscribe = arraySource.subscribe(val => console.log(val));

// //create observable that emits click events
// const source = Rx.Observable.fromEvent(document, 'click');
// //map to string with given event timestamp
// const example = source.map(event => `x position: ${event.clientX}`)
// //output (example): 'Event time: 7276.390000000001'
// const subscribe = example.subscribe(val => console.log(val));   

// //example promise that will resolve or reject based on input
// const myPromise = (willReject) => {
//     return new Promise((resolve, reject) => {
//         if(willReject === undefined){
//             reject('Rejected!');
//         }
//         resolve('Resolved!');
//     })
// }
// //emit true, then false
// const source = Rx.Observable.of(true, false);
// const example = source
//     .mergeMap(val => Rx.Observable
//         //turn promise into observable
//         .fromPromise(myPromise(val))
//         //catch and gracefully handle rejections
//         .catch(error => Rx.Observable.of(`Error: ${error}`))
//     )
// //output: 'Error: Rejected!', 'Resolved!'
// const subscribe = example.subscribe(val => console.log(val));

// //emit value in sequence every 1 second
// const source = Rx.Observable.interval(1000);
// //output: 0,1,2,3,4,5....
// const subscribe = source.subscribe(val => console.log(val));

// //emits any number of provided values in sequence
// const source = Rx.Observable.of(1,2,3,4,5);
// //output: 1,2,3,4,5
// const subscribe = source.subscribe(val => console.log(val));

// //emits values of any type
// const source = Rx.Observable.of({name: 'Brian'}, [1,2,3], function hello(){ return 'Hello'});
// //output: {name: 'Brian}, [1,2,3], function hello() { return 'Hello' }
// const subscribe = source.subscribe(val => console.log(val));

// //emit 1-10 in sequence
// const source = Rx.Observable.range(1,10);
// //output: 1,2,3,4,5,6,7,8,9,10
// const example = source.subscribe(val => console.log(val));


// //emits an error with specified value on subscription
// const source = Rx.Observable.throw('This is an error!');
// //output: 'Error: This is an error!'
// const subscribe = source.subscribe({
//   next: val => console.log(val),
//   complete: () => console.log('Complete!'),
//   error: val => console.log(`Error: ${val}`)
// });

// //emit 0 after 1 second then complete, since no second argument is supplied
// const source = Rx.Observable.timer(1000);
// //output: 0
// const subscribe = source.subscribe(val => console.log(val));

// //emit error
// const source = Rx.Observable.throw('This is an error!');
// //gracefully handle error, returning observable with error message
// const example = source.catch(val => Rx.Observable.of(`I caught: ${val}`));
// //output: 'I caught: This is an error'
// const subscribe = example.subscribe(val => console.log(val));

// //emit value every 1s
// const source = Rx.Observable.interval(1000);
// const example = source
//   .flatMap(val => {
//     //throw error for demonstration
//     if(val > 5){
//       return Rx.Observable.throw('Error!');
//     }
//     return Rx.Observable.of(val);
//   })
//   //retry 2 times on error
//   .retry(2);
// /*
//   output: 
//   0..1..2..3..4..5..
//   0..1..2..3..4..5..
//   0..1..2..3..4..5..
//   "Error!: Retried 2 times then quit!"
// */
// const subscribe = example
//   .subscribe({
//      next: val => console.log(val),
//      error: val => console.log(`${val}: Retried 2 times then quit!`)
// });

//emit value every 1s
// const source = Rx.Observable.interval(1000);
// const example = source
//   .map(val => {
//     if(val > 5){
//      //error will be picked up by retryWhen
//      throw val;
//     }
//     return val;
//   })
//   .retryWhen(errors => errors
//                //log error message
//                .do(val => console.log(`Value ${val} was too high!`))
//                //restart in 5 seconds
//                .delayWhen(val => Rx.Observable.timer(val * 1000))
//             );
// /*
//   output: 
//   0
//   1
//   2
//   3
//   4
//   5
//   "Value 6 was too high!"
//   --Wait 5 seconds then repeat
// */
// const subscribe = example.subscribe(val => console.log(val));


// //emit value every 1 second
// const source = Rx.Observable.interval(1000);
// const example = source
//   //side effects will be executed once
//   .do(() => console.log('Do Something!'))
//   //do nothing until connect() is called
//   .publish();

// /*
//   source will not emit values until connect() is called
//   output: (after 5s) 
//   "Do Something!"
//   "Subscriber One: 0"
//   "Subscriber Two: 0"
//   "Do Something!"
//   "Subscriber One: 1"
//   "Subscriber Two: 1"
// */
// const subscribe = example.subscribe(val => console.log(`Subscriber One: ${val}`));
// const subscribeTwo = example.subscribe(val => console.log(`Subscriber Two: ${val}`));

// //call connect after 5 seconds, causing source to begin emitting items
// setTimeout(() => {
//  example.connect(); 
// },5000)

// //emit every 2 seconds, take 5
// const source = Rx.Observable.interval(2000).take(5);

// const example = source
//   //since we are multicasting below, side effects will be executed once
//   .do(() => console.log('Side Effect #1'))
//   .mapTo('Result!')

// //subscribe subject to source upon connect()
// const multi = example.multicast(() => new Rx.Subject());
// /*
//   subscribers will share source
//   output:
//   "Side Effect #1"
//   "Result!"
//   "Result!"
//   ...
// */
// const subscriberOne = multi.subscribe(val => console.log(val));
// const subscriberTwo = multi.subscribe(val => console.log(val));
// //subscribe subject to source
// multi.connect();


// //emit every 2 seconds, take 5
// const source = Rx.Observable.interval(2000).take(5);

// //example with ReplaySubject
// const example = source
//   //since we are multicasting below, side effects will be executed once
//   .do(() => console.log('Side Effect #2'))
//   .mapTo('Result Two!')
// //can use any type of subject
// const multi = example.multicast(() => new Rx.ReplaySubject(5));
// //subscribe subject to source
// multi.connect();

// setTimeout(() => { 
//   /*
//    subscriber will receieve all previous values on subscription because
//    of ReplaySubject
//    */
//   const subscriber = multi
//     .subscribe(val => console.group(val));
// }, 5000);

//emit value in 1s
// const source = Rx.Observable.timer(1000);
// //log side effect, emit result
// const example = source
//   .do(() => console.log('***SIDE EFFECT***'))
//   .mapTo('***RESULT***');
// /*
//   ***NOT SHARED, SIDE EFFECT WILL BE EXECUTED TWICE***
//   output: 
//   "***SIDE EFFECT***"
//   "***RESULT***"
//   "***SIDE EFFECT***"
//   "***RESULT***"
// */
// const subscribe = example.subscribe(val => console.log(val));
// const subscribeTwo = example.subscribe(val => console.log(val));

// //share observable among subscribers
// const sharedExample = example.share();
// /*
//   ***SHARED, SIDE EFFECT EXECUTED ONCE***
//   output: 
//   "***SIDE EFFECT***"
//   "***RESULT***"
//   "***RESULT***"
// */
// const subscribeThree = sharedExample.subscribe(val => console.log(val));
// const subscribeFour = sharedExample.subscribe(val => console.log(val));


// //emit four strings
// const example = Rx.Observable.of('WAIT','ONE','SECOND','Last will display');
// /*
//     Only emit values after a second has passed between the last emission, 
//     throw away all other values
// */
// const debouncedExample = example.debounce(() => Rx.Observable.timer(6000));
// /*
//     In this example, all values but the last will be omitted
//     output: 'Last will display'
// */
// const subscribe = debouncedExample.subscribe(val => console.log(val));

// //emit value every 1 second, ex. 0...1...2
// const interval = Rx.Observable.interval(1000);
// //raise the debounce time by 200ms each second
// const debouncedInterval = interval.debounce(val => Rx.Observable.timer(val * 100))
// /*
//   After 5 seconds, debounce time will be greater than interval time,
//   all future values will be thrown away
//   output: 0...1...2...3...4......(debounce time over 1s, no values emitted)
// */
// const subscribe = debouncedInterval.subscribe(val => console.log(`Example Two: ${val}`));

// const input = document.getElementById('example');

// //for every keyup, map to current input value
// const example = Rx.Observable
//   .fromEvent(input, 'keyup')
//   .map(i => i.currentTarget.value);

// //wait .5s between keyups to emit current value
// //throw away all other values
// const debouncedInput = example.debounceTime(500);

// //log values
// const subscribe = debouncedInput.subscribe(val => {
//   console.log(`Debounced Input: ${val}`);
// });


// //only output distinct values, based on the last emitted value
// const myArrayWithDuplicatesInARow = Rx.Observable
// .from([1,1,2,2,3,1,2,3]);

// const distinctSub = myArrayWithDuplicatesInARow
//   .distinctUntilChanged()
//     //output: 1,2,3,1,2,3
//   .subscribe(val => console.log('DISTINCT SUB:', val));

// const nonDistinctSub = myArrayWithDuplicatesInARow
//   //output: 1,1,2,2,3,1,2,3
//   .subscribe(val => console.log('NON DISTINCT SUB:', val)); 

// let sampleObject = {name: 'Test'};
// //Objects must be same reference
// const myArrayWithDuplicateObjects = Rx.Observable.from([sampleObject, sampleObject, sampleObject]);
// //only out distinct objects, based on last emitted value
// const nonDistinctObjects = myArrayWithDuplicateObjects
//   .distinctUntilChanged()
//   //output: 'DISTINCT OBJECTS: {name: 'Test'}
//   .subscribe(val => console.log('DISTINCT OBJECTS:', val));


// //emit (1,2,3,4,5)
// const source = Rx.Observable.from([1,2,3,4,5]);
// //filter out non-even numbers
// const example = source.filter(num => num % 2 === 0);
// //output: "Even number: 2", "Even number: 4"
// const subscribe = example.subscribe(val => console.log(`Even number: ${val}`));

// //emit ({name: 'Joe', age: 31}, {name: 'Bob', age:25})
// const source = Rx.Observable.from([{name: 'Joe', age: 31}, {name: 'Bob', age:25}]);
// //filter out people with age under 30
// const example = source.filter(person => person.age >= 30);
// //output: "Over 30: Joe"
// const subscribe = example.subscribe(val => console.log(`Over 30: ${val.name}`));

// //emit every second
// const source = Rx.Observable.interval(1000);
// //filter out all values until interval is greater than 5
// const example = source.filter(num => num > 5);
// /*
//   "Number greater than 5: 6"
//   "Number greater than 5: 7"
//   "Number greater than 5: 8"
//   "Number greater than 5: 9"
// */
// const subscribe = example.subscribe(val => console.log(`Number greater than 5: ${val}`));

// const source = Rx.Observable.from(['surendar',2,3,4,5]);
// //no arguments, emit first value
// const example = source.first();
// //output: "First value: 1"
// const subscribe = example.subscribe(val => console.log(`First value: ${val}`));


// //emit value every 100ms
// const source = Rx.Observable.interval(100);
// //ignore everything but complete
// const example = source
//   .take(5)
//   .ignoreElements();
// //output: "COMPLETE!"
// const subscribe = example.subscribe(
//   val => console.log(`NEXT: ${val}`),
//   val => console.log(`ERROR: ${val}`),
//   () => console.log('COMPLETE!')
// );


// //emit value every 100ms
// const source = Rx.Observable.interval(100);
// //ignore everything but error
// const error = source
//   .flatMap(val => {
//     if(val === 4){
//     return Rx.Observable.throw(`ERROR AT ${val}`);
//     }
//     return Rx.Observable.of(val);
//   })
//   .ignoreElements();
// //output: "ERROR: ERROR AT 4"
// const subscribe = error.subscribe(
//   val => console.log(`NEXT: ${val}`),
//   val => console.log(`ERROR: ${val}`),
//   () => console.log('SECOND COMPLETE!')
// );

// const source = Rx.Observable.from([1,2,3,4,5 , "i am last.."]);
// //no arguments, emit last value
// const example = source.last();
// //output: "Last value: 5"
// const subscribe = example.subscribe(val => console.log(`Last value: ${val}`));

// const source = Rx.Observable.from([1,2,3,4,5,6,7,8,10]);
// //emit last even number
// const exampleTwo = source.last(num => num % 2 === 0);
// //output: "Last to pass test: 4"
// const subscribeTwo = exampleTwo.subscribe(val => console.log(`Last to pass test: ${val}`));

// const source = Rx.Observable.from([1,2,3,4,5,23,    435,5,5,53,3]);
// //supply an option projection function for the second parameter
// const exampleTwo = source.last(v => v > 4, v => `The highest emitted number was ${v}`);
// //output: 'The highest emitted number was 5'
// const subscribeTwo = exampleTwo.subscribe(val => console.log(val));

// //emit value every 1s
// const source = Rx.Observable.interval(1000);
// //sample last emitted value from source every 2s 
// const example = source.sample(Rx.Observable.interval(2000));
// //output: 2..4..6..8..
// const subscribe = example.subscribe(val => console.log(val));

// const source = Rx.Observable.zip(
//     //emit 'Joe', 'Frank' and 'Bob' in sequence
//     Rx.Observable.from(['Joe', 'Frank', 'Bob']),
//     //emit value every 2s
//     Rx.Observable.interval(2000)
//   );
//   //sample last emitted value from source every 2.5s
//   const example = source.sample(Rx.Observable.interval(2500));
//   //output: ["Joe", 0]...["Frank", 1]...........
//   const subscribe = example.subscribe(val => console.log(val));

// //emit (1,2,3,4,5)
// const source = Rx.Observable.from([1,2,3,4,5]);
// //emit one item that matches predicate
// const example = source.single(val => val === 2);
// //output: 4
// const subscribe = example.subscribe(val => console.log(val));

// //emit every 1s
// const source = Rx.Observable.interval(1000);
// //skip the first 5 emitted values
// const example = source.skip(5);
// //output: 5...6...7...8........
// const subscribe = example.subscribe(val => console.log(val));


// //emit every 1s
// const source = Rx.Observable.interval(1000);
// //skip emitted values from source until inner observable emits (6s)
// const example = source.skipUntil(Rx.Observable.timer(6000));
// //output: 5...6...7...8........
// const subscribe = example.subscribe(val => console.log(val));

// //emit every 1s
// const source = Rx.Observable.interval(1000);
// //skip emitted values from source while value is less than 5
// const example = source.skipWhile(val => val < 9);
// //output: 5...6...7...8........
// const subscribe = example.subscribe(val => console.log(val));

// //emit value every 1s
// const source = Rx.Observable.interval(1000);
// //after 5 seconds, emit value
// const timer = Rx.Observable.timer(5000);
// //when timer emits after 5s, complete source
// const example = source.takeUntil(timer);
// //output: 0,1,2,3
// const subscribe = example.subscribe(val => console.log(val));

// //emit value every 1 second
// const source = Rx.Observable.interval(1000);
// //throttle for 2 seconds, emit latest value
// const example = source.throttle(val => Rx.Observable.interval(2000));
// //output: 0...3...6...9
// const subscribe = example.subscribe(val => console.log(val));


// //emit value every 1 second
// const source = Rx.Observable.interval(1000);
// //incrementally increase the time to resolve based on source
// const promise = val => new Promise(resolve => setTimeout(() => resolve(`Resolved: ${val}`), val * 100));
// //when promise resolves emit item from source
// const example = source
//     .throttle(promise)
//   .map(val => `Throttled off Promise: ${val}`);

// const subscribe = example.subscribe(val => console.log(val));

// //emit value every 1 second
// const source = Rx.Observable.interval(1000);
// /*
//   throttle for five seconds
//   last value emitted before throttle ends will be emitted from source
// */
// const example = source
//   .throttleTime(5000);
// //output: 0...6...12
// const subscribe = example.subscribe(val => console.log(val));

// const source = Rx.Observable
// .merge(
//       //emit every .75 seconds
//   Rx.Observable.interval(750),
//       //emit every 1 second
//       Rx.Observable.interval(1000)
//     );
// //throttle in middle of emitted values
// const example = source.throttleTime(1200);
// //output: 0...1...4...4...8...7
// const subscribe = example.subscribe(val => console.log(val));


// //Create an observable that emits a value every second
// //Create an observable that emits every time document is clicked
// const bufferBy = Rx.Observable.fromEvent(document, 'click');
// /*
// Collect all values emitted by our interval observable until we click document. This will cause the bufferBy Observable to emit a value, satisfying the buffer. Pass us all collected values since last buffer as an array.
// */
// const myInterval = Rx.Observable.interval(1000).buffer(bufferBy);
// //Print values to console
// //ex. output: [1,2,3] ... [4,5,6,7,8]
// const subscribe = myInterval.subscribe(val => console.log(' Buffered Values:', val));


// //Create an observable that emits a value every second
// const source = Rx.Observable.interval(1000);
// //After three values are emitted, pass on as an array of buffered values
// const bufferThree = source.bufferCount(10);
// //Print values to console
// //ex. output [0,1,2]...[3,4,5]
// const subscribe = bufferThree.subscribe(val => console.log('Buffered Values:', val));

// //Create an observable that emits a value every 500ms
// const source = Rx.Observable.interval(50);
// //After 2 seconds have passed, emit buffered values as an array
// const example = source.bufferTime(1000);
// //Print values to console
// //ex. output [0,1,2]...[3,4,5,6]
// const subscribe = example.subscribe(val => console.log('Buffered with Time:', val));

// //emit value every second
// const sourceInterval = Rx.Observable.interval(1000);
// //start first buffer after 5s, and every 5s after
// const startInterval = Rx.Observable.interval(5000);
// //emit value after 3s, closing corresponding buffer
// const closingInterval = val => {
//     console.log(`Value ${val} emitted, starting buffer! Closing in 3s!`)
//     return Rx.Observable.interval(3000);
// }
// //every 5s a new buffer will start, collecting emitted values for 3s then emitting buffered values
// const bufferToggleInterval = sourceInterval.bufferToggle(startInterval, closingInterval);
// //log to console
// //ex. emitted buffers [4,5,6]...[9,10,11]
// const subscribe = bufferToggleInterval.subscribe(val => console.log('Emitted Buffer:', val));
