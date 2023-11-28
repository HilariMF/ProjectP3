function editRow(btn) {
  var fila = btn.parentNode.parentNode,
    celdas = fila.getElementsByTagName("td"),
    txtName = document.getElementById("studentName"),
    txtLastName = document.getElementById("studentLastname"),
    txtId = document.getElementById("studentID"),
    txtGrade = document.getElementById("studentGrade"),
    tabla = fila.parentNode;

  txtName.value = celdas[0].textContent;
  txtLastName.value = celdas[1].textContent;
  txtId.value = celdas[2].textContent;
  txtGrade.value = celdas[3].textContent;

  tabla.rowIndex = fila.rowIndex - 1;
}
