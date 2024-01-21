//selector
const app = document.querySelector("#app");
const recordForm = app.querySelector("#recordForm");
const productSelect = app.querySelector("#productSelect");
const quantityInput = app.querySelector("#quantityInput");
const recordGroup = app.querySelector("#recordGroup");





//data 

const products = [
    {
      id: 1,
      name: "Domain",
      price: 100,
    },
    {
      id: 2,
      name: "Hosting",
      price: 60,
    },
    {
      id: 3,
      name: "Design Package",
      price: 20,
    },
    {
      id: 4,
      name: "Web Development",
      price: 500,
    },
  ];

//record ui
// const recordUi = (id, productName, productPrice, quantity) => {
//   const cost = productPrice * quantity;
//   const tr = document.createElement("tr");
//   tr.setAttribute("product-id", id);
//   tr.className =
//     "group odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700";
//   tr.innerHTML = `
//     <td class="px-6 py-4 td-counter"></td>
//     <th
//         scope="row"
//         class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//     >
//         ${productName}
//     </th>
//     <td class="px-6 py-4 text-end record-price">${productPrice}</td>
//     <td class="px-6 py-4 text-end">

//     <button class="q-sub pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 -translate-x-6 group-hover:translate-x-0 duration-200 bg-blue-100 text-blue-600 p-1 rounded">

//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 pointer-events-none">
//         <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
//       </svg>
//       </button>

//       <span class="record-q w-5 inline-block">${quantity}</span>

//       <button class="q-add pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 duration-200 bg-blue-100 text-blue-600 p-1 rounded">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 pointer-events-none">
//         <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//         </svg>
    
//       </button>
//     </td>
//     <td class="px-6 py-4 text-end relative">

//     <span class='record-cost'>220</span>

//     <button class='record-del group-hover:opacity-100 group-hover:pointer-events-auto duration-200 group-hover:left-3/4 absolute pointer-events-none opacity-0 left-full top-3 translate-x-2 active:scale-75 bg-blue-100 p-2 rounded-lg'>
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 pointer-events-none stroke-blue-700 stroke-1">
//         <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
//     </svg>
  
//     </button>
//     </td>
//     `;

//   // const recordDel = tr.querySelector(".record-del");
//   // recordDel.addEventListener("click",() => {
//   //     tr.remove()
//   //     calculateRecordTotal()
//   // })

//   return tr;
// };

//first step record ui

const recordUi =(productName,productPrice,quantity) => {
  const cost = productPrice * quantity ;
  const tr = document.createElement("tr");
  tr.className =
    "group odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700";
  tr.innerHTML = `
    <td class="px-6 py-4 td-counter">1</td>
    <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
       ${productName}
    </th>
    <td class="px-6 py-4 text-end record-price">${productPrice}</td>
    <td class="px-6 py-4 text-end">

   
      <span class="record-q w-5 inline-block">${quantity}</span>

 
    </td>
    <td class="px-6 py-4 text-end relative">

    <span class='record-cost'>${cost}</span>
    </button>
    </td>
    `;
    return tr;
}





//functions

/*product option */
// const productOption = (id,name) => {
//     const option = document.createElement("option");
//     option.innerText = name;
//     option.value = id;
//     return option;
// }
/*uishow*/
const productRender = (items) => {
    /*old option  */
    // items.forEach((id,name) => productSelect.append(productOption(id,name)));
    /*new option*/
     items.forEach((item) => productSelect.append(new Option(item.name,item.id)));


};














//intialrender

/*call product render for ui is called rendering */
productRender(products);





//handler
const recordFormhandler = (event) => {
    event.preventDefault();
    const currentproduct = products.find((product) => product.id == productSelect.value);
    recordGroup.append(recordUi(currentproduct.name,currentproduct.price,quantityInput.valueAsNumber))
    // console.log(currentproduct);
    // console.log(quantityInput.valueAsNumber);
  // const isExist = app.querySelector(`[product-id='${currentProduct.id}']`);

  // if (isExist) {
  //   const currentRowQ = isExist.querySelector(".record-q");
  //   const currentRowPrice = isExist.querySelector(".record-price");
  //   const currentRowCost = isExist.querySelector(".record-cost");

  //   currentRowQ.innerText =
  //     parseInt(currentRowQ.innerText) + quantityInput.valueAsNumber;

  //   currentRowCost.innerText =
  //     currentRowQ.innerText * currentRowPrice.innerText;

  //   recordForm.reset();
  //   calculateRecordTotal();
  // } else {
  //   recordGroup.append(
  //     recordUi(
  //       currentProduct.id,
  //       currentProduct.name,
  //       currentProduct.price,
  //       quantityInput.valueAsNumber
  //     )
  //   );

    recordForm.reset();
  //   calculateRecordTotal();
  // }
};



//listener
// recordForm.addEventListener("submit",recordFormhandler);
recordForm.addEventListener("submit", recordFormhandler);
