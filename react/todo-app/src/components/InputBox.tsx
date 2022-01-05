export function InputBox() {
  return (
    <input
      className="bg-blue-desaturated text-sm ml-2"
      type="text"
      placeholder="Create a new todo..."
      id="newTodo"
      // onchange="addMore(event)"
    />
  );
}
