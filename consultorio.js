//criar referência aos elementos do HTML

const frm = document.querySelector("form") //Tá selecionando um elemento do html

const respNone = document.querySelector("span");

const respLista = document.querySelector("pre");

const pacientes = []; //declara o vetor global


frm.addEventListener("submit", (e) =>{ //Tudo que tá dentro do formulário tá dentro do frm
    e.preventDefault()//forms não envia os dados
    const nome = frm.inPaciente.value; //obtém o nome do paciente
    pacientes.push(nome); //adiciona o elemento no final do vetor
    console.log(pacientes);
    
    let lista = "" //string para concatenar os pacientes
    for (let i=0; i < pacientes.length; i++){
        lista += `${i + 1}. ${pacientes[i]} \n`;

    }
    console.log(lista)

    respLista.innerText = lista //exibe a lista de pacientes;
    frm.inPaciente.value = '';//limpa o conteúdo do campo
    frm.inPaciente.focus();//posiciona o cursor no campo
});

frm.btnUrgencia.addEventListener('click', () =>{
    if(!frm.checkValidity()){
        alert('Informe o nome do paciente a ser atendido em caráter de urgência');
        frm.inPaciente.focus();
        return//retorna ao form
    }

    const nome = frm.inPaciente.value; //obtem o nome do paciente
    pacientes.unshift(nome);//adiciona paciente no inicio do vetor
    
    let lista = '' //string para concatenar
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${pacientes[i]} \n`));
    
    respLista.innerText = lista //exibe a lista de pacientes;
    frm.inPaciente.value = '';//limpa o conteúdo do campo
    frm.inPaciente.focus();//posiciona o cursor no campo
});