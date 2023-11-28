function deleteRow(btn) {
  Swal.fire({
    title: "¿Desea eliminar al alumno?",
    icon: "warning",
    showDenyButton: true,
    confirmButtonText: "Si, eliminar",
    denyButtonText: "No, cancelar",
  }).then((response) => {
    if (response.isConfirmed) {
      var fila = btn.parentNode.parentNode;
      var tabla = fila.parentNode;
      tabla.deleteRow(fila.rowIndex - 1);
    }
  });
}
