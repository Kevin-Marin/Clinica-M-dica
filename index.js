let consultas = [];
let novaConsulta = {
  paciente: "",
  medico: "",
  data: "",
  hora: "",
};
let alterar;
let cancelados = [];
let indiceAtualizar;
let atributoAtualizar

console.log("Para marcar uma nova consulta, digite o nome do paciente:");

process.stdin.on("data", function (data) {
  data = data.toString().trim();

  if (data == "3") {
    process.exit();
  } else if (data == "1") {
    console.log("Qual o nome do paciente que deseja alterar?");
    alterar = true;
  } else if (data == "2") {
    console.log("Qual o nome do paciente para cancelamento?");
    alterar = false;
  } else {
    if (alterar === true) {
      console.log("Consulta do paciente " + data + " será alterada.");
      console.log("Qual informação deseja alterar?");
      switch (alterar) {
        case "1":
            console.log("Atualizando consulta");
            if(!indiceAtualizar) {
              indiceAtualizar = data
              console.log("Qual atributo você deseja mudar? Digite o nome")
              let atributos = Object.keys(consultas[indiceAtualizar])
              for (let i = 0; i < atributos.length; i++) {
                console.log(atributos[i])
              }
            } else if(!atributoAtualizar) {
              atributoAtualizar = data
              console.log("Qual é o novo valor?")
            } else {
              consultas[indiceAtualizar][atributoAtualizar] = data
              console.log("Dado atualizado com sucesso")
              indiceAtualizar = undefined
              atributoAtualizar = undefined
              opcao = undefined
            }
            break;
      

      }
      alterar = undefined;
    } else if (alterar === false) {
      console.log("Consulta do paciente " + data + " será cancelada.");
      cancelados.push(data);
      alterar = undefined;
    } else {
      if (!novaConsulta.paciente) {
        novaConsulta.paciente = data;
        console.log(`Agora, digite o nome do médico:`);
      } else if (!novaConsulta.medico) {
        novaConsulta.medico = data;
        console.log(`Qual a data da consulta? ex (dd/mm/aaaa)`);
      } else if (!novaConsulta.data) {
        novaConsulta.data = data;
        console.log("Em qual horário?");
      } else if (!novaConsulta.hora) {
        novaConsulta.hora = data;
        consultas.push({
          paciente: novaConsulta.paciente,
          medico: novaConsulta.medico,
          data: novaConsulta.data,
          hora: novaConsulta.hora,
        });
        novaConsulta = {
          paciente: "",
          medico: "",
          data: "",
          hora: "",
        };
        console.log("Consulta agendada, confira abaixo:");
        console.log(consultas);

        console.log(`Digite o nome do próximo paciente ou...
    1 - para alterar;
    2 - para cancelar;
    3 - sair;`)
      }else if(!indiceAtualizar) {
        indiceAtualizar = data
        console.log("Qual atributo você deseja mudar?")
        let atributos = Object.keys(consultas[indiceAtualizar])
            for(let i = 0; i < atributos.length; i++) {
                console.log(atributos[i])
            }

        
      }else if(!atributoAtualizar) {
        atributoAtualizar = data
        console.log("qual é o novo valor?")
      } else {
        consultas[indiceAtualizar][atributoAtualizar] = data
        console.log("dados atualizados com sucesso")
        indiceAtualizar = undefined
        atributoAtualizar = undefined
      }
    }
  }
});
