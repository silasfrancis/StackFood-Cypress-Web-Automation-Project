export default class Wallet {

    walletmethod = "li[class='navbar-vertical-aside-has-menu active'] span[class='navbar-vertical-aside-mini-mode-hidden-elements text-truncate']"
    addnewMethod = ".btn.btn--primary.btn-outline-primary.w-100"
    selectMethod = "#withdraw_method" // 6cash, Card
    accountname = "input[name= 'account_name']"
    accountno = "input[name= 'account_number']"
    submit = "#submit_button"
    confirmationmsg = ".toast-message" //Withdraw method stored // Method deleted successfully
    deleteMethod = ".tio-delete-outlined"
    confrimdelete = "button[class='swal2-confirm swal2-styled']"

    ///wallet
    mywallet = "li[class='navbar-vertical-aside-has-menu active'] a[title='My wallet']"
    requestWithdrawal = "a[data-target='#balance-modal']"
    selectwithdrawalmethod = "#withdraw_method"// 6cash, Card
    amount = "input[type='number']"
    submitwithdraw ="button[class='btn btn--primary']"
}