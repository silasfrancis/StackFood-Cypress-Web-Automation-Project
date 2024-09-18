export default class Advertisement
{
    navigationbar = ".navbar-nav-wrap > .navbar-nav-wrap-content-left > .js-navbar-vertical-aside-toggle-invoker > .tio-last-page"
    advertisementdrp = "#demo > aside > div > div.navbar-vertical-content.text-capitalize.bg-334257 > ul > li:nth-child(8) > a > span"
    createadvertcornfrm = ".page-header-title.mb-3"
    txtexloffer= '#default-form > :nth-child(1) > #title'
    description = '#default-form > .form-floating > #description'
    adverttypedrp = "span[role='combobox']"
    vidPromo= "ul[class='select2-results__options']>li:nth-child(1)"
    resturantPromo= "ul[class='select2-results__options']>li:nth-child(2)"
    validilitydate = "input[placeholder='Select date']"
    firstmonth = "div[class='drp-calendar left'] th[class='month']"
    secondmonth = "div[class='drp-calendar right'] th[class='month']"
    monthforwardbtn = ".next.available"
    monthbackbtn= ".prev.available"
    firstmonthdays = "body > div:nth-child(45) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(3)"
    secondmonthdays = "body > div:nth-child(45) > div:nth-child(3) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(6)"
    applydate = "button[class='applyBtn btn btn-sm btn-primary']"
    uploadAdvertImage = '.video_attachment'
    validateAdTitle = "div[class='d-flex justify-content-between'] h5[class='main-text pe-4']"
    validateAdDescription = "div[class='w-0 d-flex flex-column gap-2 flex-grow-1'] div[class='main-text line-limit-2']"
    submitAd = "button[type='submit']"

    clickNavBar()
    {
        cy.get(this.navigationbar).click()
    }

    Advertdrp()
    {
        cy.get(this.advertisementdrp).click({force:true})
    }

    confirmNewAdPage()
    {
        return cy.get(this.createadvertcornfrm)
    }

    AdvertTitle(title)
    {
        cy.get(this.txtexloffer).type(title)
    }

    AdvertDescription(description)
    {
        cy.get(this.description).type(description)
    }

    AdvertType(type)
    {
        cy.get(this.adverttypedrp).click()
        if(type = 'Video Promotion')
        {
            cy.get(this.vidPromo).click()
        }
        else if(type == 'Restaurant Promotion')
        {
            cy.get(this.resturantPromo).click()
        }
    }

    ValidilityDate()
    {
        cy.get(this.validilitydate).click()
    }

    monthForwardbtn()
    {
        cy.get('.next').click();
    }

    Month1()
    { 
        return cy.get(this.firstmonth)
            
    }

    Day1 (r1, day1)
    {
        return cy.get("body > div:nth-child(45) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child("+r1+") > td:nth-child("+day1+")").click();
    }

    Month2()
    {

        return cy.get(this.secondmonth)
      
    }
    
    Day2(r2, day2)
    {
        cy.get("body > div:nth-child(45) > div:nth-child(3) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child("+r2+") > td:nth-child("+day2+")").click()
    }
    ApplyDate()
    {
        cy.get(this.applydate).click()
    }

    uploadAdPromo(filepath)
    {
        cy.get(this.uploadAdvertImage).selectFile(filepath)
    }

    ValidateAdTitle()
    {
        return cy.get(this.validateAdTitle)
    }

    ValidateAdDescription()
    {
        return cy.get(this.validateAdDescription)
    }

    SubmitAd()
    { 
        cy.get(this.submitAd)
    }


       


}