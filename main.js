window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    //Events on submit

    form.addEventListener('submit', (e) => {

        //Prevent page refresh when submitting form
        e.preventDefault();

        //SETUP THE SUBMIT EVENTS
        const task = input.value;

        //CHECK FOR EMPTY
        if (!task) {
            alert("Please fill out the task");
            return;
        }

        //CREATE THE TASK
        //Here we are replacing the static div .tasks in the html

        const task_el = document.createElement("div"); //create the 'div'
        task_el.classList.add("task"); // add .task to the 'div'

        const task_content_el = document.createElement("div"); //create el 'div' inside el 'task'
        task_content_el.classList.add("content"); //add .content to the el 'div'

        task_el.appendChild(task_content_el); //insert the content into html

        const task_input_el = document.createElement("input"); //create el 'input' inside 'div' .content
        task_input_el.classList.add("text"); //add .text to the 'input' el
        task_input_el.type = "text"; //apply parameter 'text' to the 'input' el
        task_input_el.value = task; //apply parameter 'value' to the 'input' el
        task_input_el.setAttribute("readonly", "readonly"); //apply parameter 'readonly' to the 'input' el

        task_content_el.appendChild(task_input_el);  //insert the input into html

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = "";

        //EDIT and DELETE buttons functionality

        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {

                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
            }
        });

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });        

    });

});