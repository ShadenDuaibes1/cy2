
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://google.com')
  })
})
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://discord.com/')
  })
})
let rowsLength;
describe ('Data Driven Testing Using Excel FIle', () =>{
  before(() => {
     cy.task('readXlsx', { file: 'Cypress2/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {
        rowsLength = rows.length;
        cy.writeFile("Cypress2/fixtures/xlsxData.json", {rows})
      })
        cy.visit(Cypress.config('https://discord.com/login'));
      })
    it ('Data Driven: Register User', () => {
      cy.fixture('xlsxData').then((data) => {
         for ( let i = 0; i < rowsLength; i++) {
            cy.get('.btn-link').click();
            cy.url().should('include', '/register').then(()=>{
            cy.get('input[formcontrolname="Email"]').type(data.rows[i].Email);
            cy.get('input[formcontrolname="Password"]').type(data.rows[i].passward);
           
          })
        }
      })     
     })
    })