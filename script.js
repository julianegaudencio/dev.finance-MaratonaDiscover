const Modal = {
    open(){
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close(){
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

const transactions =  [
    {
        id: 1,
        description: 'Luz',
        amount: -30000,
        date: '27/02/2021',
    }, 
    {
        id: 2,
        description: 'Website',
        amount:200000,
        date: '27/02/2021',

    }, 
    {
        id: 3,
        description: 'Internet',
        amount: -10000,
        date: '27/02/2021',

    },
    {
        id: 4,
        description: 'App',
        amount: -5000,
        date: '27/02/2021',
    }

]

const Transaction = {
    incomes(){
        //somar as entradas
    },
    expenses(){
        //somar as saídas
    },
    total(){
        // entradas - saídas
    }
}

const DOM = {
    addTransaction(transaction, index) {
        console.log(transaction)
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction()

        console.log(tr.innerHTML)
    },
    innerHTMLTransaction() {

        const html = `
                <td class="description">Luz</td>
                <td class="expense">- R$ 500,00</td>
                <td class="date">23/01/2021</td>
                <td>
                    <img src="assets/minus.svg" alt="Remover transação">
                </td>
                `

                return html
    }
}


