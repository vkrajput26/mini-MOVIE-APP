// Store the wallet amount to your local storage with key "amount"

var arr=[]
function addtowallet()
{
    event.preventDefault()
    let amount=document.getElementById("amount").value
    console.log(amount)
    let display =document.getElementById("wallet")
    display.innerText=amount

    arr.push(amount)
    console.log(arr)
    localStorage.setItem("amount",JSON.stringify(arr))
}