const list = [5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 3, 2, 2, 1, 5, 5];

const nth_most_rate_signature = (list, n) => {
  //count the occurence of each number in the array
  let counter = new Map();
  for (let i = 0; i < list.length; i++) {
    if (counter.has(list[i])) {
      counter.set(list[i], counter.get(list[i]) + 1);
    } else {
      counter.set(list[i], 1);
    }
  }

  //sort by occurence
  let sorted = new Map([...counter.entries()].sort());

  //converting it back to an array but sorted in ascending order i.e from rarest to least rare
  let sortedkeys = [...sorted.keys()];

  //return the value at the nth position
  return sortedkeys[n - 1];
};

console.log(nth_most_rate_signature(list, 2));
