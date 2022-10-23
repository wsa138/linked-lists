const LinkedList = () => {
  const list = [];
  const append = (value) => {
    return list.push(value);
  };
  const prepend = (value) => {
    return list.unshift(value);
  };
  const size = () => {
    return list.length;
  };
  const head = () => {
    return list[0];
  };
  const tail = () => {
    return list[list.length - 1];
  };
  const at = (index) => {
    return list[index];
  };
  const pop = () => {
    list.pop();
  };
  return { list, append, prepend, size, head, tail, at, pop };
};

const Node = () => {
  const value = () => {
    return null;
  };

  const nextNode = null;
};

const test = LinkedList();
test.append(1);
test.append(2);
test.append(3);

console.log(test);
console.log(test.append(4));
console.log(test.prepend(0));
console.log(test.size());
console.log(test.head());
console.log(test.tail());
console.log(test.at(1));
console.log(test.pop());
console.log(test);
