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

const arcadeMonthlyBill = 9
const arcadeYearlyBill = 90
const advancedMonthlyBill = 12
const advancedYearlyBill = 120
const proMonthlyBill = 15
const proYearlyBill = 150
const onlineServiceMonthly = 1
const onlineServiceYearly = 10
const largerStorageMonthly = 2
const largerStorageYearly = 20
const customizableProfileMonthly = 2
const customizableProfileYearly = 20
let monthlyPlanBill = 0
let yearlyPlanBill = 0
let monthlyAddOnsBill = 0 
let savePlanValue = ''
let planBillStorageMo = 0
let planBillStorageYr = 0
let addOnsBillMonthly = 0
let addOnsBillYearly = 0
let addOnsBillStorageMo = 0
let addOnsBillStorageYr = 0
const x = "Online service= +$1"
const y = "Online service= +$2"
const z = "Online service= +$3"

function redirectYr(){
  window.location.href = "/pages/step2yr.html";
}
function redirectMo(){
  window.location.href = "/pages/step2.html";
}


arcadePlan.addEventListener("click", () => {
  checkRadio1.checked=true
})

advancedPlan.addEventListener("click", () => {
  checkRadio2.checked=true
})

proPlan.addEventListener("click", () => {
  checkRadio3.checked=true
})

//funtion to calculate monthly plan
function selectedMonthlyPlan(){
  if (checkRadio1.checked) {
    monthlyPlanBill += arcadeMonthlyBill
    savePlanValue = localStorage.setItem('savePlanValue', planValue1.innerHTML)
  }else if (checkRadio2.checked) {
    monthlyPlanBill += advancedMonthlyBill
    savePlanValue = localStorage.setItem('savePlanValue', planValue2.innerHTML)
  }else if (checkRadio3.checked){
    monthlyPlanBill += proMonthlyBill
    savePlanValue = localStorage.setItem('savePlanValue', planValue3.innerHTML)
  }else {
    //alert("choose your plan")
  }
  planBillStorageMo = localStorage.setItem('planBillMo', monthlyPlanBill)
}
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
  savePlanValue = localStorage.getItem('savePlanValue')
  planBillStorageYr = localStorage.setItem('planBillMo', yearlyPlanBill)
  planBillStorageYr = localStorage.getItem('planBillMo')
  console.log(yearlyPlanBill)
  console.log(planBillStorageYr)
  
}
// function to add monthly addons
function pickAddOnsMonthly(){
  if (onlineService.checked && largerStorage.checked && customizableProfile.checked){
    addOnsBillMonthly = addOnsBillMonthly + onlineServiceMonthly + largerStorageMonthly + customizableProfileMonthly
  }else if(onlineService.checked && largerStorage.checked){
    addOnsBillMonthly = addOnsBillMonthly + onlineServiceMonthly + largerStorageMonthly
  }else if (onlineService.checked && customizableProfile.checked){
    addOnsBillMonthly = addOnsBillMonthly + onlineServiceMonthly + customizableProfileMonthly
  }else if (largerStorage.checked && customizableProfile.checked){
    addOnsBillMonthly = addOnsBillMonthly + largerStorageMonthly + customizableProfileMonthly
  }else if (onlineService.checked){
    addOnsBillMonthly += onlineServiceMonthly
  }else if (largerStorage.checked){
    addOnsBillMonthly += largerStorageMonthly
  }else if (customizableProfile.checked){
    addOnsBillMonthly += customizableProfileMonthly
  }else{
    addOnsBillMonthly = 0
  }

  addOnsBillStorageMo = localStorage.setItem('addOnsBillMo', addOnsBillMonthly)
}

// function to add yearly addons
function pickAddOnsYearly(){
  if (onlineService.checked && largerStorage.checked && customizableProfile.checked){
    addOnsBillYearly = addOnsBillYearly + onlineServiceYearly + largerStorageYearly + customizableProfileYearly
    console.log(addOnsBillYearly)
  }else if(onlineService.checked && largerStorage.checked){
    addOnsBillYearly = addOnsBillYearly + onlineServiceYearly + largerStorageYearly
    console.log(addOnsBillYearly)
  }else if (onlineService.checked && customizableProfile.checked){
    addOnsBillYearly = addOnsBillYearly + onlineServiceYearly + customizableProfileYearly
    console.log(addOnsBillYearly)
  }else if (largerStorage.checked && customizableProfile.checked){
    addOnsBillYearly = addOnsBillYearly + largerStorageYearly + customizableProfileYearly
    console.log(addOnsBillYearly)
  }else if (onlineService.checked){
    addOnsBillYearly += onlineServiceYearly
    console.log(addOnsBillYearly)
  }else if (largerStorage.checked){
    addOnsBillYearly += largerStorageYearly
    console.log(addOnsBillYearly)
  }else if (customizableProfile.checked){
    addOnsBillYearly += customizableProfileYearly
    console.log(addOnsBillYearly)
  }else{
    addOnsBillYearly = 0
  }
  
  addOnsBillStorageYr = localStorage.setItem('addOnsBillYr', addOnsBillYearly)
  addOnsBillStorageYr = localStorage.getItem('addOnsBillYr')
  console.log(addOnsBillStorageYr)

}

savePlanValue = localStorage.getItem('savePlanValue')
choosedPlan.textContent = `${savePlanValue} (Monthly)`

planBillStorageMo = JSON.parse(localStorage.getItem('planBillMo'))
choosedPlanBillMo.textContent = `+$${planBillStorageMo}/mo`

addOnsBillStorageMo = JSON.parse(localStorage.getItem('addOnsBillMo'))
  addOnsTotal.textContent = `+$${addOnsBillStorageMo}/mo`

  total.textContent = `$${planBillStorageMo + addOnsBillStorageMo}/month`
