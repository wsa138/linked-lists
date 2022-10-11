const LinkedList = () => {
  const list = [];
  const append = (value) => {
    return list.push(value);
  };
  const prepend = (value) => {
    return list.unshift(value);
  };
  return { list, append, prepend };
};

const Node = () => {
  const value = () => {
    return null;
  };

  const nextNode = null;
};

const test = linkedList();
test.append('1');
test.prepend(0);

console.log(test);
