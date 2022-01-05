import { useState } from "react";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import { ListItem } from "./ListItem";

type Todo = { name: string; checked: boolean };

export function TodoComponent() {
  const [newtodo, setNewtodo] = useState("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [currentFilter, setCurrentFilter] = useState("");

  // add items from input
  const onChangeNewTodoInput = (e: any) => {
    setNewtodo(e.target.value);
  };

  const addNewTodo = (e: any) => {
    e.preventDefault();
    const newTodoList = todoList.slice();
    newTodoList.push({ name: newtodo, checked: false });
    setTodoList(newTodoList);
  };

  const onChecked = (e: any, index: number) => {
    const newTodoList = todoList.slice();
    newTodoList[index].checked = e.target.checked;
    setTodoList(newTodoList);
  };

  const onDelete = (e: any, index: number) => {
    const newTodoList = todoList.slice();
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  // let filteredList = [] as Todo[];
  // todoList.forEach((item) => {
  //   if (currentFilter == "active") {
  //     if (item.checked == false) {
  //       filteredList.push(item);
  //     }
  //   } else if (currentFilter === "completed") {
  //     if (item.checked == true) {
  //       filteredList.push(item);
  //     }
  //   } else {
  //     filteredList.push(item);
  //   }
  // });

  // fliter all 3 states
  const filteredList = todoList.filter((item) => {
    if (currentFilter == "active") {
      if (item.checked == false) {
        return true;
      }
    } else if (currentFilter === "completed") {
      if (item.checked == true) {
        return true;
      }
    } else {
      return true;
    }
  });



  const activeItemCount = todoList.filter((item) => !item.checked).length;
  const clearCompleted = () =>
    setTodoList(todoList.filter((item) => !item.checked));

  return (
    <>
      <div
        className="
      bg-blue-desaturated
      p-3
      rounded-md
      flex flex-row
      items-center
      gap-2
    "
      >
        <span
          className="
        h-6
        w-6
        bg-blue-desaturated
        border border-blue-darkGrayish
        rounded-full
        inline-block
      "
        ></span>
        <form onSubmit={addNewTodo}>
          <InputBox
            type="text"
            name="Todo"
            value={newtodo}
            placeholder="Create a new todo..."
            id="newTodo"
            onChange={onChangeNewTodoInput}
          />
        </form>
      </div>
      <div className="rounded-md bg-blue-desaturated mt-4 ">
        <ul className="w-full text-sm" id="list">
          {filteredList.map((x, i) => (
            <ListItem
              title={x.name}
              isChecked={x.checked}
              index={i}
              onCheck={(e: any) => {
                onChecked(e, i);
              }}
              onDelete={(e: any) => {
                onDelete(e, i);
              }}
            />
          ))}
        </ul>
        <div className="flex justify-between p-4 text-sm lg:hidden">
          <p>
            <span id="itemsLeft">{activeItemCount}</span> items left
          </p>
          <button onClick={clearCompleted}>Clear Completed</button>
        </div>
      </div>
      <div
        className="
          flex
          justify-center
          flex-row
          gap-4
          text-sm
          rounded-md
          bg-blue-desaturated
          mt-4
          p-4
          font-bold
          lg:justify-between
        "
      >
        <aside className="hidden lg:block ">
          <span id="itemsLeft"></span> items left
        </aside>
        <div className="flex gap-3">
          <Button
            title="All"
            className={currentFilter === "all" ? "text-white" : ""}
            onClick={() => setCurrentFilter("all")}
          />
          <Button
            title="Active"
            className={currentFilter === "active" ? "text-white" : ""}
            onClick={() => setCurrentFilter("active")}
          />
          <Button
            title="Completed"
            className={currentFilter === "completed" ? "text-white" : ""}
            onClick={() => setCurrentFilter("completed")}
          />
        </div>

        <Button className="hidden lg:block" title="Clear Completed" />
      </div>
      <div className="my-10 text-sm flex justify-center">
        <p>Drag and drop to reorder list</p>
      </div>
    </>
  );
}
