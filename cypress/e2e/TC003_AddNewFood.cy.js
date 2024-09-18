import Food from "../PageObjects/FoodPage"

describe('Food Module', ()=>{

    const food = new Food();

    it('Add New Food', ()=>{
        cy.Login()
        food.clickOnfoodDrp()
        food.clickonAddnewFood()
        food.Foodname('Deluxe Burger')
        food.FoodDescription('Burger for Test')
        food.FoodImageUpload("cypress/fixtures/burger.jpg")
        food.FoodCategory('Burger')
        food.validateCategorySelection().should('have.text', 'Burger')
        food.FoodSubCategory('Kubie Burger')
        food.validateSubCategorySelection().should('have.text', 'Kubie Burger')
        food.FoodTypes('Non veg')
        //food.AddOns('Coke')
        // food.AddOns('Extra Chicken')
        // food.ValidateAddons(1).should('have.text', 'Coke')
        // food.ValidateAddons(2).should('have.text', 'Extra Chicken')
        food.Time('12:00', '22:00')
        food.PriceInfo(10, 2, 50)
        food.StockType('Daily Stock')
        cy.wait(3000)
        food.ItemStock(400)
        food.Tags('#burgers')
        food.Submit()


    })
})