const monthNameEl = document.getElementById("month-name")
const dayNameEl = document.getElementById("day-name")
const numberNameEl = document.getElementById("number-name")
const yearNameEl = document.getElementById("year-name")

const date = new Date()
monthNameEl.innerText = date.toLocaleString("en", {
    month: "long"
})
dayNameEl.innerText = date.toLocaleString("en", {
    weekday: "long"
})
numberNameEl.innerText = date.getDate();
yearNameEl.innerText = date.getFullYear()