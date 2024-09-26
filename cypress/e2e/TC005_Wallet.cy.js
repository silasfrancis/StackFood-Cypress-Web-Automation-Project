import Wallet from "../PageObjects/WalletPage";

describe('Wallet Module', ()=>{
    const wallet = new Wallet()

    beforeEach('Login', ()=>{
        cy.Login()

    })

    it('Add Wallet Method', ()=>{
        wallet.clickonwalletMethod()
        wallet.clickAddnewMethod()
        wallet.selectMethod("6cash")
        wallet.inputAccountdetails(cy.generateRandomString(5), cy.generateRandomNumber(10))
        wallet.submitMethod()
        wallet.confirmationMsg().then( (msg)=>{
            
            let confirmmsg = msg.text()
            expect(confirmmsg).to.equal("Withdraw method stored")
        })

    })
    
    it('Request Withdrawal', ()=>{
        wallet.clickonWallet()
        wallet.RequestWithdrawal()
        wallet.SelectWithdrawalMethod("6cash")
        wallet.inputAmount(cy.generateRandomNumber(3))
        wallet.SubmitWithdrawal()

        
    })

    it('Delete Wallet Method', ()=>{

        wallet.clickonwalletMethod()
        wallet.DeleteMethod()
        wallet.confirmDelete()
        wallet.confirmationMsg().then( (msg)=>{
            
            let confirmmsg = msg.text()
            assert.equal(confirmmsg, "Method deleted successfully")
        })
    })
})