/**Sort Linkedlist */
/**Time: O(nlog n), Space: O(log n) */
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

  insert(value){
    const node = new Node(value);
    if(!this.head){
      this.head = node;
    }else{
      let curr = this.head;
      while(curr.next){
        curr = curr.next
      }
      curr.next = node;
    }
  }

  size(){
    if(!this.head){
      return 0
    }
    let curr = this.head;
    let n = 0;
    while(curr){
      curr = curr.next;
      n++
    }
    return n;
  }

  getAt(pos){
    const length = this.size();
    if(pos < 0 || pos > length){
      return null;
    }
    let curr = this.head;
    while(pos > 0){
      curr = curr.next;
      pos--;
    }
    return curr;
  }

  getMiddle(head){
    if(!head){
      return head;
    }
    
    let fast = head;
    let slow = head;
    while(fast.next && fast.next.next){
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }

  mergeSort(head){
    // Base case no head or single node
    if(!head || !head.next){
      return head
    }

    // Split the list in the middle
    const middle = this.getMiddle(head);
    const nextToMiddle = middle.next;
    middle.next = null;

    // Recursively sort each halves
    const left = this.mergeSort(head)
    const right = this.mergeSort(nextToMiddle)

    // Merge the sorted halves
    return this.sortedMerge(left, right)
  }

  sortedMerge(left, right){
    if(!left){
      return right;
    }
    if(!right){
      return left;
    }

    let result = null;
    if(left.value <= right.value){
      result = left;
      result.next = this.sortedMerge(left.next, right)
    }else{
      result = right;
      result.next = this.sortedMerge(left, right.next)
    }
    return result;
  }

  sort(){
    this.head = this.mergeSort(this.head);
  }

  /**Time: O(n), Space: O(1) */
  isSorted(){
    // If list is empty
    if(!this.head){
      return true
    }
    // if single element in list
    if(!this.head.next){
      return true;
    }
    let dir;
    if(this.head.value > this.head.next.value){
      dir = 'desc'
    }else{
      dir = 'asc'
    }
    let curr = this.head;
    while(curr.next){
      if(dir === 'desc' && curr.value < curr.next.value){
        return false;
      }
      if(dir === 'asc' && curr.value > curr.next.value){
        return false;
      }
      curr = curr.next;
    }
    return true;
  }

  /**Time: O(n), Space: O(1)   */
  swapPairs(){
    //[1,2,3,4] -> [2,1,4,3]
    if(!this.head || !this.head.next){
      return this.head;
    }
    let dummy = new Node(0);
    dummy.next = this.head;
    let prev = dummy;
    while(prev.next && prev.next.next){
      let first = prev.next;
      let second = first.next;
      first.next = second.next;
      second.next = first;
      prev.next = second;
      prev = first;
    }
    this.head = dummy.next;
    return this.head;
  }

  /**Time: O(n), Space: O(n) */
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

  /**Time: O(n), Space: O(n) */
  printReverse(){
    let res = ''
    if(this.head){
      const stack = [];
      let curr = this.head;
      while(curr){
        stack.push(curr.value);
        curr = curr.next
      }
      while(stack.length){
        res+=`${stack.pop()}`
        if(stack.length){
          res+=`<-`
        }
      }
    }
    return res;
  }

}

function /**Time: O(n+m) // n and m are the length of 2 lists, Space: O(1) */
mergeSortedLists(list1, list2){
  const mergedList = new LinkedList();
  let l1 = list1.head;
  let l2 = list2.head;
  let current = new Node(0);
  mergedList.head = current
  while(l1 && l2){
  
    if(l1.value < l2.value){
      current.next = l1;
      l1 = l1.next;
    }else{
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  current.next = l1 || l2;
  
  mergedList.head = mergedList.head.next;
  return mergedList;
}

module.exports = {Node, LinkedList, mergeSortedLists}
