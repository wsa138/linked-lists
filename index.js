const Node = (value = null, next = null) => {
  return {
    value: value,
    next: next,
  };
};

const LinkedList = () => {
  let head = null;

  const append = (value) => {
    let newNode = Node(value);
    if (linkedListObj.head === null) {
      linkedListObj.head = newNode;
    } else {
      let node = linkedListObj.head;
      while (node.next !== null) {
        node = node.next;
      }
      node.next = newNode;
    }
  };

  const prepend = (value) => {
    let newNode = Node(value);
    newNode.next = linkedListObj.head;
    linkedListObj.head = newNode;
  };

  const size = () => {
    let total = 0;
    let node = linkedListObj.head;
    while (node !== null) {
      total += 1;
      node = node.next;
    }
    return total;
  };

  const firstNode = () => {
    return linkedListObj.head;
  };

  const lastNode = () => {
    let last;
    let node = linkedListObj.head;
    while (node.next !== null) {
      node = node.next;
      last = node;
    }
    return last;
  };

  const at = (index) => {
    let node = linkedListObj.head;
    let i = 0;
    while (i !== index) {
      node = node.next;
      i++;
    }
    return node;
  };

  const pop = () => {
    let lastNode = linkedListObj.head;
    let currentNode = linkedListObj.head;
    // When the currentNode has next=null, return the lastNode.
    if (lastNode === null || lastNode.next === null) {
      linkedListObj.head = null;
    } else {
      while (currentNode.next !== null) {
        lastNode = currentNode;
        currentNode = currentNode.next;
      }
      lastNode.next = null;
    }
  };

  const contains = (value) => {
    let node = linkedListObj.head;
    while (node) {
      if (node.value === value) {
        return true;
      }
      if (node.next === null) {
        return false;
      }
      node = node.next;
    }
  };

  let linkedListObj = {
    head,
    append,
    prepend,
    size,
    firstNode,
    lastNode,
    at,
    pop,
    contains,
  };

  return linkedListObj;
};

let test = LinkedList();
test.append('a');
test.append('b');
test.prepend('z');
test.append('c');
console.log(test.head);
