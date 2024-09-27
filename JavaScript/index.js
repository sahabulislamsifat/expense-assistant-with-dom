/**
 * *Add EventListener fort Calculate Button
 */
let count = 0;
const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", function () {
  count += 1;
  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);
  const savings = parseFloat(document.getElementById("savings").value);

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  const totalExpensesElement = document.getElementById("total-expenses");
  totalExpensesElement.innerText = totalExpenses.toFixed(2);

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = balance.toFixed("2");

  const result = document.getElementById("results");
  result.classList.remove("hidden");

  // Dynamically added history by javascript

  const historyCard = document.createElement("div");
  historyCard.className =
    "bg-white p-3 rounded-md border-l-3 border-indigo-500";

  historyCard.innerHTML = `
<p class= "font-bold text-xs text-gray-700"> Serial ${count}</p>
<p class = "text-xs text-gray-700"> ${new Date().toLocaleDateString()}</p>
<p class = "text-xs text-gray-700"> Income: $${income.toFixed(2)}</p>
<p class = "text-xs text-gray-700"> Expenses: $${totalExpenses.toFixed(2)} </p>
<p class = "text-xs text-gray-700"> Balance: $${balance.toFixed(2)} </p>
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
  //   console.log("testing.....");
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
  remainingElement.innerText = remainingBalance.toFixed("2");
});
