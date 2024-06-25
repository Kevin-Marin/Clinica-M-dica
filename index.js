let consultas = []
let novaConsulta = 
    {paciente: "",
        medico: "",
        data: "",
        hora: ""
    }
let alterar

console.log("Para marcar uma nova consulta, digite o nome do paciente:");

process.stdin.on("data", function(data) {
    data = data.toString().trim();

    if(data.toLowerCase() == "alterar" || data.toLowerCase() == "cancelar") {
        switch (data.toLowerCase()) {
            case "alterar":
                
                break;
                case "cancelar":
                    
                    break;
            default:
                break;
        }

    }


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
        novaConsulta =
            {paciente: "",
                medico: "",
                data: "",
                hora: ""
            }
        console.log("Consulta agendada, confira abaixo:");
        console.log(consultas);
        console.log("Digite o nome do próximo paciente, 'alterar' para alterar uma consulta ou 'cancelar' para cancelamentos: ")
        
    }
})

