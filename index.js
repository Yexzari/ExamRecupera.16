const materia = {
    nombre: "Aplicaciones Web",
    horario: "9:00 a 10:45 hrs"
};


/*
var nombre = "Aplicaciones Web";
if (true) {
    var nombre = "Base de datos";
    console.log(nombre);
}
console.log(nombre);*/
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
    actualizarFicha();
}

function actualizarFicha(){
    document.getElementById("titulo").innerHTML = curso.nombre;
    document.getElementById("descrip").innerHTML = curso.descripcion;
    document.getElementById("nombre-docente").innerHTML = curso.docente.nombre;
    document.getElementById("total").innerHTML = curso.docente.cursos;
    document.getElementById("medicamentos").innerHTML = curso.medicamento;
    document.getElementById("fech").innerHTML = curso.fechar;

}
function limpiar() {
    nombre.value = "";
    descripcion.value = "";
    docente.value = "";
    fechar.value = "";
    medicamento.value = "";
    cursos.value = "";
    }