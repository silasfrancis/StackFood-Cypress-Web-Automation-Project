export default class Wallet {

    walletmethod = "li[class='navbar-vertical-aside-has-menu active'] span[class='navbar-vertical-aside-mini-mode-hidden-elements text-truncate']"
    addnewMethod = ".btn.btn--primary.btn-outline-primary.w-100"
    selectMethod = "#withdraw_method" // 6cash, Card
    accountname = "input[name= 'account_name']"
    accountno = "input[name= 'account_number']"
    submit = "#submit_button"
    confirmationmsg = ".toast-message" //Withdraw method stored // Method deleted successfully
    deleteMethod = ".tio-delete-outlined"
    confirmdelete = "button[class='swal2-confirm swal2-styled']"

    ///wallet
    mywallet = "li[class='navbar-vertical-aside-has-menu active'] a[title='My wallet']"
    requestWithdrawal = "a[data-target='#balance-modal']"
    selectwithdrawalmethod = "#withdraw_method"// 6cash, Card
    amount = "input[type='number']"
    submitwithdraw ="button[class='btn btn--primary']"

    clickonwalletMethod()
    {
        cy.get(this.walletmethod).click({force:true})
    }

    clickAddnewMethod()
    {
        cy.get(this.addnewMethod).click({force:true})
    }

    selectMethod(method)
    {
        cy.get(this.selectMethod).select(method)
    }

    inputAccountdetails(accName, accNumber)
    {
        cy.get(this.accountname).type(accName)
        cy.get(this.accountno).type(accNumber)
    }

    submitMethod()
    {
        cy.get(this.submit).click()
    }

    confirmationMsg()
    {
        return cy.get(this.confirmationmsg)
    }

    DeleteMethod()
    {
        cy.get(this.deleteMethod).click()
    }

    confirmDelete()
    {
        cy.get(this.confirmdelete).click()
    }

    clickonWallet()
    {
        cy.get(wallet).click({force:true})
    }

    RequestWithdrawal()
    {
        cy.get(this.requestWithdrawal).click()
    }

    SelectWithdrawalMethod(method)
    {
        cy.get(this.selectwithdrawalmethod).select(method)
    }

    inputAmount(amount)
    {
        cy.get(this.amount).type(amount)
    }

    SubmitWithdrawal()
    {
        cy.get(this.submitwithdraw).click()
    }
}