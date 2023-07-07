const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function main(arr) {
  const root = document.getElementById(`root`);
  const h1 = document.createElement(`h1`);
  h1.innerHTML = `FREELANCERS`;
  root.appendChild(h1);

  const ul = document.createElement(`ul`);
  root.appendChild(ul);
  ul.classList.add(`listBox`)
  
  for (i = 0; i <= arr.length; i++) {
    const name = document.createElement(`li`);
    name.classList.add(`users`);
    name.innerHTML = arr[i].name;
    ul.appendChild(name);

    const personStats = document.createElement(`ul`);
    name.appendChild(personStats);
    personStats.classList.add(`stats`);

    const age = document.createElement(`li`);
    age.innerHTML = `Age: ${arr[i].age}`;
    personStats.appendChild(age);

    const occupation = document.createElement(`li`);
    occupation.innerHTML = `Occupation: ${arr[i].occupation}`;
    personStats.appendChild(occupation);
  }
}

//call the main function
main(users);