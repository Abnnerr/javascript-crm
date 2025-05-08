
let clientes = []


function buscarClientes() {
    fetch("http://localhost:3000/clientes")
        .then((response) => response.json())
        .then((lista) => {
            clientes = lista;
            carregarClientes(clientes)
        })
}
buscarClientes();

function carregarClientes(listaDeClientes) {
    let tbodyElement = document.querySelector('#tabela')
    tbodyElement.innerHTML = '';
    listaDeClientes.map((cliente) => {
        tbodyElement.innerHTML += `<tr class="text-[#464646]">
        <td>${cliente.id}</td>
        <td>${cliente.nome}</td>
        <td>${cliente.email}</td>
        <td>${cliente.tel}</td>
        <td>${cliente.data}</td>
        <td>Ativo</td>
        <td class="flex justify-center items-center py-[20px]  gap-[5px]">
        <box-icon type='solid' name='pencil'
        class="fill-pink-600 p-2 w-[40px] h-[40px] rounded-full cursor-pointer hover:bg-pink-600 hover:fill-white duration-[600ms]" onclick="editar('${cliente.id}')"></box-icon>
        <box-icon type='solid' name='trash'
        class="fill-pink-600 p-2 w-[40px] h-[40px] rounded-full cursor-pointer hover:bg-pink-600 hover:fill-white duration-[600ms]" onclick="deletarCliente('${cliente.id}')"></box-icon>
        </td>
        </tr>`;
    })
}


function criarCliente() {
    event.preventDefault()

    // let formData = new FormData(form)
    // let cliente = Object.fromEntries(formData.entries())

    let nameValue = document.querySelector('#nomeCliente').value;
    let emailValue = document.querySelector('#emailCliente').value;
    let telValue = document.querySelector('#telCliente').value;
    let dataValue = document.querySelector('#dataCliente').value;

    let clienteJaExiste = clientes.some((nomecliente) => nomecliente.nome === nameValue) && ((emailcliente) => emailcliente.email === emailValue) && ((telcliente) => telcliente.tel === emailValue) && ((datacliente) => datacliente.data === dataValue);
    ;

    if (clienteJaExiste) {
        alert('Já existe');
    }

    else {
        // clientes.push({
        //     nome: nameValue,
        //     email: emailValue,
        //     tel: telValue,
        //     data: dataValue,
        // })
        fetch('http://localhost:3000/clientes', {
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                nome: nameValue,
                email: emailValue,
                tel: telValue,
                data: dataValue,
            })
            // .then(res => res.json())
            // .then(() => {
            //     carregarClientes(clientes)
            // })
        })
        closeAll()

    }


}
function deletarCliente(id){
    fetch(`http://localhost:3000/clientes/${id}`, {
        method:"DELETE"
    })
    .then(res => res.json())
    .then(() =>  {
        alert(`item ${id} apagado`)
    })
}

function editar(id) {
    let overlayback = document.querySelector('#overlay');
    let editarContei = document.querySelector('#conteiEdit')
    overlayback.classList.remove('invisible', 'opacity-0')
    editarContei.classList.remove('-right-full')
    editarContei.classList.add('right-0')

    let nameEditar = document.querySelector('#editarNome').value;
    let emailEditar = document.querySelector('#editarEmail').value;


    fetch(`http://localhost:3000/clientes/${id}`, {
        method: "PUT",
        headers:  {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nameEditar,
            email: emailEditar,
            // tel: telValue,
            // data: dataValue,
        })
    })
}