import Employee from "../PageObjects/EmployeePage";

describe('Employee Module', ()=> {

    const emp = new Employee();

    function generateRandomString(length) {
        let randomString = '';
        while (randomString.length < length) {
          randomString += Math.random().toString(36).substring(2); 
        }
        return randomString.substring(0, length); 
      }

      function generateRandomNumber(length) {
        const min = Math.pow(10, length - 1);  
        const max = Math.pow(10, length) - 1; 
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
      const randomNumber = generateRandomNumber(5);

    let fname = generateRandomString(5)
    let lname = generateRandomString(5)
    let phoneno = generateRandomNumber(10)
    let email = generateRandomString(5) + generateRandomNumber(2)+"@gmail.com"
    let pwd = generateRandomString(5)+generateRandomNumber(2)+ 'F#'
    
    beforeEach('Login', ()=>{
        cy.Login()

    })
    
    it('Add Employee', ()=>{

        emp.clickEmpdrp()
        emp.clickNewEmp()
        emp.inputEmpName(fname, lname)
        emp.selectCountry('Nigeria').contains('Nigeria').click()
        emp.inputPhoneno(phoneno)
        emp.SelectRole('Manager')
        emp.uploadEmpPfp('cypress/fixtures/test.png')
        emp.inputEmail(email)
        emp.Password(pwd)
        emp.Submit()
        emp.ConfirmEmpCreation().then( (x)=> {

            let confrimationmsg = x.text()
            expect(confrimationmsg).to.equal('Employee added successfully!')
        })

    })

    it('Confrim Employee', ()=>{

        emp.ListofEmp()
        emp.ConfirmEmp(2).contains(fname)
        emp.ConfirmEmp(5).then( (role)=>{

            let empRole = role.text()
            assert.equal(empRole, 'Manager')
        })

        
    })

    it('Delete Employee', ()=>{

        emp.ListofEmp()
        emp.DeleteEmp()
        emp.ConfirmEmpDeletion().then( (x)=> {

            let deletemsg = x.text()
            expect(deletemsg).to.equal('Employee deleted successfully')
        })

        
    })
})