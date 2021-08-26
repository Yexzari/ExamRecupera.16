const materia = {
    nombre: "Aplicaciones Web",
    horario: "9:00 a 10:45 hrs"
};
var curso={
    nombre:"",
    Descripcon:"",
    medicamento:"",
    
    docente:{
        nombre:"",
        fechar:"",
        cursos:""
    }
}
function actualizar(){
    console.log ("Se llamo a actualizar");

    curso.nombre = document.getElementById("nombre").value;
    curso.descripcion = document.getElementById("descripcion").value;
    curso.docente.nombre = document.getElementById("docente").value;
    curso.docente.cursos = document.getElementById("cursos").value;
    curso.medicamento = document.getElementById("medicamento").value;
    curso.fechar = document.getElementById("fechar").value;
    console.log(curso);
    function nota(fechar){
        this.fechar=curso;
        }
    let notaCapturar=document.getElementById("fechar").value;
    descripcionn = new nota(notaCapturar);
    console.log(descripcionn);
    agregar();
    
    }
    var notas = [];
    function  agregar () {
    notas.push(descripcionn);
    console.log(notas);
    document.getElementById("table").innerHTML += '</thead><tbody><tr><th>'+"Fecha receta: "+curso.fechar+"<br>"+
    "Médico: "+curso.nombre+"<br>"+
    "Cédula: "+curso.descripcion+"<br>"+
    "Paciente: "+curso.docente.nombre+"<br>"+
    "Fecha de expedición:"+curso.docente.cursos+"<br>"+
    "Medicamentos: "+curso.medicamento+'</th></tr></tbody>';
        limpiar();
}
/*
function actualizarFicha(){
    document.getElementById("titulo").innerHTML = curso.nombre;
    document.getElementById("descrip").innerHTML = curso.descripcion;
    document.getElementById("nombre-docente").innerHTML = curso.docente.nombre;
    document.getElementById("total").innerHTML = curso.docente.cursos;
    document.getElementById("medicamentos").innerHTML = curso.medicamento;
    document.getElementById("fech").innerHTML = curso.fechar;
    limpiar();
}*/
function limpiar() {
    nombre.value = "";
    descripcion.value = "";
    docente.value = "";
    fechar.value = "";
    medicamento.value = "";
    cursos.value = "";
    }