import React, { useState } from 'react';
import Todocard from './Todocard';

const Todosection = ({ handleclick, todos, setList }) => {
  const [islist, setView] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center mt-8 gap-6">
      <h2 className="text-3xl font-bold text-gray-700">📝 Todo List</h2>

      <div className="flex gap-3">
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition"
          onClick={() => setView(!islist)}
        >
          {islist ? "List View" : "Grid View"}
        </button>
        <button 
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition"
          onClick={handleclick}
        >
          ➕ Create Todo
        </button>
      </div>

      <div className={`flex ${islist ? 'flex-col' : 'flex-row'} justify-center gap-6 flex-wrap`}>
        {todos.map(todo => (
          <Todocard key={todo.id} todo={todo} setList={setList} islist={islist} />
        ))}
      </div>
    </div>
  );
};

export default Todosection;
