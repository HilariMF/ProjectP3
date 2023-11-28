const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (form.checkValidity()) {
    if (table.rowIndex === undefined) {
      const studentName = form.studentName.value;
      const studentLastname = form.studentLastname.value;
      const studentID = form.studentID.value;
      const studentGrade = form.studentGrade.value;

      const studentObj = {
        studentname: studentName,
        studentlastname: studentLastname,
        studentid: studentID,
        studentgrade: studentGrade,
      };

      const studentJSON = JSON.stringify(studentObj);
      localStorage.setItem("studentData", studentJSON);

      let retrieveJSON = localStorage.getItem("studentData");
      let data = JSON.parse(retrieveJSON);

      const newRow = document.createElement("tr");
      newRow.innerHTML = `
            <td>${data.studentname}</td>
            <td>${data.studentlastname}</td>
            <td>${data.studentid}</td>
            <td>${data.studentgrade}</td>
            <td>
                <button class="btn btn-outline-primary p-1" type="button" onclick = "editRow(this)">Editar</button>
                <button class="btn btn-outline-danger p-1" type="button" onclick = "deleteRow(this)">Eliminar</button>
            </td>
            `;
      table.appendChild(newRow);
      form.reset();
    } else {
      var studentName = form.studentName.value,
        studentLastname = form.studentLastname.value,
        studentID = form.studentID.value,
        studentGrade = form.studentGrade.value,
        fila = table.rows[table.rowIndex],
        celdas = fila.getElementsByTagName("td");

      celdas[0].innerHTML = studentName;
      celdas[1].innerHTML = studentLastname;
      celdas[2].innerHTML = studentID;
      celdas[3].innerHTML = studentGrade;
      form.reset();

      table.rowIndex = undefined;
    }
  }
});
