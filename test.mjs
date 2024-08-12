import { hashMap } from './index.mjs';

const obj = hashMap();

obj.set('apple', 'red');
obj.set('banana', 'yellow');
obj.set('carrot', 'orange');
console.log(obj.buckets);

console.log(obj.get('apple'));
console.log(obj.get('banana'));
console.log(obj.get('carrot'));

console.log(obj.has('apple'));
console.log(obj.has('banana'));
console.log(obj.has('horse'));

obj.remove('apple');
console.log(obj.buckets);

console.log(obj.length());
console.log(obj.keys());
