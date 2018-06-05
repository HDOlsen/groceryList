$(document).ready(function(){

//Variable Declarations

    let createStoreForm = $("#createStoreForm")
    let btnWhole = $("#btnWhole")
    let btnHeb = $("#btnHeb")
    let btnFiesta = $("#btnFiesta")
    let groceryList = []
    let viewWhole = $("#viewWhole")
    let viewHeb = $("#viewHeb")
    let viewFiesta = $("#viewFiesta")

    //Add and remove items to grocery list
    createStoreForm.submit(function(e){
        e.preventDefault()
        var store = e.target.selectStore.value
        var newStore= `
        <div> 
            <h4>${store}</h4>
            <input id="store_input_${storeNumber}"/>
            <ul id="store_items_${storeNumber}"></ul>
            <button onclick="createItem('store_input_${storeNumber}','store_items_${storeNumber}')" type="button">Add</button> 
            <button onclick="removeItem('store_input_${storeNumber}','store_items_${storeNumber}')" type="button">Remove</button>   
        </div>
        `
        viewWhole[0].innerHTML += newStore

        storeNumber = storeNumber + 1
        console.log(storeNumber)


    }) 

    //Writing to Firebase 

    function setupFire() {

        database.ref("input.value").on("value",function(snapshot){
      
          let items = []
      
          for(let key in snapshot.val()) {
      
            let item = snapshot.val()[key]
            items.push(item)
        }
    })
}
})