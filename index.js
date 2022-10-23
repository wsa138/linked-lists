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
  const contains = (value) => {
    if (list.includes(value)) {
      return true;
    } else {
      return false;
    }
  };
  const find = (value) => {
    for (let x = 0; x < list.length; x++) {
      if (Object.values(list[x]) == value) {
        return x;
      }
    }
  };
  //represents your LinkedList objects as strings, so you can print them out and preview them in the console.
  //The format should be: ( value ) -> ( value ) -> ( value ) -> null
  const convertToString = () => {
    let objStr = '';
    for (let i = 0; i < list.length; i++) {
      objStr += `(${Object.values(list[i])}) -> `;
    }
    objStr += null;
    return objStr;
  };
  return {
    list,
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    convertToString,
  };
};

const Node = () => {
  const value = () => {
    return null;
  };

  const nextNode = null;
};

const test = LinkedList();
test.append({ 1: 'one' });
test.append({ 2: 'two' });
test.append({ 3: 'three' });

console.log(test.list);
console.log(test.append({ 4: 'four' }));
console.log(test.prepend({ 0: 'zero' }));
console.log(test.size());
console.log(test.head());
console.log(test.tail());
console.log(test.at(1));
console.log(test.pop());
console.log(test.contains(2));
console.log(test.contains(4));
console.log(test.find('zero'));
console.log(test.convertToString());
console.log(test.list);
