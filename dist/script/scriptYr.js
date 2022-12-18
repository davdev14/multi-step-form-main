let arcadePlan = document.getElementById("arcade")
let advancedPlan = document.getElementById("advanced")
let proPlan = document.getElementById("pro")
const checkRadio1 = document.getElementById("choose-plan1")
const checkRadio2 = document.getElementById("choose-plan2")
const checkRadio3 = document.getElementById("choose-plan3")
const monthlyBilling = document.getElementById("monthly-billing")
const YearlyBilling = document.getElementById("yearly-billing")
const onlineService = document.getElementById("add-ons1")
const largerStorage = document.getElementById("add-ons2")
const customizableProfile = document.getElementById("add-ons3")
const planValue1 = document.getElementById("plan-value1")
const planValue2 = document.getElementById("plan-value2")
const planValue3 = document.getElementById("plan-value3")
let choosedPlan = document.getElementById("choosed-plan-mo")
let choosedPlanBillMo = document.getElementById("choosed-plan-bill-mo")
const onlineServiceValue = document.getElementById("online-service-value")
const onlineServiceBillValue = document.getElementById("online-service-bill-value")
let addOnsDiv = document.getElementById("add-ons-div")
let addOnsTotal = document.getElementById("add-ons-total")
let total = document.getElementById("total")

// const checkOnlineService = document.querySelector(".online-service")
// const checkLargerStorage = document.querySelector(".larger-storage")
// const checkCustomizableProfile = document.querySelector(".customizable-profile")


const arcadeYearlyBill = 90
const advancedYearlyBill = 120
const proYearlyBill = 150
const onlineServiceYearly = 10
const largerStorageYearly = 20
const customizableProfileYearly = 20
let yearlyPlanBill = 0
let savePlanValue = ''
let planBillStorageYr = 0
let addOnsBillYearly = 0
let addOnsBillStorageYr = 0

function redirectYr(){
  window.location.href = "/dist/pages/step2yr.html";
}
function redirectMo(){
  window.location.href = "/dist/pages/step2.html";
}


// arcadePlan.addEventListener("click", () => {
//   checkRadio1.checked=true
// })

// advancedPlan.addEventListener("click", () => {
//   checkRadio2.checked=true
// })

// proPlan.addEventListener("click", () => {
//   checkRadio3.checked=true
// })


// function to calculate yearly plan
function selectedYearlyPlan(){
  if (checkRadio1.checked) {
    yearlyPlanBill += arcadeYearlyBill
    savePlanValue = localStorage.setItem('savePlanValue', planValue1.innerHTML)
  }else if (checkRadio2.checked) {
    yearlyPlanBill += advancedYearlyBill
    savePlanValue = localStorage.setItem('savePlanValue', planValue2.innerHTML)
  }else if (checkRadio3.checked){
    yearlyPlanBill += proYearlyBill
    savePlanValue = localStorage.setItem('savePlanValue', planValue3.innerHTML)
  }else {
    //alert("choose your plan")
  }
  planBillStorageYr = localStorage.setItem('planBillMo', yearlyPlanBill)
  
}

savePlanValue = localStorage.getItem('savePlanValue')
choosedPlan.textContent = `${savePlanValue}(Yearly)`
planBillStorageYr = JSON.parse(localStorage.getItem('planBillMo'))
choosedPlanBillMo.textContent = `+$${planBillStorageYr}/yr`

// function to add yearly addons
function pickAddOnsYearly(){
  if (onlineService.checked && largerStorage.checked && customizableProfile.checked){
    addOnsBillYearly = addOnsBillYearly + onlineServiceYearly + largerStorageYearly + customizableProfileYearly
  }else if(onlineService.checked && largerStorage.checked){
    addOnsBillYearly = addOnsBillYearly + onlineServiceYearly + largerStorageYearly
  }else if (onlineService.checked && customizableProfile.checked){
    addOnsBillYearly = addOnsBillYearly + onlineServiceYearly + customizableProfileYearly
  }else if (largerStorage.checked && customizableProfile.checked){
    addOnsBillYearly = addOnsBillYearly + largerStorageYearly + customizableProfileYearly
  }else if (onlineService.checked){
    addOnsBillYearly += onlineServiceYearly
  }else if (largerStorage.checked){
    addOnsBillYearly += largerStorageYearly
  }else if (customizableProfile.checked){
    addOnsBillYearly += customizableProfileYearly
  }else{
    addOnsBillYearly = 0
  }
  addOnsBillStorageYr = localStorage.setItem('addOnsBillYr', addOnsBillYearly)

}
addOnsBillStorageYr = JSON.parse(localStorage.getItem('addOnsBillYr'))
addOnsTotal.textContent = `+$${addOnsBillStorageYr}/yr`

total.textContent = `$${planBillStorageYr + addOnsBillStorageYr}(Per Year)`
