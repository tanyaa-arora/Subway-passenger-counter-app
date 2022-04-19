let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0
function passenger_count() {
    count += 1
    countEl.textContent = count
}
function save() {
    let saveEl = document.getElementById("save-el")
    let dash = " - "
    saveEl.textContent+= count + dash
    count=0
    countEl.textContent=count
}
