export default class Food{

    fooddrp = "a[title='Food']"
    Addnewfood = "a[title='Add New Food']"
    foodname = "#default_name"
    foodDescription = "#default-form > .mb-0 > .form-control"
    foodimageUpload = "#customFileEg1"
    foodCategory = '#select2-category_id-container > span'
    categoryoptions = ".select2-results__option"
    categorycontainer = "#select2-category_id-container"
    foodSubcategory = "#select2-sub-categories-container > span"
    SubcategoryOptions = "#select2-sub-categories-results>li>span"
    FoodType = "#select2-veg-container"
    foodtypeoptions = '#select2-veg-results>li'
    addon = ".select2-search"
    addonOptions = "#select2-add_on-results>li"
    validateaddons = "ul[class='select2-selection__rendered']>li:nth-child(2)"
    availabletimestarts= "#available_time_starts"
    avaliabletimeEnds = "#available_time_ends"
    unitPrice = "input[name='price']"
    discountPrice = "input[name='discount']"
    maxPurchaseLimit = "#cart_quantity"
    stocktype = "#select2-stock_type-container"
    stockyTypeOptions = "#select2-stock_type-results>li"
    itemstock= "#item_stock"
    tags= ".bootstrap-tagsinput > input"
    submit= "button[type='submit']"

    clickOnfoodDrp()
    {
        cy.get(this.fooddrp).click({force:true})
    }

    clickonAddnewFood()
    {
        cy.get(this.Addnewfood).click({force:true})
    }

    Foodname(name)
    {
        cy.get(this.foodname).type(name)
    }

    FoodDescription(description)
    {
        cy.get(this.foodDescription).type(description)
    }

    FoodImageUpload(filepath)
    {
        cy.get(this.foodimageUpload, {includeShadowDom:true}).selectFile(filepath, {force: true})
    }

    FoodCategory(foodname)
    {
        cy.get(this.foodCategory).click()
        cy.get(this.categoryoptions).contains(foodname).click()
    }

    validateCategorySelection(foodname)
    {
        return cy.get(this.categorycontainer)
    }

    FoodSubCategory(name)
    {
        cy.get(this.foodSubcategory).click()
        cy.wait(3000)
        cy.get('#select2-sub-categories-container').click()
        cy.get(this.foodSubcategory).click()
        cy.get(this.SubcategoryOptions).contains(name).click()
    }

    validateSubCategorySelection(name)
    {
        return cy.get(this.foodSubcategory)
    }

    FoodTypes(foodtype)
    {
        cy.get(this.FoodType).click()
        cy.get(this.foodtypeoptions).contains(foodtype)
    }

    AddOns(addons)
    {
        //cy.get(this.addon).click({ multiple: true })
        cy.get('.card-body > .select2 > .selection > .select2-selection > .select2-selection__rendered').click({multiple:true})
        cy.get(this.addonOptions).contains(addons)
    }

    ValidateAddons(num)
    {
        return cy.get("ul[class='select2-selection__rendered']>li:nth-child("+num+")")
    }

    Time(start, stop)
    {
        cy.get(this.availabletimestarts).type(start)
        cy.get(this.avaliabletimeEnds).type(stop)
    }

    PriceInfo(unitprice, discount, MaxPurchaseLimit)
    {
        cy.get(this.unitPrice).clear()
        cy.get(this.unitPrice).type(unitprice)
        cy.get(this.discountPrice).type(discount)
        cy.get(this.maxPurchaseLimit).type(MaxPurchaseLimit)        

    }

    StockType(type)
    {
        cy.get(this.stocktype).click()
        cy.get(this.stockyTypeOptions).contains(type)
    }

    ItemStock(num)
    {
        cy.get(this.itemstock).type(num)
    }

    Tags(tag)
    {
        cy.get(this.tags).type(tag)
    }

    Submit()
    {
        cy.get(this.submit).click()
    }






}