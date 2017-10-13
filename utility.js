// const source = Rx.Observable.of(1,2,3,4,5);
// //transparently log values from source with 'do'
// const example = source
//   .do(val => console.log(`BEFORE MAP: ${val}`))
//   .map(val => val + 10)
//   .do(val => console.log(`AFTER MAP: ${val}`));
// //'do' does not transform values
// //output: 11...12...13...14...15
// const subscribe = example.subscribe(val => console.log(val));


// //emit one item
// const example = Rx.Observable.of(null);
// //delay output of each by an extra second
// const message = Rx.Observable.merge(
//     example.mapTo('Hello'),
//     example.mapTo('World!').delay(1000),
//     example.mapTo('Goodbye').delay(2000),
//     example.mapTo('World!').delay(3000)
//   );
// //output: 'Hello'...'World!'...'Goodbye'...'World!'
// const subscribe = message.subscribe(val => console.log(val));

// //emit value every second
// const message = Rx.Observable.interval(1000);
// //emit value after five seconds
// const delayForFiveSeconds = () => Rx.Observable.timer(5000);
// //after 5 seconds, start emitting delayed interval values
// const delayWhenExample = message.delayWhen(delayForFiveSeconds);
// //log values, delayed for 5 seconds
// //ex. output: 5s....1...2...3
// const subscribe = delayWhenExample.subscribe(val => console.log(val));

//emit next and error notifications
// const source = Rx.Observable
// .from([
//   Rx.Notification.createNext('SUCCESS!'),
//   Rx.Notification.createError('ERROR!')   
// ])
// //turn notification objects into notification values
// .dematerialize();

// //output: 'NEXT VALUE: SUCCESS' 'ERROR VALUE: 'ERROR!'
// const subscription = source.subscribe({
// next: val => console.log(`NEXT VALUE: ${val}`),
// error: val => console.log(`ERROR VALUE: ${val}`)
// });


// // custom error handling logic
// const retryThreeTimes = obs => obs.retry(3).catch(_ => Rx.Observable.of('ERROR!'));
// const examplePromise = val => new Promise(resolve => resolve(`Complete: ${val}`));

// //faking request
// const subscribe = Rx.Observable
//   .of('some_url')
//   .mergeMap(url => examplePromise(url))
//   // could reuse error handling logic in multiple places with let
//   .let(retryThreeTimes)
//   //output: Complete: some_url
//   .subscribe(result => console.log(result));

// const customizableRetry = retryTimes => obs => obs.retry(retryTimes).catch(_ => Rx.Observable.of('ERROR!'));

// //faking request
// const secondSubscribe = Rx.Observable
//   .of('some_url')
//   .mergeMap(url => examplePromise(url))
//   // could reuse error handling logic in multiple places with let
//   .let(customizableRetry(3))
//   //output: Complete: some_url
//   .subscribe(result => console.log(result));


// // custom error handling logic
// const retryThreeTimes = obs => obs.retry(3).catch(_ => Rx.Observable.of('ERROR!'));
// const examplePromise = val => new Promise(resolve => resolve(`Complete: ${val}`));

// //faking request
// const subscribe = Rx.Observable
//   .of('some_url')
//   .mergeMap(url => examplePromise(url))
//   // could reuse error handling logic in multiple places with let
//   .let(retryThreeTimes)
//   //output: Complete: some_url
//   .subscribe(result => console.log(result));

// const customizableRetry = retryTimes => obs => obs.retry(retryTimes).catch(_ => Rx.Observable.of('ERROR!'));

// //faking request
// const secondSubscribe = Rx.Observable
//   .of('some_url')
//   .mergeMap(url => examplePromise(url))
//   // could reuse error handling logic in multiple places with let
//   .let(customizableRetry(3))
//   //output: Complete: some_url
//   .subscribe(result => console.log(result));


// //emit array as a sequence
// const source = Rx.Observable.from([1,2,3,4,5]);

// //pass in your own function to add operators to observable
// const obsArrayPlusYourOperators = (yourAppliedOperators) => {
//   return source
//     .map(val => val + 1)
//     .let(yourAppliedOperators)
//  };
// const addTenThenTwenty = obs => obs.map(val => val + 10).map(val => val + 20);
// const subscribe = obsArrayPlusYourOperators(addTenThenTwenty)
//     //output: 32, 33, 34, 35, 36
//     .subscribe(val => console.log('let FROM FUNCTION:', val));  

// //return basic observable
// const sample = val => Rx.Observable.of(val).delay(5000);
// //convert basic observable to promise
// const example = sample('First Example')
//   .toPromise()
//   //output: 'First Example'
//   .then(result => {
//     console.log('From Promise:', result);
//   });