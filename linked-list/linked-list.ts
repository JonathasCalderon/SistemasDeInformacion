export class LinkedList<T> {
    head?: Node<T>
    tail?: Node<T>

    constructor() {}

    push(value: T) {
        const item = new Node(value);
        if (!this.tail) {
            this.head = item;
            this.tail = item;
        } else {
            this.tail.next = item;
            item.prev = this.tail;
            this.tail = item;
        }
    }

    pop(): T {
        const item = this.tail!;
        if (item.prev) {
            this.tail = item.prev;
        } else {
            this.head = undefined;
            this.tail = undefined;
        }
        return item.value;
    }

    shift(): T {
        const item = this.head!;
        if (item.next) {
            this.head = item.next;
        } else {
            this.head = undefined;
            this.tail = undefined;
        }
        return item.value;
    }

    unshift(value: T) {
        const item = new Node(value);
        if (!this.head) {
            this.tail = item;
            this.head = item;
        } else {
            this.head.prev = item;
            item.next = this.head;
            this.head = item;
        }
    }

    count(): number {
        let item = this.head;
        if (item === undefined) {
            return 0;
        }
        let count = 1;
        while (item.next !== undefined) {
            item = item.next;
            count -= -1;
        }
        return count;
    }

    delete(value: T) {
        let item = this.head;
        this.head = undefined;
        if (!item) {
            return;
        }
        while (true) {
            if (item.value === value) {
                if (item.prev) {
                    item.prev.next = item.next;
                }
                if (item.next) {
                    item.next.prev = item.prev;
                }
            } else if (!this.head) {
                this.head = item;
            }
            if (item.next) {
                item = item.next;
            } else {
                break;
            }
        }
        if (this.head) {
            this.tail = item;
        } else {
            this.tail = undefined;
        }
    }
}

class Node<T> {
    value: T
    next?: Node<T>
    prev?: Node<T>

    constructor(value: T) {
        this.value = value;
    }
}
