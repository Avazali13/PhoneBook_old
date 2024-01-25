const productTableBodyElement=document.querySelector('#product-table-body');
const productCreateForm=document.querySelector('#product-create-form');
const productNameInput=productCreateForm.querySelector('#name');
const productSurnameInput=productCreateForm.querySelector('#surname');
const productPhoneInput=productCreateForm.querySelector('#phone');
const productEmailInput=productCreateForm.querySelector('#email');


async function fetchData(value = "") {
    const response = await fetch(
      `./db.json`
    );
    const data = await response.json();
   return data;
    
  }
  
async function fillData(product){
    if(!product){
         const datas=await fetchData(product);
datas.forEach(data => {
    const elem=createElement(data);
    productTableBodyElement.append(elem)
});
    }else{
     
            const elem=createElement(product);
            productTableBodyElement.append(elem)
                // Set Item
localStorage.setItem("lastname", elem);
// Retrieve
// productTableBodyElement.innerHTML = localStorage.getItem("lastname");
    }


   

}

function createElement(product){
    const productRowElement=document.createElement('tr');

    productRowElement.innerHTML=`
    <td>${product.name}</td>
    <td>${product.surname}</td>
    <td>${product.phone}</td>
    <td>${product.email}</td>
    `

    return productRowElement;
   
}

fillData();


productCreateForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name=productNameInput.value;
    let surname=productSurnameInput.value;
    let phone=productPhoneInput.value;
    let email=productEmailInput.value;


    if(!name || !surname || !phone ||!email){
        return alert('olmaz haa bele')
    }


    const newProduct={
        name,
        surname,
        phone,
        email
    }

    console.log(newProduct);
    fillData(newProduct)
})