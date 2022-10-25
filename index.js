const Node = (value = null, next = null) => {
  return {
    value: value,
    next: next,
  };
};

const LinkedList = () => {
  let list = [];

  const append = (value) => {
    let newNode = Node(value);
    if (list.length > 0) {
      list[list.length - 1].next = newNode;
    } else {
      list.push(newNode);
    }
  };

  const prepend = (value) => {
    let newNode = Node(value);
    newNode.next = list[0];
    linkedListObj.list = [newNode];
  };

  let linkedListObj = { list, append, prepend };

  return linkedListObj;
};

let test = LinkedList();
test.append('a');
test.append('b');
test.prepend('z');
console.log(test.list);
