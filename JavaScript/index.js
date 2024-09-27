// get value function
function getInputValueById(id) {
  return parseFloat(document.getElementById(id).value);
}

function showError(id) {
  return document.getElementById(id).classList.remove("hidden");
}

function formateCurrency(amount) {
  return `${amount.toFixed(2)}`;
}
// Getting All the value
let count = 0;
/**
 * *Add EventListener fort Calculate Button
 */
const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", function () {
  count += 1;
  // const income = parseFloat(document.getElementById("income").value);
  // const software = parseFloat(document.getElementById("software").value);
  // const courses = parseFloat(document.getElementById("courses").value);
  // const internet = parseFloat(document.getElementById("internet").value);
  // const savings = parseFloat(document.getElementById("savings").value);

  // Get value from function
  const income = getInputValueById("income");
  const software = getInputValueById("software");
  const courses = getInputValueById("courses");
  const internet = getInputValueById("internet");
  const savings = getInputValueById("savings");

  if (income <= 0 || isNaN(income)) {
    // document.getElementById("income-error").classList.remove("hidden");
    // return;
    showError("income-error");
  }
  if (software <= 0 || isNaN(software)) {
    // document.getElementById("software-error").classList.remove("hidden");
    // return;
    showError("software-error");
  }
  if (courses <= 0 || isNaN(courses)) {
    // document.getElementById("courses-error").classList.remove("hidden");
    // return;
    showError("courses-error");
  }
  if (internet <= 0 || isNaN(internet)) {
    // document.getElementById("internet-error").classList.remove("hidden");
    // return;
    showError("internet-error");
  }
  if (savings <= 0 || isNaN(savings)) {
    // document.getElementById("savings-error").classList.remove("hidden");
    // return;
    showError("savings-error");
  }

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  if (totalExpenses > income) {
    document.getElementById("logic-error").classList.remove("hidden");
    return;
    // showError("logic-error");
  }

  const totalExpensesElement = document.getElementById("total-expenses");
  totalExpensesElement.innerText = formateCurrency(totalExpenses);

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = formateCurrency(balance);

  const result = document.getElementById("results");
  result.classList.remove("hidden");

  // Dynamically added history by javascript
  const historyCard = document.createElement("div");
  historyCard.className =
    "bg-white p-3 rounded-md border-l-3 border-indigo-500";

  historyCard.innerHTML = `
<p class= "font-bold text-xs text-gray-700"> Serial ${count}</p>
<p class = "text-xs text-gray-700"> ${new Date().toLocaleDateString()}</p>
<p class = "text-xs text-gray-700"> Income: $${formateCurrency(income)}</p>
<p class = "text-xs text-gray-700"> Expenses: $${formateCurrency(
    totalExpenses
  )} </p>
<p class = "text-xs text-gray-700"> Balance: $${formateCurrency(balance)} </p>
`;

  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyCard, historyContainer.firstChild);
});

/**
 * *History Tab Functionality
 */
const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");
historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  historyTab.classList.remove("text-gray-600");
  assistantTab.classList.remove(
    "text-white",
    // "font-semibold",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  assistantTab.classList.add("text-gray-600", "font-semibold");

  document.getElementById("expense-form").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

assistantTab.addEventListener("click", function () {
  assistantTab.classList.add(
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  historyTab.classList.remove(
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  document.getElementById("expense-form").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});

/**
 * *Add EventListener fort Savings Button
 */

const calculateSavingsButton = document.getElementById("calculate-savings");
calculateSavingsButton.addEventListener("click", function () {
  const savingPercentage = parseFloat(document.getElementById("savings").value);
  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);
  const savings = parseFloat(document.getElementById("savings").value);

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;
  const savingAmount = (savingPercentage * balance) / 100;

  const savingElement = document.getElementById("savings-amount");
  savingElement.innerText = savingAmount.toFixed("2");
  const remainingBalance = balance - savingAmount;

  const remainingElement = document.getElementById("remaining-balance");
  remainingElement.innerText = formateCurrency(remainingBalance);
});

// Live validation for Input
document.getElementById("income").addEventListener("input", function () {
  const incomeValue = parseFloat(document.getElementById("income").value);
  if (isNaN(incomeValue) || incomeValue <= 0) {
    // document.getElementById("income-error").classList.remove("hidden");
    // return;
    showError("income-error");
  }
});
document.getElementById("software").addEventListener("input", function () {
  const softwareValue = parseFloat(document.getElementById("software").value);
  if (isNaN(softwareValue) || softwareValue <= 0) {
    // document.getElementById("software-error").classList.remove("hidden");
    // return;
    showError("software-error");
  }
});
document.getElementById("courses").addEventListener("input", function () {
  const coursesValue = parseFloat(document.getElementById("courses").value);
  if (isNaN(coursesValue) || coursesValue <= 0) {
    // document.getElementById("courses-error").classList.remove("hidden");
    // return;
    showError("courses-error");
  }
});
document.getElementById("internet").addEventListener("input", function () {
  const internetValue = parseFloat(document.getElementById("internet").value);
  if (isNaN(internetValue) || internetValue <= 0) {
    // document.getElementById("internet-error").classList.remove("hidden");
    // return;
    showError("internet-error");
  }
});
document.getElementById("savings").addEventListener("input", function () {
  const savingsValue = parseFloat(document.getElementById("savings").value);
  if (isNaN(savingsValue) || savingsValue <= 0) {
    // document.getElementById("savings-error").classList.remove("hidden");
    // return;
    showError("savings-error");
  }
});
