/**
 * Summary Table:
Method	          Time Complexity	    Space Complexity
getFirst()	          𝑂(1)              𝑂(1)
getLast()	            𝑂(𝑛)            	𝑂(1)
getAt(pos)	          𝑂(𝑛)            	𝑂(1)
size()  	            𝑂(𝑛)            	𝑂(1)
insertFirst(value)	  𝑂(1)              𝑂(1)
insertLast(value)	    𝑂(𝑛)              𝑂(1)
insertAt(value, pos)  𝑂(𝑛)              𝑂(1)
getMidPoint()	        𝑂(𝑛)              𝑂(1)
reverse()   	        𝑂(𝑛)              𝑂(1)
removeNode()          𝑂(𝑛)              𝑂(1)
removeNodeByRef()     𝑂(1)              𝑂(1)
removeAlternateNodes()𝑂(𝑛)              𝑂(1)
removeDuplicates()    𝑂(𝑛)              𝑂(𝑛)
getNodeFromEnd(pos)   𝑂(𝑛)              𝑂(1)
 */

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  getFirst(){
    return this.head;
  }

  getLast(){
    if(!this.head){
      return null;
    }else{
      let curr = this.head;
      while(curr.next){
        curr = curr.next;
      }
      return curr;
    }
  }

  size(){
    if(!this.head){
      return 0
    }else{
      let node = this.head;
      let n = 0;
      while(node){
        n++
        node = node.next;
      }
      return n;
    }
  }

  // returns a node at the given position
  getAt(pos){
    const length = this.size();
    if(pos < 0 || pos > length){
      return null;
    }else{
      let node = this.head;
      let n = 0;
      while(n < pos){
        n++;
        node = node.next; 
      }
      return node;
    }
  }

  insertFirst(value){
    const node = new Node(value);
    if(!this.head){
      this.head = node;
    }else{
      node.next = this.head;
      this.head = node;
    }
  }

  insertLast(value){
    const last = this.getLast();
    if(!last){
      this.insertFirst(value)
    }else{
      const node = new Node(value);
      last.next = node;
    }
  }

  insertAt(value, pos){
    const length = this.size();
    if(pos < 0 || pos > length){
      return null;
    }else{
      if(pos === 0){
        this.insertFirst(value)
      }else if(pos === length){
        this.insertLast(value)
      }else{
        const node = new Node(value);
        const prev = this.getAt(pos - 1);
        node.next = prev.next;
        prev.next = node;
      }
    }
  }

  /**How do you find the middle element of a singly linked list in one pass */
  getMidPoint(){
    if(!this.head){
      return this.head;
    }else{
      let slow = this.head;
      let fast = this.head.next;
      while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
      }
      return slow;
    }
  }

  /**Get node at a specific position from end */
  getNodeFromEnd(pos){
    if(pos > this.size()) return null;
    let slow = this.getFirst();
    let fast = this.getFirst();
    if(!fast) return null;
    while(pos > 1){
      fast = fast.next;
      pos--;
    }
    while(fast.next){
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  }

  /**How do you check if a given linked list contains a cycle? */
  isCyclic(){
    if(!this.head){
      return false;
    }
    let slow = this.head;
    let fast = this.head;
    while(fast && fast.next){
      fast = fast.next.next;
      slow = slow.next;
      if(fast === slow){
        return true;
      }
    }
    return false;
  }

  /*How do you find the starting node of the cycle */
  findCyclicStart(){
    if(!this.head){
      return null;
    }
    let slow = this.head;
    let fast = this.head;
    while(fast && fast.next){
      slow = slow.next;
      fast = fast.next.next;

      if(slow === fast){
        slow = this.head;
        while(slow !== fast){
          slow = slow.next;
          fast = fast.next;
        }
        return slow;
      }
    }
    return null;
  }

  reverseList(){
    let node = this.getFirst(); //head node
    this.head = this.getLast(); // swap head with the last node;
    let prev = null;
    let next = null;
    const length = this.size();
    while(node){  
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }  
     return this;
  }

  removeNode(value){
    if(!this.head){
      return null;
    }
    if(this.head.value === value){
      this.head = this.head.next;
      return true;
    }
    let curr = this.head;
    let prev = null;
    while(curr !==null && curr.value !== value){
      prev = curr;
      curr = curr.next
    }
    if(curr !==null){
      prev.next = curr.next;
      return true;
    }
    return false;
  }

  removeNodeByRef(node){
    //cannot delete last node this way
    if(!node || !node.next){
      return false;
    }
    node.value = node.next.value;
    node.next = node.next.next;
    return true;
  }

  removeDuplicates(){
    const hashSet = new Set();
    let curr = this.head;
    let prev = null;
    while(curr!== null){
      if(hashSet.has(curr.value)){
        prev.next = curr.next;
        curr = curr.next;
      }else{
        hashSet.add(curr.value);
        prev = curr;
        curr = curr.next;
      }
    }
    return this;
  }

  removeAlternateNodes(){
    if(!this.head || !this.head.next){
      return this.head;
    }
    let curr = this.head;
    while(curr.next && curr.next.next){
      curr.next = curr.next.next;
      curr = curr.next;
    }
    return this;
  }

  frequency(n){
    if(!this.head) return 0;
    if(!this.head.next){
      if(this.head.value === n){
        return 1
      }else{
        return 0
      }
    }
    let count = 0
    let curr = this.head;
    while(curr){
      if(curr.value === n){
        count++
      }
      curr = curr.next;
    }
    return count;
  }

  print(){
    let res = ''
    if(this.head){
      let curr = this.head;
      while(curr){
        res+= `${curr.value}`
        if(curr.next){
          res+='->'
        }
        curr= curr.next
      }
    }
    return res;
  }
}

module.exports={Node, LinkedList}

const l = new LinkedList();
l.insertFirst(1);
l.insertLast(4);
l.insertLast(8);
l.insertLast(10);
l.insertLast(15);
l.removeAlternateNodes();
console.log(l.print());