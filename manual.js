/**
*FLOW
*
*/
// const count = 0 ,
//         rate = 1000 ,
//         lastClick = Date.now() - rate ,
//         button = document.querySelector('button');
//
// const observable = Rx.Observable.create(function(observer){
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
//     setTimeout(() => {
//         observer.next(4);
//         observer.complete();
//     });
// });
//
// observable.subscribe({
//     next : x => console.log(x),
//     err: e => console.log(e),
//     complete: () => console.log('all completed')
// });
//
// console.log('After subscribe');

/**
*Observable:
* 1.creating observable 2.subscribing observable 3.executing observable and 4. disposing observable
*/


/**
*1.Creating Observable
* Rx.Observable.create(function subscribe(){})
*/

/**
*2.Subscribing Observable
*observable.subscribe()
*/


/**
*3.executing observable
*observer.next() , observer.error(), observer.complete()
*/


/**
*4.deposing observable
*observer.unsubscribe() or observer.disposed()
*/

// // testing observable and subject ...
// const mySubject = new Rx.Subject();

// mySubject.subscribe({
//     next:(v)=> console.log('Observer A ' + v)
// })

// mySubject.subscribe({
//     next:(v)=> console.log('Observer B ' + v)
// })

// mySubject.next(1);
// mySubject.next(2);

// var source = Rx.Observable.from([1, 2, 3]);
// var subject = new Rx.Subject();
// var multicasted = source.multicast(subject);

// // These are, under the hood, `subject.subscribe({...})`:
// multicasted.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });
// multicasted.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// }); 

// // This is, under the hood, `source.subscribe(subject)`:
// multicasted.connect();


/**
*Behaviour Subject
*
*/


// var subject = new Rx.BehaviorSubject(6); // 0 is the initial value

// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });

// subject.next(1);
// subject.next(2);

// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });

// subject.next(3);

/**
*Reply Subject
*
*/

// var subject = new Rx.ReplaySubject(2); // buffer 3 values for new subscribers

// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });

// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);

// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });

// subject.next(5);


// var subject = new Rx.ReplaySubject(100, 500 /* windowTime */);

// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });

// var i = 1;
// setInterval(() => subject.next(i++), 200);

// setTimeout(() => {
//   subject.subscribe({
//     next: (v) => console.log('observerB: ' + v)
//   });
// }, 1000);

// var subject = new Rx.AsyncSubject();

// subject.subscribe({
//   next: (v) => console.log(' observerA: ' + v)
// });

// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);

// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });

// subject.next(5);
// subject.complete();

/**
*Async Subject
*
*/
// var subject = new Rx.AsyncSubject();

// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });

// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);

// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });

// subject.next(5);
// subject.next(6);
// subject.complete();