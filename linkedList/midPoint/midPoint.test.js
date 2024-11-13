const Node = require('./midPoint').Node;
const LinkedList = require('./midPoint').LinkedList;

let l;
beforeEach(()=>{
  l = new LinkedList();
})

it('Node is a class', ()=>{
  expect(typeof Node.prototype.constructor).toEqual('function');
})

it('LinkedList is a class', ()=>{
  expect(typeof LinkedList.prototype.constructor).toEqual('function');
})

describe('A Node', ()=>{
  it('Node has property value and next', ()=>{
    const node = new Node(1);
    expect(node.value).toEqual(1);
    expect(node.next).toEqual(null);
  })
});

describe('Linkedlist methods',()=>{
  
  it('Linkedlist has a head property', ()=>{
    expect(l.head).toEqual(null);
  })

  it('Returns the head node',()=>{
    l.insertFirst(1);
    expect(l.getFirst().value).toEqual(1);
  })

  it('Returns the last node',()=>{
    expect(l.getLast()).toEqual(null);
    l.insertFirst(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    expect(l.getLast().value).toEqual(4);
  })

  describe('Size function checks', ()=>{
    it('Returns zero if no head is present', ()=>{
      expect(l.size()).toBe(0);
    })
    it('Returns the size of the list', ()=>{
      l.insertFirst(1);
      l.insertLast(2);
      l.insertLast(3);
      expect(l.size()).toBe(3);
    })
  })
  
  describe('Returns the node at the given position',()=>{
    it('Returns null if list is empty',()=>{
      expect(l.getAt(0)).toBe(null);
    })
    it('Returns null if the position is greater than length', ()=>{
      l.insertFirst(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      expect(l.getAt(5)).toBe(null);
    })
    it('Returns the node value at the given position', ()=>{
      l.insertFirst(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      expect(l.getAt(3).value).toBe(4);
    })
  })
  
  it('Linkedlist head value check', ()=>{
    l.insertFirst(1);
    expect(l.head.value).toEqual(1)
    l.insertFirst(2);
    expect(l.head.value).toEqual(2)
    expect(l.head.next.value).toEqual(1)
  })

  it('Returns the head node', ()=>{
    l.insertFirst(1);
    l.insertFirst(2);
    expect(l.getFirst().value).toEqual(2)
  })

  it('Returns null if no head node is set', ()=>{
    expect(l.getLast()).toEqual(null);
  })

  it('Returns the head node if no next node is available', ()=>{
    l.insertFirst(1);
    expect(l.getLast().value).toEqual(1);
    expect(l.getLast().next).toEqual(null);
  })

  it('Returns the last node', ()=>{
    l.insertFirst(1);
    l.insertLast(2);
    expect(l.getFirst().next.value).toEqual(2);
    expect(l.getLast().value).toEqual(2);
  })

  it('Returns the midpoint node', ()=>{
    l.insertFirst(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    l.insertLast(5);
    expect(l.getMidPoint().value).toEqual(2);
    l.insertLast(6);
    expect(l.getMidPoint().value).toEqual(3);
  })

  describe('InsertAt function checks',()=>{
    it('Returns null if the list is empty', ()=>{

      expect(l.insertAt(1,2)).toBe(null);
    });
    it('Returns null if the passed position is greater than the list length', ()=>{
      l.insertFirst(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      expect(l.insertAt(5, 6)).toBe(null);
      l.insertAt(6, 2);
      const node = l.getAt(2)
      expect(node.value).toBe(6);
      expect(node.next.value).toBe(3);
    })
  })

  describe('Cyclic function check', ()=>{
    it('Returns false for empty list', ()=>{
      expect(l.isCyclic()).toBe(false);
    })

    it('Returns false for no cycle', ()=>{
      l.insertFirst(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      expect(l.isCyclic()).toBe(false);
    })

    it('Returns true for a list with cycle in the middle', ()=>{
      l.insertFirst(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      l.getLast().next = l.getFirst().next;
      expect(l.isCyclic()).toBe(true);
    })

    it('Returns true for a list with cycle back to the head', ()=>{
      l.insertFirst(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      l.insertLast(5);
      l.getLast().next = l.getFirst();
      expect(l.isCyclic()).toBe(true);
    })

    it('Returns false for a single node with no cycle', ()=>{
      l.insertFirst(1);
      expect(l.isCyclic()).toBe(false);
    })

    it('Returns true for a single node with cycle', ()=>{
      l.insertFirst(1);
      l.head.next = l.head;
      expect(l.isCyclic()).toBe(true);
    })
  })


  describe("Cyclic start function check", ()=>{
    it('Returns false if no cycle is found', ()=>{
      l.insertFirst(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      l.insertLast(5);
      expect(l.findCyclicStart()).toBe(null);
    });

    it('Returns the start node value if cycle is found', ()=>{
      l.insertFirst(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      l.insertLast(5);
      l.getLast().next = l.getFirst().next;
      expect(l.findCyclicStart().value).toEqual(2);
    })
  })

  describe('Reverse function checks', ()=>{
    it('should reverse a list with multiple nodes', ()=>{
      l.insertFirst(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      expect(l.getAt(0).value).toBe(1);
      expect(l.getAt(1).value).toBe(2);
      expect(l.getAt(2).value).toBe(3);
      expect(l.getAt(3).value).toBe(4);

      l.reverseList();
      
      expect(l.getAt(0).value).toBe(4);
      expect(l.getAt(1).value).toBe(3);
      expect(l.getAt(2).value).toBe(2);
      expect(l.getAt(3).value).toBe(1);
    })

    it('Reverse the list with single element', ()=>{
      l.insertFirst(1);
      l.reverseList();
      expect(l.getAt(0).value).toBe(1);
      expect(l.getAt(1)).toBe(null);
    })

    it('Reverse an empty list', ()=>{
      expect(l.getAt(0)).toBe(null);
      l.reverseList();
      expect(l.getFirst()).toBe(null);
    })
  })

  describe('Remove Duplicates from list checks', ()=>{
    it('Removes multiple duplicates',()=>{
      l.insertFirst(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(2);
      l.insertLast(1);
      l.insertLast(2);
      l.removeDuplicates();
      expect(l.size()).toBe(3);
      expect(l.getAt(0).value).toBe(1);
      expect(l.getAt(1).value).toBe(2);
      expect(l.getAt(2).value).toBe(3);
      expect(l.getAt(3)).toBe(null);
    })

    it('Works with no duplicates', ()=>{
      l.insertFirst(1);
      l.insertLast(2);
      l.insertLast(3);
      l.removeDuplicates();
      expect(l.size()).toBe(3);
      expect(l.getAt(0).value).toBe(1);
      expect(l.getAt(1).value).toBe(2);
      expect(l.getAt(2).value).toBe(3);
      expect(l.getAt(3)).toBe(null);
    });

    it('handles single element list',()=>{
      l.insertFirst(1);
      l.removeDuplicates();
      expect(l.size()).toBe(1);
      expect(l.getAt(0).value).toBe(1);
      expect(l.getAt(1)).toBe(null);
    });

    it('handles empty list', ()=>{
      l.removeDuplicates();
      expect(l.getFirst()).toBe(null);
    })
  })

  describe('Get Node from a specific position from last ',()=>{
    it('Returns the last node when pos is 1 ',()=>{
      l.insertLast(10);
      l.insertLast(20);
      l.insertLast(30);
      l.insertLast(40);
      expect(l.getNodeFromEnd(1).value).toBe(40)
    })

    it('Returns the head node when the position passed is the length of the list', ()=>{
      l.insertLast(10);
      l.insertLast(20);
      l.insertLast(30);
      l.insertLast(40);
      const length = l.size();
      expect(l.getNodeFromEnd(length).value).toBe(10)
    });

    it('should return the correct node from the middle',()=>{
      l.insertLast(10);
      l.insertLast(20);
      l.insertLast(30);
      l.insertLast(40);
      l.insertLast(50);
      expect(l.getNodeFromEnd(3).value).toBe(30);
    });

    it('should return null for an empty list', ()=>{
      expect(l.getNodeFromEnd(1)).toBe(null);
    });

    it('should return null if position is greater than length', ()=>{
      l.insertLast(10);
      l.insertLast(20);
      l.insertLast(30);
      expect(l.getNodeFromEnd(4)).toBe(null);
    });

    it('should handle a single element list with pos = 1', ()=>{
      l.insertLast(10);
      expect(l.getNodeFromEnd(1).value).toBe(10)
    })

  })

  describe('Removal of node checks', ()=>{
    it('Returns null if the list is empty',()=>{
      expect(l.removeNode(1)).toBe(null);
    })
    it('Removes the head node if the value points to head', ()=>{
      l.insertFirst(1);
      expect(l.removeNode(1)).toBe(true);
    })
    it('Removes the node whose value is passed', ()=>{
      l.insertFirst(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      expect(l.removeNode(3)).toBe(true);
      expect(l.getAt(1).next.value).toBe(4);
      expect(l.size()).toBe(3);
    })
  })

  describe('Remove node by ref', ()=>{
    it('cannot remove the last node', ()=>{
      l.insertFirst(1);
      l.insertLast(2);
      expect(l.removeNodeByRef(l.getLast())).toBe(false);
    })

    it('removes the passed node', ()=>{
      l.insertFirst(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      const node = l.getAt(2);
      expect(l.removeNodeByRef(node)).toBe(true);
      expect(l.getAt(2).value).toBe(4)
    })
  })

  describe('Frequency function check', ()=>{
    it('Returns zero if the list is empty', ()=>{
      expect(l.frequency(1)).toBe(0);
    })

    it('Returns zero if the number is not in the list', ()=>{
      l.insertFirst(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      expect(l.frequency(5)).toBe(0);
    })

    it('Returns the count of the given number in the list', ()=>{
      l.insertFirst(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      l.insertFirst(1);
      l.insertLast(1);
      l.insertLast(1);
      l.insertLast(2);
      expect(l.frequency(1)).toBe(4);
    })
  })
  describe('Print function check', ()=>{
    it('Prints empty string if the list is empty', ()=>{
      expect(l.print()).toBe('');
    })
    it('Prints single value if list has single value', ()=>{
      l.insertFirst(1);
      expect(l.print()).toBe('1');
    })
    it('prints all nodes values in the list', ()=>{
      l.insertFirst(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      l.insertLast(5);
      expect(l.print()).toBe('1->2->3->4->5');
    })
  })

  describe('Remove Alternate Nodes function check',()=>{
    it('returns null for empty list',()=>{
      expect(l.removeAlternateNodes()).toBeNull();
    })
    it('returns the head node for list with single element', ()=>{
      l.insertFirst(1);
      l.removeAlternateNodes();
      expect(l.getAt(0).value).toBe(1);
      expect(l.getAt(0).next).toBeNull();
    })
    it('Removes the alternate nodes in the list', ()=>{
      l.insertFirst(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      l.insertLast(5);
      l.insertLast(6);
      l.removeAlternateNodes();
      expect(l.print()).toEqual('1->3->5->6')
    })
  })
  
})