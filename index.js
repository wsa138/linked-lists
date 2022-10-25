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
    let node = linkedListObj.head;
    while (node.next) {
      node = node.next;
    }
    return node;
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
  };

  return linkedListObj;
};

let test = LinkedList();
test.append('a');
test.append('b');
test.prepend('z');
test.append('c');
console.log(test.head);
