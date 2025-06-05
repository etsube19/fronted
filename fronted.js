document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("task-form");
    const taskInput = document.getElementById("new-task");
    const taskList = document.getElementById("task-list");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (taskList.children.length >= 5) {
        alert("You can only add up to 5 tasks.");
        return;
      }
  
      const taskText = taskInput.value.trim();
      if (!taskText) return;
  
      const li = document.createElement("li");
  
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.addEventListener("change", () => {
        if (radio.checked) {
          taskSpan.style.textDecoration = "line-through";
          taskSpan.style.color = "#888";
        }
      });
  
      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;
      taskSpan.className = "task-text";
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = () => li.remove();
  
      li.appendChild(radio);
      li.appendChild(taskSpan);
      li.appendChild(deleteBtn);
  
      taskList.appendChild(li);
      taskInput.value = "";
    });
  });