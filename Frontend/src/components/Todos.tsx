import { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
  _id: string;
  text: string;
}

export default function Todos() {
  const [toDo, setToDo] = useState<Todo[]>([]);
  const [newToDo, setNewTodo] = useState<string>();

  const baseUrl = "http://localhost:2105";

  const getAllToDo = (
    setTodo: React.Dispatch<React.SetStateAction<Todo[]>>
  ) => {
    axios.get(baseUrl + "/gettodo").then(({ data }) => {
      console.log("data ---->", data);
      setTodo(data);
    });
  };

  const deleteTodo = (toDoId) => {
    axios.post(baseUrl + "/deletetodo", { _id: toDoId }).then(({ data }) => {
      console.log(data);
    });
  };

  const createTodo = () => {
    axios.post(baseUrl + "/savetodo", { text: newToDo }).then(({ data }) => {
      console.log(data);
    });
  };

  useEffect(() => {
    getAllToDo(setToDo);
  }, [createTodo, deleteTodo]);

  return (
    <div className="text-white bg-gray-800 rounded-md p-4 overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <input
                type="text"
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="New Todo"
                className="input input-bordered w-full max-w-xs"
              />
            </th>
            <th>
              <button
                onClick={createTodo}
                className="btn btn-outline btn-primary">
                Create
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {toDo.map((item) => (
            <tr key={item._id} text={item.text}>
              <td>{item.text}</td>

              <td>
                <button onClick={() => deleteTodo(item._id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
