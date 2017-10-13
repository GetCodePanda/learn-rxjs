const input = Rx.Observable.fromEvent(
    document.querySelector('input'),
    'input'
);

// // Filter out target values less than 3 characters long..
// input.filter(e => e.target.value.length > 3)
// .map(e => e.target.value)
// .subscribe(v => console.log(v));

// // delay ... 
// input.delay(200)
//     .map((e) => e.target.value)
//     .subscribe(v=>console.log(v));

// // Only let through an event every 200 ms
// input.throttleTime(2000)
// .map(e => e.target.value)
// .subscribe(v=>console.log(v));

// // Let through latest event after 200 ms
// input.debounceTime(1000)
// .map(event => event.target.value)
// .subscribe(value => console.log(value)); // "o" -200ms-> "d"

// // Stop the stream of events after 3 events
// input.take(3)
// .map(event => event.target.value)
// .subscribe(value => console.log(value)); // "hel"

// Passes through events until other observable triggers an event
var stopStream = Rx.Observable.fromEvent(document.querySelector('button'), 'click');
input.takeUntil(stopStream)
  .map(event => event.target.value)
  .subscribe(value => console.log(value)); // "hello" (click)