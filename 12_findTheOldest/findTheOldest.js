const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const getAge = ({ yearOfBirth, yearOfDeath }) => yearOfDeath - yearOfBirth; // use 2 objects to calculate age
const findTheOldest = function(people) {
  let age = getAge(people[0]); 
  return people.reduce((group, person) => {
    const personAge = getAge(person);
    if (personAge > age) {
      age = personAge;
      return person;
    }
    return group;
  });
}



console.log(findTheOldest(people));



// Do not edit below this line
module.exports = findTheOldest;
