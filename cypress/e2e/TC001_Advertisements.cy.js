import Advertisement from "../PageObjects/AdvertisementPage"

describe('Advertisement Management Module', () => {

  const ad = new Advertisement();
  let month1 = "Nov 2024"
  let month2 = "Dec 2024"

  it('New Advertisement', () => {
    cy.Login()

    ad.Advertdrp()
    ad.confirmNewAdPage().should('have.text', '\nCreate Advertisement\n')
    ad.AdvertTitle("Testing")
    ad.AdvertDescription("Cypress Automation")
    ad.AdvertType("Restaurant Promotion")
    ad.ValidilityDate()
    ad.monthForwardbtn()
    ad.monthForwardbtn()
    
    ad.Day1(3,4)
    ad.Day2(4,3)

    ad.Month1().should('have.text', month1)
    ad.Month2().should('have.text', month2)

    ad.ApplyDate()
    ad.uploadAdPromo("cypress/fixtures/test.png")
    ad.ValidateAdTitle().should('have.text', 'Testing')
    ad.ValidateAdDescription().should('have.text', 'Cypress Automation')
    ad.SubmitAd()



  })


})