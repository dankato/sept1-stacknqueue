'use strict';


// Stack (Last In First Out)


// Creates a node containing the data and a reference to the next item
function createNode (data = null, next = null) {
  return {
    data,
    next
  };
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
		// if the stack is empty, then the data will be the top of the stack
    if(this.top === null) {
      this.top === createNode(data);
      return this.top;
    }
	
	// if the top already has something then create a new node
	// add data to the new node
	// have the pointer point to the top
    const node = createNode(data, this.top);
    this.top = node;
  }

  pop() {
		// in order to remove the top of the stack, you have to point the pointer to teh next item and that next item becomes the top of the stack.
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek() {
	// if the top of the stack does not have anything, then the stack is empty. Otherwise return what's on the top.
  if(s.top === null) {
    return null;
  }
  return s.top.data;
}

function display() {
	// displays the entire contents of the stack
  let node = s.top;
  while(node !== null) {
    console.log(node.data);
    node = node.next;
  }
}
let s = new Stack();

s.push(1);
s.push(2);
s.push('three');
console.log('top of the stack: ', peek());


s.pop();
s.push('four');
console.log('top of the stack: ', peek());

display();















// https://gist.github.com/tparveen/556fd8789d45cc0c67b46fcdf1ca03de

// Palindromes
function is_palindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  var i, len = str.length;
  for(i =0; i<len/2; i++){
    if (str[i]!== str[len -1 -i])
      return false;
  }
  return true;
}

// true, true, true
console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('10012'));


// Matching parentheses in an expression





// Square dance pairing
