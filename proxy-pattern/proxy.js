const person = {
  name: "Joe",
  age: 34,
  nationality: "USA",
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log("Hm..This property doesn't seem to exist");
    } else {
      console.log(`The value of ${prop} is ${obj[prop]}`);
    }
  },
  set: (obj, prop, value) => {
    if (prop === "age" && typeof value !== "number") {
      console.log("The age property can only be a number");
    } else if ((prop === "name") & (value.length < 2)) {
      console.log("You need to provide a valid name");
    } else {
      console.log(`Change ${prop} from ${obj[prop]} to ${value}`);
      obj[prop] = value;
    }
    return true;
  },
});

personProxy.nonExistingProperty;
personProxy.name = "";
personProxy.age = 44;
