let $listOfStudents = document.getElementById("listOfStudents");

const students = [
  {
    name: "Martin",
    lastName: "Lant",
    marks: [9, 8, null, 7, 5],
  },
  {
    name: "Francesco",
    lastName: "Portus",
    marks: [5, 4, 2, 3, 2],
  },
  {
    name: "Bill",
    lastName: "Merdoc",
    marks: [10, null, null, null, 10],
  },
  {
    name: "John",
    lastName: "Entman",
    marks: [9, 8, 9, 7, 5],
  },
];

function studentCard(student, id) {
  let average = student.marks.reduce((a, b) => a + b, 0) / student.marks.length;
  return `<ul id="card${id}" class="${average < 5 ? `redCard` : `greenCard`}">
  <li>Name: ${student.name}</li>
  <li>Last Name: ${student.lastName}</li>
  <li>Avarage mark: ${average}</li>
  <li>How many lectures: ${student.marks.filter((a) => a).length}</li>
  </ul>`;
}

function displayStudents() {
  let innerHtml = "";
  for (let i = 0; i < students.length; i++) {
    innerHtml += studentCard(students[i], i);
  }
  $listOfStudents.innerHTML = innerHtml;
  for (let i = 0; i < students.length; i++) {
    let card = document.getElementById(`card${i}`);
    card.addEventListener("click", () => {
      if (card.classList.contains("selected")) {
        card.classList.remove("selected");
      } else {
        card.classList.add("selected");
      }
    });
  }
}

displayStudents();
