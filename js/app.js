class UI {
    constructor() {
        this.budgetFeedback = document.querySelector(".budget-feedback");
        this.expenseFeedback = document.querySelector(".expense-feedback");
        this.budgetForm = document.getElementById("budget-form");
        this.budgetInput = document.getElementById("budget-input");
        this.budgetAmount = document.getElementById("budget-amount");
        this.expenseAmount = document.getElementById("expense-amount");
        this.balance = document.getElementById("balance");
        this.balanceAmount = document.getElementById("balance-amount");
        this.expenseForm = document.getElementById("expense-form");
        this.expenseInput = document.getElementById("expense-input");
        this.amountInput = document.getElementById("amount-input");
        this.expenseList = document.getElementById("expense-list");
        this.itemList = [];
        this.itemID = 0;
    }
    //submit budget method
    submitBudgetForm() {
        const value = this.budgetInput.value;
        if (value === '' || value < 0) {
            this.budgetFeedback.classList.add('showItem');
            this.budgetFeedback.innerHTML = `<p>Valor não pode ser vazio ou negativo</p>`;
            const self = this;
            setTimeout(function () {
                self.budgetFeedback.classList.remove('showItem');
            }, 4000);
        }
        else {
            this.budgetAmount.textContent = value;
            this.budgetInput.value = '';
            this.showBalance();
        }
    }
    showBalance() {
        const expense = this.totalExpense();
        const total = parseInt(this.budgetAmount.textContent) - expense;
        this.balanceAmount.textContent = total;
        if (total < 0) {
            //retira-se a cor anterior para não dar bug depois
            this.balance.classList.remove("showGreen", "showBlack");
            this.balance.classList.add("showRed");
        }
        if (total > 0) {
            //retira-se a cor anterior para não dar bug depois
            this.balance.classList.remove("showRed", "showBlack");
            this.balance.classList.add("showGreen");
        }
        if (total === 0) {
            //retira-se a cor anterior para não dar bug depois
            this.balance.classList.remove("showGreen", "showRed");
            this.balance.classList.add("showBlack");
        }

    }
    totalExpense() {
        //valor temporário pois falta mais coisas no projeto.
        let total = 400;
        return total;
    }
}

function eventListenters() {
    const budgetForm = document.getElementById('budget-form');
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');

    //new instance of UI CLASS
    const ui = new UI();

    //budget form submit 
    budgetForm.addEventListener('submit', function (event) {
        event.preventDefault();
        ui.submitBudgetForm();
    })
    //expense form submit
    expenseForm.addEventListener('submit', function (event) {
        event.preventDefault();
    })
    //expense click 
    expenseList.addEventListener('click', function (event) {

    })

}

document.addEventListener('DOMContentLoaded', function () {
    eventListenters();
})