"use strict";

//Complete this algo
const isLoop = linkedlist => {
  let pointer = linkedlist.head;
  let prev = {
    // 1: true,
    // 2: true,
    // 3: true
  };

  if (!pointer) return false;

  while (pointer.next) {
    prev[pointer.value] = true;
    if (prev[pointer.next.value]) {
      return true;
    }
    pointer = pointer.next;
  }

  return false;
};

const findLoop = linkedlist => {
  let pointer = linkedlist.head;
  let prev = {
    // 1: true,
    // 2: true,
    // 3: true
  };

  if (!pointer) return "there is no loop, silly.";

  while (pointer.next) {
    prev[pointer.value] = true;
    if (prev[pointer.next.value]) {
      return pointer.value;
    }
    pointer = pointer.next;
  }

  return "there is no loop, silly.";
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = { isLoop, findLoop };
