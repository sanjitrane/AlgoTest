const {Node, LinkedList, mergeSortedLists} = require('./sortList');

describe('Node class checks',()=>{
  it('Node class constructor is a function', ()=>{
    expect(typeof Node.prototype.constructor).toEqual('function')
  })

  it('Has the value and next property', ()=>{
    const node = new Node(1);
    expect(node.value).toEqual(1);
    expect(node.next).toEqual(null);
  })
})

describe('Linkedlist class checks', ()=>{
  let l;
  beforeEach(()=>{
    l = new LinkedList();
  })

  it('LinkedList is a class', ()=>{
    expect(typeof LinkedList.prototype.constructor).toEqual('function')
  })

  it('LinkedList has head property', ()=>{
    expect(l.head).toEqual(null);
  })

  describe('Size function check', ()=>{
    it('returns zero if list is empty', ()=>{
      expect(l.size()).toBe(0);
    });
    it('return 1 if only head node is present', ()=>{
      l.insert(1);
      expect(l.size()).toBe(1);
    })
    it('returns the list size as per the nodes inserted', ()=>{
      l.insert(1);
      l.insert(2);
      l.insert(3);
      l.insert(4);
      expect(l.size()).toBe(4)
    })
  })

  describe('GetAt function check', ()=>{
    it('Returns null if list is empty', ()=>{
      expect(l.getAt(0)).toBe(null);
    })
    it('Returns null if the position passed is greater then the list length', ()=>{
      l.insert(1);
      l.insert(2);
      l.insert(3);
      expect(l.getAt(4)).toBe(null);
    })
    it('Returns the node at the passed valid position', ()=>{
      l.insert(1);
      l.insert(2);
      l.insert(3);
      expect(l.getAt(1).value).toBe(2);
    })
  })

  describe('Insert function checks', ()=>{
    it('creates head if list is empty', ()=>{
      l.insert(1);
      expect(l.head.value).toBe(1);
    })

    it('creates node at the end of the list if not empty', ()=>{
      l.insert(1);
      l.insert(2);
      expect(l.getAt(1).value).toBe(2);
    })
  })

  describe('Testing the MergeSort function', ()=>{
    const getSortedValues = (head)=>{
      
      let curr = head;
      const arr = []
      while(curr){
        arr.push(curr.value);
        curr = curr.next
      }
      return arr;
    }

    it('Sorts an unsorted list', ()=>{
      l.insert(5);
      l.insert(3);
      l.insert(1);
      l.insert(4);
      l.insert(2);
      l.sort();
      const sortedValue = getSortedValues(l.head);
      expect(sortedValue).toEqual([1,2,3,4,5])
    })

    it('Sorts already sorted list', ()=>{
      l.insert(1);
      l.insert(2);
      l.insert(3);
      l.insert(4);
      l.insert(5);
      l.sort();
      const sortedValue = getSortedValues(l.head);
      expect(sortedValue).toEqual([1,2,3,4,5])
    })

    it('Sorts a reverse sorted list', ()=>{
      l.insert(5);
      l.insert(4);
      l.insert(3);
      l.insert(2);
      l.insert(1);
      l.sort();
      const sortedValue = getSortedValues(l.head);
      expect(sortedValue).toEqual([1,2,3,4,5])
    })

    it('Sorts a list with duplicate values', ()=>{
      l.insert(1);
      l.insert(2);
      l.insert(1);
      l.insert(3);
      l.insert(4);
      l.sort();
      const sortedValue = getSortedValues(l.head);
      expect(sortedValue).toEqual([1,1,2,3,4])
    })

    it('Sorts an empty list', ()=>{
      l.sort();
      expect(l.head).toBeNull();
    })

    it('Sorts a single element list', ()=>{
      l.insert(1);
      l.sort();
      expect(l.head.value).toBe(1);
      expect(l.head.next).toBeNull();
    })

    it('Sorts two element list', ()=>{
      l.insert(5);
      l.insert(1);
      l.sort();
      const sortedValue = getSortedValues(l.head)
      expect(sortedValue).toEqual([1,5])
    })
  })

  describe('Checks if the list is sorted', ()=>{
    it('Returns true for a list sorted in ascending order', ()=>{
      l.insert(1);
      l.insert(2);
      l.insert(3);
      expect(l.isSorted()).toBe(true);
    })

    it('Returns true for a list sorted in descending order', ()=>{
      l.insert(3);
      l.insert(2);
      l.insert(1);
      expect(l.isSorted()).toBe(true);
    })

    it('Returns false for an unsorted list', ()=>{
      l.insert(1);
      l.insert(3);
      l.insert(2);
      expect(l.isSorted()).toBe(false);
    })

    it('Returns true for an empty list', ()=>{
      expect(l.isSorted()).toBe(true);
    })
    it('Returns true for a single element list', ()=>{
      expect(l.isSorted()).toBe(true);
    })
  })

  describe('Print function check', ()=>{
    it('Prints empty string if the list is empty', ()=>{
      expect(l.print()).toBe('');
    })
    it('Prints single value if list has single value', ()=>{
      l.insert(1);
      expect(l.print()).toBe('1');
    })
    it('prints all nodes values in the list', ()=>{
      l.insert(1);
      l.insert(2);
      l.insert(3);
      l.insert(4);
      l.insert(5);
      expect(l.print()).toBe('1->2->3->4->5');
    })
  })

  describe('Print Reverse function check', ()=>{
    it('Prints empty string if the list is empty', ()=>{
      expect(l.printReverse()).toBe('');
    })
    it('Prints single value if list has single value', ()=>{
      l.insert(1);
      expect(l.printReverse()).toBe('1');
    })
    it('prints all nodes values in the list', ()=>{
      l.insert(1);
      l.insert(2);
      l.insert(3);
      l.insert(4);
      l.insert(5);
      expect(l.printReverse()).toBe('5<-4<-3<-2<-1');
    })
  })

  describe('MergeList function check', ()=>{
    const getSortedValues = (head)=>{
      
      let curr = head;
      const arr = []
      while(curr){
        arr.push(curr.value);
        curr = curr.next
      }
      return arr;
    }
    it('Merges empty lists', ()=>{
      const l1 = new LinkedList();
      const l2 = new LinkedList();
      const mergedList = mergeSortedLists(l1,l2)
      expect(mergedList.head).toBeNull();
    })

    it('Merges 1 empty list with non-empty list', ()=>{
      const l1 = new LinkedList();
      const l2 = new LinkedList();
      l2.insert(1);
      const mergedList = mergeSortedLists(l1,l2);
      expect(mergedList.head.value).toBe(1);
    })

    it('Merges 2 sorted lists', ()=>{
      const l1 = new LinkedList();
      l1.insert(1);
      l1.insert(2);
      l1.insert(3);
      l1.insert(5);
      const l2 = new LinkedList();
      l2.insert(1);
      l2.insert(6);
      l2.insert(8);
      l2.insert(9);
      const mergedList = mergeSortedLists(l1,l2)
      const sortedValue = getSortedValues(mergedList.head);
      expect(sortedValue).toEqual([1,1,2,3,5,6,8,9])
    })

    it('Merges 2 sorted lists with negative and positive values', ()=>{
      const l1 = new LinkedList();
      l1.insert(-3);
      l1.insert(2);
      l1.insert(3);
      l1.insert(5);
      const l2 = new LinkedList();
      l2.insert(-6);
      l2.insert(-1);
      l2.insert(8);
      l2.insert(9);
      const mergedList = mergeSortedLists(l1,l2)
      const sortedValue = getSortedValues(mergedList.head);
      expect(sortedValue).toEqual([-6,-3,-1,2,3,5,8,9])
    })
  })

  describe('Swapping adjacent elements function check', ()=>{
    it('Returns null for empty list', ()=>{
      expect(l.swapPairs()).toBeNull();
    })
    it('Returns the head node for list with single element', ()=>{
      l.insert(1);
      l.swapPairs();
      expect(l.getAt(0).value).toBe(1);
      expect(l.getAt(0).next).toBeNull();
    })

    it('Swaps the adjacent elements properly', ()=>{
      l.insert(1);
      l.insert(2);
      l.insert(3);
      l.insert(4);
      l.swapPairs();
      expect(l.print()).toEqual('2->1->4->3');
    })
  })
}) 