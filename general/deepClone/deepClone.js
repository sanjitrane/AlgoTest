/** Create a function to deep-clone passed object */

/**Recursive */
const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  const clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
};

/**Iterative */
const deepCloneI = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj; // Return the value if it's not an object
  }

  const clone = Array.isArray(obj) ? [] : {};
  const stack = [{ source: obj, target: clone }];

  while (stack.length) {
    const { source, target } = stack.pop();

    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        const value = source[key];

        if (typeof value === "object" && value !== null) {
          const newTarget = Array.isArray(value) ? [] : {};
          target[key] = newTarget;
          stack.push({ source: value, target: newTarget });
        } else {
          target[key] = value;
        }
      }
    }
  }

  return clone;
};

const originalObj = {
  string: "Hello",
  number: 123,
  array: [1, 2, 3],
  nestedObject: {
    property: "value",
  },
  function: () => {
    console.log("Function");
  },
};

// console.log(deepClone(originalObj))
console.log(deepCloneI(originalObj));
