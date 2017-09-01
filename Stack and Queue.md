Two of the most commonly used data structures in web development are stacks and queues. The history of pages visited in a web browser and the undo operation in a text editor are examples of operations made possible using stacks. The handling of events in web browsers often uses a queue data structure.

## Stack

A stack is a data structure that stores elements in a LIFO (Last In First Out) order. It's like a stack of plates in your kitchen. When a plate is added, it is pushed towards the bottom of a stack. The last plate that you stack becomes the one on the top of the stack and it is the first one that you get to use.

A stack has two basic functions:
* push(): places data onto the top of a stack
* pop(): removes data from the top of the stack

Let's look at how stack is implemented. A common way to implement stack is to use a stack of nodes. You can think of a node as an object that has a value and a pointer that points to the next node.

```js
//Creates a node containing the data and a reference to the next item
function createNode(data=null, next=null) {
    return {
        data,
        next
    };
}
```
You can then start by creating the constructor function for the stack. This will have the regular push and pop operations. In addition to the push and pop, this will also have a few other operations such as:

* peek: allows you to look at the top of the stack without removing it
* display: to display the whole stack

The constructor is nice and straightforward.  The stack has a head that will always contain the first node.  In this case we start with an empty first node, represented by `null`.

```js
class Stack {
    constructor() {
        this.top = null;
    }

```
* push(): when you push something onto the stack, the new item is pushed on top of the stack. 

```js
    push(data) {
        //if the top of the stack is empty, then the data will be the
        //top of the stack
        if (this.top === null) {
            this.top = createNode(data);
            return this.top;
        }

        //if the top already has something then create a new node
        //add data to the new node
        // have the pointer point to the top 
        const node = createNode(data, this.top);
        this.top = node;
    }
```
* pop ()

```js
    pop() {
        //in order to remove the top of the stack, you have to point
        //the pointer to the next item and that next item becomes the
        //top of the stack
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

```
The code above shows the stack class. The two main operations are push and pop which are implemented in push() and pop() methods. Using the stack class you can implement other methods - such as peek to see what is at the top of the stack or display() method to display the content of the stack. These peek and display method should not be implemented in the stack class as they are not the core functions of stack.

```js

function peek() {
    //if the top of the stack does not have anything 
    //then the stack is empty
    //otherwise return what's on the top
    if (s.top === null) {
        return null;
    }
    return s.top.data;
}

function display() {
    // displays the entire contents of the stack
    let node = s.top;
    while (node !== null) {
        console.log(node.data);
        node = node.next;
    }
}
    
let s = new Stack();
 
s.push(1);
s.push(2);
s.push("Tauhida");
console.log("Top of stack:", peek());

s.pop();
s.push("joe");
console.log("Top of stack:", peek());

display();

```

## Stack in JavaScript (stay away from this version)

It is useful to also know that you can use a JavaScript array as a stack.  In JavaScript the array methods more or less resemble the operations in a stack. Therefore, you may see implemention of stack and its operations in JavaScript using JavaScript arrays. The following code is another implementation of stack using JS arrays.

```js
class Stack {
    constructor() {
        this.dataStore = [];
    }

    push(data) {
        this.dataStore.push(data);
    }

    pop() {
        return this.dataStore.pop();
    }
}

var s = new Stack();

s.push("Joe");
s.push("Tauhida");
s.push(5);
console.log("length: " + s.length());

```

## Complexity of Stack operations	 	 

| Access | Search | Insertion | Deletion |
|--------|--------|-----------|----------|
| O(n)   | O(n)   | O(1)      | O(1)     |


## Queue

A stack can remove only the most recently added data. It's in LIFO order. What if you want an operation that is first come, first serve? A Queue is a data structure that models a FIFO (First In First Out) operation. Unlike a stack, a queue deletes only the oldest added data. An example of a queue is the fast food service in McDonalds. You line up and service is provide in the order that you line up. If you are first to line up, you get served first. A queue is a type of list where data is inserted at the end and is removed from the front. Queues are used to store data in the order in which they occur, as opposed to a stack, in which the last piece of data entered is the first element used for processing.

A more practical example of a queue is the event-loop of a web browser. As different events are being triggered, such as the click of a button, they are added to an event-loop's queue and handled in the order they entered the queue. Another example would be a print spooler.

The main operations of a queue include:
* enqueue(data) adds data to a queue (insertion)
* dequeue() removes the oldest added data to a queue (deletion)

```js
function createNode(data=null, next=null, prev=null) {
    return {
        data,
        next,
        prev
    };
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = createNode(data);

        if (this.last) {
            node.next = this.last;
            this.last.prev = node;
        }

        this.last = node;

        if (this.first === null) {
            this.first = node;
        }
    }

    dequeue() {
        if (this.first === null) {
            return;
        }

        const node = this.first;
        this.first = node.prev;

        if (node === this.last) {
            this.last = null;
        }

        return node.data;
    }
}

//other funcitons that uses the queue class

function display() {
    let node = q.first;
    while (node !== null) {
        console.log(node.data);
        node = node.prev;
    }
}

let q = new Queue();
q.enqueue("Tauhida");
q.enqueue("Joe");
q.enqueue("Tim");
display();
console.log(q.dequeue());
display();
q.enqueue("Alison");
q.enqueue("Chris");
console.log(q.dequeue());
display();

```
Just as before, you can use arrays to implement queue in JavaScript as well. The code would look very similar to the code from stack. Instead of using the pop() method that removes the last element from an array, we will be using the shift() method to removes the first element from the array.

```js
class Queue {
    constructor() {
        this.dataStore = [];
    }

    enqueue(data) {
        this.dataStore.push(data);
    }

    dequeue() {
        return this.dataStore.shift();
    }

    display() {
        for (let i=0; i<this.dataStore.length; i++) {
            console.log(this.dataStore[i]);
        }
    }
}
```

## Time complexities
Note that the actual complexities depend on the underlying implementation and may be worse than these ideals.

| Access | Search | Insertion | Deletion |
|--------|--------|-----------|----------|
| O(n)   | O(n)   | O(1)      | O(1)     |
