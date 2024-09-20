export default class Employee {

    employeedrp = "a[title='Employees']"
    AddnewEmp = "a[title='Add new Employee']"
    listofEmp = "a[title='Employee list']"
    fname= "#fname"
    lname= "#lname"
    phoneflagdrp = "div[class='iti__selected-flag']"
    txtcountry = "input[placeholder='Search']"
    countryoption = "li[role='option']"
    phoneno = "#phone"
    selectrole = "select[name='role_id']"
    managerrole = "option[value='2']" //Manager
    emppfpupload = "#customFileUpload"
    email = "#email"
    password = "#signupSrPassword"
    confrmpassword = "#signupSrConfirmPassword" 
    confirmmessage = ".toast-message"
    submit = "button[type='submit']"
    table = "#set-rows > tr>td:nth-child(2)"
    deleteEmp = ".tio-delete-outlined"
    confirmDeletion = "button[class='swal2-confirm swal2-styled']"

    clickEmpdrp()
    {
        cy.get(this.employeedrp).click({force:true})
    }

    clickNewEmp()
    {
        cy.get(this.AddnewEmp).click({force:true})
    }

    inputEmpName(fname, lname)
    {
        cy.get(this.fname).type(fname)
        cy.get(this.lname).type(lname)
    }

    selectCountry(country)
    {
        cy.get(this.phoneflagdrp).click()
        cy.get(this.txtcountry).type(country)
        return cy.get(this.countryoption)
    }

    inputPhoneno(phoneNo)
    {
        cy.get(this.phoneno).type(phoneNo)
    }

    SelectRole(role)
    {
        cy.get(this.selectrole).select(role)
    }

    uploadEmpPfp(filepath)
    {
        cy.get(this.emppfpupload).selectFile(filepath)
    }

    inputEmail(email)
    {
        cy.get(this.email).type(email)
    }

    Password(pwd)
    {
        cy.get(this.password).type(pwd)
        cy.get(this.confrmpassword).type(pwd)
    }

    Submit()
    {
        cy.get(this.submit).click()
    }

    ConfirmEmpCreation()
    {
        return cy.get(this.confirmmessage)
        //Employee added successfully 
    }

    ListofEmp()
    {
        cy.get(this.listofEmp).click({force:true})
    }

    ConfirmEmp(no)
    {
        return cy.get("#set-rows > tr>td:nth-child("+no+")")
    }

    DeleteEmp()
    {
        cy.get(this.deleteEmp).click()
        cy.get(this.confirmDeletion).click()
    }

    ConfirmEmpDeletion()
    {
        return cy.get(this.confirmmessage)
        //Employee deleted successfully 
    }



}