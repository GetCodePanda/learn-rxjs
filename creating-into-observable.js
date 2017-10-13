const myObservable = new Rx.Subject();
myObservable.subscribe(value => console.log(value + " !!!!"));
myObservable.next('foo');

const myAnotherObservable = Rx.Observable.create((observable)=>{
    observable.next('hi');
    setTimeout(()=> observable.next('bar'),1000);
});

myAnotherObservable.subscribe(v => console.log(v));