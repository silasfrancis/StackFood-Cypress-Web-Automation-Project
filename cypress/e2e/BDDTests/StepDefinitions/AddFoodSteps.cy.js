import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Food from "../../../PageObjects/FoodPage";

Given("User clicks on Food Module on the Side Menu", ()=>{

    food.clickOnfoodDrp()
})

And("Adds New Food", ()=>{

    food.clickonAddnewFood()
})

When("User Inputs Food Descriptions and Category", ()=>{

    food.Foodname('Deluxe Burger')
    food.FoodDescription('Burger for Test')
    food.FoodImageUpload("cypress/fixtures/burger.jpg")
    food.FoodCategory('Burger')
})

And("Validates Inputs ", ()=>{
    food.validateCategorySelection().should('have.text', 'Burger')

})

Then("User inputs Time for selling and Tags", ()=>{
    food.Time('12:00', '22:00')
    food.PriceInfo(10, 2, 50)
    food.StockType('Daily Stock')
    food.ItemStock(400)
    food.Tags('#burgers')

})

And("Submits Food", ()=>{
    food.Submit()

})