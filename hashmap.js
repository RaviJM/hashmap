class HashMap {
  constructor() {
    this.hashArray = [];
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % primeNumber;
    }

    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);
    if (this.hashArray[hashCode] == null) {
      // make sub array and insert the new key-value pair
      let subArray = [];
      let tempObj = {};
      tempObj[key] = value;
      subArray.push(tempObj);
      this.hashArray[hashCode] = subArray;
      return;
    } else {
      this.hashArray[hashCode].forEach((element) => {
        for (let k in element) {
          if (k == key) {
            // update the value for that key
            element[k] = value;
            return;
          }
        }
      });
    }
    // make new key-value pair and append
    let subArray = [];
    let tempObj = {};
    tempObj[key] = value;
    subArray.push(tempObj);
    this.hashArray[hashCode] = subArray;
    return;
  }

  get(key) {
    let val = null;
    const hashCode = this.hash(key);
    let subArray = this.hashArray[hashCode];

    if (subArray == null) {
      return null;
    } else {
      subArray.forEach((element) => {
        for (let k in element) {
          if (k == key) {
            val = element[k];
            break;
          }
        }
      });
    }
    return val;
  }

  has(key) {
    let ans = false;

    const hashCode = this.hash(key);
    let subArray = this.hashArray[hashCode];
    if (subArray == null) {
      return false;
    } else {
      subArray.forEach((element) => {
        for (let k in element) {
          if (k == key) {
            ans = true;
            break;
          }
        }
      });
    }
    return ans;
  }

  remove(key) {
    let ans = false;
    const hashCode = this.hash(key);
    let subArray = this.hashArray[hashCode];
    if (subArray == null) {
      return false;
    } else {
      let index = 0;
      subArray.forEach((element) => {
        for (let k in element) {
          if (k == key) {
            subArray.splice(index, 1);
            ans = true;
          }
        }
        index++;
      });
      return ans;
    }
  }

  length() {
    let count = 0;
    this.hashArray.forEach((element) => {
      if (element == null) {
        // do nothing
      } else {
        let subArray = element;
        subArray.forEach((subElement) => {
          count++;
        });
      }
    });
    return count;
  }

  clear() {
    this.hashArray = [];
    // let index = 0;
    // this.hashArray.forEach((element) => {
    //   if (element == null) {
    //     // do nothing
    //   } else {
    //     console.log(index);
    //     this.hashArray.splice(index, 1);
    //   }
    //   index++;
    // });
    // console.log(this.hashArray);
  }

  keys() {
    let keyArray = [];

    this.hashArray.forEach((element) => {
      if (element == null) {
        // do nothing
      } else {
        let subArray = element;
        subArray.forEach((ele) => {
          for (let k in ele) {
            keyArray.push(k);
          }
        });
      }
    });

    return keyArray;
  }

  values() {
    let valueArray = [];

    this.hashArray.forEach((element) => {
      if (element == null) {
        // do nothing
      } else {
        let subArray = element;
        subArray.forEach((ele) => {
          for (let k in ele) {
            valueArray.push(ele[k]);
          }
        });
      }
    });

    return valueArray;
  }

  entries() {
    let entriesArray = [];

    this.hashArray.forEach((element) => {
      if (element == null) {
        // do nothing
      } else {
        let subArray = element;
        subArray.forEach((ele) => {
          for (let k in ele) {
            let subSubArray = [];
            subSubArray.push(k);
            subSubArray.push(ele[k]);
            entriesArray.push(subSubArray);
          }
        });
      }
    });

    return entriesArray;
  }
}

let hm = new HashMap();

// console.log(hm.hash("Ravi"));
// console.log(hm.hash("Garima"));
// console.log(hm.hash("Khushi"));

hm.set("ravi", 18);
hm.set("garima", 15);

// console.log(hm.get("ravi"));
// console.log(hm.get("garima"));

// console.log(hm.has("ravi"));

// console.log(hm.remove("garima"));

// hm.clear();

// console.log(hm.keys());

// console.log(hm.values());

// console.log(hm.entries());
