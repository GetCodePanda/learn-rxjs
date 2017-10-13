const input = Rx.Observable.fromEvent(
    document.querySelector('input'),
    'input'
);

// input.map(e=>e.target.value).subscribe(v=>console.log(v));

// input.pluck('target', 'value')
// .subscribe(value => console.log(value));


// input.pluck('target', 'value').pairwise()
// .subscribe(value => console.log(value));

// Only pass unique values through 

// This example is not working ...
input.pluck('target', 'value').distinct()
.subscribe(value => console.log(value)); // "helo wrd"

input.plunk('target', 'value')
.distinctUnitChange()
.subscribe(value => console.log(value));

