export function hashMap() {
    return {
        buckets: Array(16).fill(undefined),

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

        set(key, value) {
            let hashCode = this.hash(key);

            if (hashCode < 0 || hashCode >= this.buckets.length) {
                throw new Error('Trying to access index out of bound');
            }

            let current = this.buckets[hashCode];

            while (true) {
                if (current === undefined) {
                    this.buckets[hashCode] = {};
                    this.buckets[hashCode][key] = value;
                    this.buckets[hashCode].next = undefined;
                    return false;
                } else if (current.key !== null) {
                    this.buckets[hashCode][key] = value;
                    return false;
                } else {
                    current = current.next;
                }
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
                    return current.value;
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
    };
}
