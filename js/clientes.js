
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
        <td class="">1</td>
        <td>${cliente.nome}</td>
        <td>${cliente.email}</td>
        <td>${cliente.tel}</td>
        <td>${cliente.data}</td>
        <td>Ativo</td>
        <td class="flex justify-center items-center py-[20px]  gap-[5px]">
        <box-icon type='solid' name='pencil'
        class="fill-pink-600 p-2 w-[40px] h-[40px] rounded-full cursor-pointer hover:bg-pink-600 hover:fill-white duration-[600ms]"
        onclick="editar()"></box-icon>
        <box-icon type='solid' name='trash'
        class="fill-pink-600 p-2 w-[40px] h-[40px] rounded-full cursor-pointer hover:bg-pink-600 hover:fill-white duration-[600ms]"></box-icon>
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
        clientes.push({
            nome: nameValue,
            email: emailValue,
            tel: telValue,
            data: dataValue,
        })
        sessionStorage.setItem('clientes', JSON.stringify(clientes))
        closeAll()

    }


}