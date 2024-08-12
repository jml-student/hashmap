import { hashMap } from './hashmap.mjs';
import { hashSet } from './hashset.mjs';

/*const obj = hashMap();

obj.set('apple', 'red');
obj.set('banana', 'yellow');
obj.set('carrot', 'orange');
obj.set('dog', 'brown');
obj.set('elephant', 'gray');
obj.set('frog', 'green');
obj.set('grape', 'purple');
obj.set('hat', 'black');
obj.set('ice cream', 'white');
obj.set('jacket', 'blue');
obj.set('kite', 'pink');
obj.set('lion', 'golden');
console.log(obj.buckets);
console.log(obj.getloadFactor());

obj.set('carrot', 'oorangee');
obj.set('frog', 'greeeeen');
obj.set('kite', 'piiiiink');
console.log(obj.buckets);
console.log(obj.getloadFactor());

obj.set('moon', 'silver');
console.log(obj.getloadFactor());

obj.set('carrot', 'orange');
obj.set('frog', 'green');
obj.set('kite', 'pink');
console.log(obj.buckets);
console.log(obj.getloadFactor());*/

const obj = hashSet();

obj.set('apple');
obj.set('banana');
obj.set('carrot');
obj.set('dog');
obj.set('elephant');
obj.set('frog');
obj.set('grape');
obj.set('hat', 'black');
obj.set('ice cream', 'white');
obj.set('jacket', 'blue');
obj.set('kite', 'pink');
obj.set('lion', 'golden');
console.log(obj.buckets);
console.log(obj.getloadFactor());

obj.set('carrot', 'oorangee');
obj.set('frog', 'greeeeen');
obj.set('kite', 'piiiiink');
console.log(obj.buckets);
console.log(obj.getloadFactor());

obj.set('moon', 'silver');
console.log(obj.getloadFactor());

obj.set('carrot', 'orange');
obj.set('frog', 'green');
obj.set('kite', 'pink');
console.log(obj.buckets);
console.log(obj.getloadFactor());
