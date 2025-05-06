let clientes = []

function criarCliente(cliente) {
    let nameValue = document.querySelector('#nomeCliente').value;
    let emailValue = document.querySelector('#emailCliente').value;

    let clienteJaExiste = clientes.some((infocliente) => infocliente.nome === nameValue);

    if (clienteJaExiste) {
        alert('Já existe');
    }
    else {
        clientes.push({
            nome: nameValue,
            email: emailValue
        })
        alert('criou')
        cliente = document.querySelector("#tabela")
        cliente.innerHTML += `  <tr class="text-[#464646]">
                            <td class="">1</td>
                            <td>${nameValue}</td>
                            <td>${emailValue}</td>
                            <td>telefone</td>
                            <td>Online</td>
                            <td class="flex justify-center items-center py-[20px]  gap-[5px]">
                                <box-icon type='solid' name='pencil'
                                    class="fill-pink-600 p-2 w-[40px] h-[40px] rounded-full cursor-pointer hover:bg-pink-600 hover:fill-white duration-[600ms]"
                                    onclick="editar()"></box-icon>
                                <box-icon type='solid' name='trash'
                                    class="fill-pink-600 p-2 w-[40px] h-[40px] rounded-full cursor-pointer hover:bg-pink-600 hover:fill-white duration-[600ms]"></box-icon>
                            </td>
                        </tr>`
    }

}