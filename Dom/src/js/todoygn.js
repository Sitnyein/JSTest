//selector
const app = document.querySelector("#app");
const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const taskLists = document.querySelector("#taskLists");
const doneCounter = document.querySelector("#doneCounter");
const listCounter = document.querySelector("#listCounter");

//functions
const createListUI = (text) => {
  const list = document.createElement("div");
  list.classList.add("tasklist");

  list.innerHTML = `
    <div class=" animate__animated animate__slideInLeft   flex mb-5 justify-between items-center border-2 border-black p-5">
    <div class=" text-box flex  items-center">
    <input type="checkbox" class="w-5 h-5" />
    <div class="tasklist-text ms-2">
    ${text}
    </div>
    </div>
    <div class="">
      <button class="tasklist-edit-btn border-black border p-2 rounded" >
        <svg
        xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.2"
          stroke="currentColor"
          class="w-4"
        >
          <path
          stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
            </svg>
            </button>
            <button class=" tasklist-del-btn border-black border p-2 rounded">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.2"
            stroke="currentColor"
            class="w-4"
            >
            <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
            </svg>
            </button>
            </div>
            </div>
            `;
  const taskListDelBtn = list.querySelector(".tasklist-del-btn");

  // taskListDelBtn.addEventListener("click", listDelHandler);

  // edit list

  const taskListEditBtn = list.querySelector(".tasklist-edit-btn");
  // taskListEditBtn.addEventListener("click", listEditHandler);

  taskListDelBtn.addEventListener("click",listDelHandler);

  taskListEditBtn.addEventListener("click", () => {
    const tasklistText = list.querySelector(".tasklist-text");
    tasklistText.innerHTML = null;
    let input = document.createElement("input");
    input.classList.add("border", "border-black", "p-1", "rounded");
    input.value = text;
    tasklistText.append(input);

    input.addEventListener("blur", () => {
      tasklistText.innerText = input.value;
    });
  });

  //checking
  // checking

  
  


  const taskListCheckBox = list.querySelector("[type='checkbox']");
  taskListCheckBox.addEventListener("click", () => {
  });

      const textBox = list.querySelector(".text-box");
      textBox.addEventListener("click",()=>{
        textBox.querySelector(".tasklist-text").classList.toggle("line-through");
        countDoneTaskList();  
       })

       // checking
  // const taskListCheckBox = list.querySelector("[type='checkbox']");
  // taskListCheckBox.addEventListener("click", listCheckHandler);

  // const listCheckHandler = (event) => {
  //   const list = event.target.closest(".tasklist");
  //   const textBox = list.querySelector(".text-box");
  //   // textBox.querySelector("input").toggleAttribute("checked");
  //   textBox.querySelector(".tasklist-text").classList.toggle("line-through");
  //   countDoneTaskList();
  // };


  return list;
};



//handler //function with event listner

//add event
const addbtnhandler = () => {
  //add to tasklists

  if (textInput.value.trim()) {
    taskLists.append(createListUI(textInput.value));
    listCount();
    countDoneTaskList();

    //input clear
    textInput.value = null;
  } else {
    alert("you need to type something");
  }
};

//list counter length
//  const count = document.querySelectorAll(".tasklist").length
const listCount = () => {
  const count = document.querySelectorAll(".tasklist").length;
  listCounter.innerText = count;
};

const countDoneTaskList = () => {
  doneCounter.innerText = document.querySelectorAll(
    ".tasklist [type='checkbox']:checked"
  ).length;
};

//listdel handler

const listDelHandler = (event) => {
  // console.log(event.target.parentElement);
  // console.log(event.target.parentElement.parentElement);
  // console.log(event.target.parentElement.parentElement.parentElement);
  if (confirm("Are U sure to delete?")) {
    // list.remove();
    const list = event.target.closest(".tasklist");
       list.remove();
       listCount();
       countDoneTaskList();
    // list.children[0].classList.replace(
    //   "animate__slideInLeft",
    //   "animate__backOutRight"
    // );
    // list.addEventListener("animationend", () => {
    //   list.remove();
    //   countTaskList();
    //   countDoneTaskList();
    // });
  }
};

textInput.addEventListener("keyup", (event) => {
  // console.log(event);
  if (event.key === "Enter") {
      addbtnhandler();
  }
});

//listeners
addBtn.addEventListener("click", addbtnhandler);

//checklist

// let check = list.querySelectorAll(".text-box");

//delete event
