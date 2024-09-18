export default class Orders{

    ordersdrp = "a[title='Orders']"
    allorders = "a[title='All order']"
    tablerow = "tbody tr"
    orderstatus = "body > main:nth-child(10) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > table:nth-child(3) > tbody:nth-child(2) > tr > td:nth-child(6) > span"
    nexttable = "a[aria-label='Next »']"
    table2= "ul.pagination>li:nth-child(3)>a"

    clickOrdersDrp()
    {
        cy.get(this.ordersdrp).click({force:true})
    }

    clickAllOrders()
    {
        cy.get(this.allorders).click({force:true})
    }

    readingStatusOfAllOrders()
    {

    const Array = [];
    cy.get(this.orderstatus).each(($el) => {
            Array.push($el.text());})
    for(let i =3; i<=4; i++)
    {
        cy.get("ul.pagination>li:nth-child("+i+")>a")
        cy.get(this.orderstatus).each(($el) => {
            Array.push($el.text());})
    }
    return Array;

    }

}