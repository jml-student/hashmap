export function hashMap() {
    return {
        buckets: Array(16).fill(undefined),
        elementsLenght: 0,
        loadFactor: 0.75,

        hash(key) {
            let hashCode = 0;
            const primeNumber = 31;

            for (let i = 0; i < key.length; i++) {
                hashCode =
                    (primeNumber * hashCode + key.charCodeAt(i)) %
                    this.buckets.length;
            }
            return hashCode;
        },

        getloadFactor() {
            return this.elementsLenght / this.buckets.length;
        },

        resize() {
            const oldBuckets = this.buckets;
            this.buckets = Array(this.buckets.length * 2).fill(undefined);
            this.elementsLenght = 0;

            for (let bucket of oldBuckets) {
                let current = bucket;
                while (current) {
                    let key = Object.keys(current)[0];
                    this.set(key, current[key]);
                    current = current.next;
                }
            }
        },

        set(key, value) {
            let hashCode = this.hash(key);

            if (hashCode < 0 || hashCode >= this.buckets.length) {
                throw new Error('Trying to access index out of bound');
            }

            let current = this.buckets[hashCode];

            if (current === undefined) {
                this.buckets[hashCode] = {
                    [key]: value,
                    next: undefined,
                };
                this.elementsLenght++;
            } else {
                while (true) {
                    if (current[key]) {
                        current[key] = value;
                        return;
                    }
                    if (current.next === undefined) {
                        current.next = {
                            [key]: value,
                            next: undefined,
                        };
                        this.elementsLenght++;
                        break;
                    }
                    current = current.next;
                }
            }

            if (this.getloadFactor() > this.loadFactor) {
                this.resize();
                console.log('Resized');
            }
        },

        get(key) {
            let hashCode = this.hash(key);

            if (hashCode < 0 || hashCode >= this.buckets.length) {
                throw new Error('Trying to access index out of bound');
            }

            let current = this.buckets[hashCode];

            while (current !== undefined) {
                if (current[key]) {
                    return current[key];
                }
                current = current.next;
            }
            return null;
        },

        has(key) {
            let hashCode = this.hash(key);

            if (hashCode < 0 || hashCode >= this.buckets.length) {
                throw new Error('Trying to access index out of bound');
            }

            let current = this.buckets[hashCode];

            while (current !== undefined) {
                if (current[key]) {
                    return true;
                }
                current = current.next;
            }
            return false;
        },

        remove(key) {
            let hashCode = this.hash(key);

            if (hashCode < 0 || hashCode >= this.buckets.length) {
                throw new Error('Trying to access index out of bound');
            }

            let current = this.buckets[hashCode];
            let prev = null;

            while (current !== undefined) {
                if (current[key]) {
                    if (prev === null) {
                        this.buckets[hashCode] = current.next;
                    } else {
                        prev.next = current.next;
                    }
                    return true;
                }
                prev = current;
                current = current.next;
            }
            return false;
        },

        length() {
            let num = 0;
            for (let i = 0; i < this.buckets.length; i++) {
                if (this.buckets[i] !== undefined) {
                    num++;
                    let current = this.buckets[i];
                    while (current.next !== undefined) {
                        num++;
                        current = current.next;
                    }
                }
            }
            return num;
        },

        clear() {
            this.buckets = Array(16).fill(undefined);
        },

        keys() {
            let keyList = [];
            for (let i = 0; i < this.buckets.length; i++) {
                let current = this.buckets[i];
                while (current !== undefined) {
                    let keys = Object.keys(current);
                    keyList.push(keys[0]);
                    current = current.next;
                }
            }
            return keyList;
        },

        values() {
            let valueList = [];
            for (let i = 0; i < this.buckets.length; i++) {
                let current = this.buckets[i];
                while (current !== undefined) {
                    let values = Object.values(current);
                    valueList.push(values[0]);
                    current = current.next;
                }
            }
            return valueList;
        },

        entries() {
            let entries = [];
            for (let i = 0; i < this.buckets.length; i++) {
                let current = this.buckets[i];
                while (current !== undefined) {
                    let keys = Object.keys(current);
                    let key = keys[0];
                    let value = current[key];
                    entries.push([key, value]);
                    current = current.next;
                }
            }
            return entries;
        },
    };
}
