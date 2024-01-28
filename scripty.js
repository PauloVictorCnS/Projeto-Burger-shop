const showListButton=       document.querySelector(".button-show-list")
const buttonDisconted=      document.querySelector(".button-show-disconted")
const buttonValueTotal=     document.querySelector(".button-show-value-total")
const buttonVegan=          document.querySelector(".button-show-Vegan")
const list=                 document. querySelector("ul")




function showList(myArrey){
  
let newList=``
    
    myArrey.forEach(products => {
        newList +=  `<li>
        <img src="${products.src}" alt="">
        <p>${products.name}</p>
        <p>R$: <samp> ${products.price} </samp></p>
    
    </li>`
        
    });
    list.innerHTML=newList
}


function showDisconted(){

    const listPlusDisconted=menuOptions.map(discontedList =>({

        ...discontedList,
        price : discontedList.price * 0.9

    }))

    showList(listPlusDisconted)
}



function showValueTotal(){

    const valueTotal=menuOptions.reduce((acc, value)=>{
        
       return acc + value.price

    },0)

    list.innerHTML=`<li> <p> O valor total de todos os produtos é de ${valueTotal}</p></li>`
}


function listVegan(){

    const returnList=menuOptions.filter(productsVegan=>{

        if(productsVegan = productsVegan.vegan){
             return true
        }else{ return false}

    })

    showList(returnList)
}


buttonVegan.addEventListener("click",listVegan)
buttonValueTotal.addEventListener("click", showValueTotal)
buttonDisconted.addEventListener("click",showDisconted)
showListButton.addEventListener("click",()=> showList(menuOptions))