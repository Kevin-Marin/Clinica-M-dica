let consultas = []
let novaConsulta = [
    {paciente: "",
        medico: "",
        data: "",
        hora: ""
    }
]

console.log("Para marcar uma nova consulta, digite o nome do paciente:");

process.stdin.on("data", function(data) {
    data = data.toString().trim();
    if (!novaConsulta.paciente) {
        novaConsulta.paciente = data;
        consultas.push("Paciente: " + novaConsulta.paciente);
        console.log(`Agora, ${novaConsulta.paciente}, digite o nome do médico:`)
    }else if(!novaConsulta.medico) {
        novaConsulta.medico = data;
        consultas.push("Médico: " + novaConsulta.medico);
        console.log(`Qual a data da consulta? ex (dd/mm/aaaa)`);
    }else if(!novaConsulta.data) {
        novaConsulta.data = data
        consultas.push("Data: " + novaConsulta.data);
        console.log("Em qual horário?")
    }else if(!novaConsulta.hora) {
        novaConsulta.hora = data;
        consultas.push("Horário: " + novaConsulta.hora);
        console.log("Consulta agendada, confira abaixo:");
        console.log(consultas);
    }
})

