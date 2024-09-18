import Orders from "../PageObjects/OrdersPage"

describe('Orders', ()=>{

    const order = new Orders();

    it('Sorrt through All Orders', ()=>{
        cy.Login()
        order.clickOrdersDrp()
        order.clickAllOrders()
        cy.log(order.readingStatusOfAllOrders())
      
        cy.wrap(order.readingStatusOfAllOrders()).then((statuses) => {
            expect(Array.isArray(statuses)).to.be.true;

            expect(statuses.filter(order => order.trim().startsWith("Delivered"))).to.have.length(15);
            expect(statuses.filter(order => order.trim().startsWith("Pending"))).to.have.length(51)
            expect(statuses.filter(order => order.trim().startsWith("Out for delivery"))).to.have.length(3)
            expect(statuses.filter(order => order.trim().startsWith("Refund request canceled"))).to.have.length(3)

           
          });


    })

})