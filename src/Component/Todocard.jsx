import React, { useState, useEffect } from 'react';

const Todocard = ({ todo, setList, islist }) => {
  const [inp, setInp] = useState(todo.title);
  const [des, setDes] = useState(todo.description);

  const delte = () => {
    setList(prev => {
      const updated = prev.filter(item => item.id !== todo.id);
      localStorage.setItem("todos", JSON.stringify(updated));
      return updated;
    });
  };

  const togglefun = () => {
    setList(prev => {
      const newlist = prev.map(item => {
        if (item.id === todo.id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
      localStorage.setItem("todos", JSON.stringify(newlist));
      return newlist;
    });
  };

  useEffect(() => {
    setList(prev => {
      const updated = prev.map(item => {
        if (item.id === todo.id) {
          return { ...item, title: inp, description: des };
        }
        return item;
      });
      localStorage.setItem("todos", JSON.stringify(updated));
      return updated;
    });
  }, [inp, des]);

  return (
    <div className={`w-[320px] bg-gradient-to-br from-pink-400 to-red-400 text-white rounded-2xl shadow-xl p-5 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1 ${islist ? 'h-[150px]' : 'h-[200px]'}`}>
      <div className="flex items-center justify-between">
        <input 
          type="text" 
          value={inp} 
          onChange={(e) => setInp(e.target.value)} 
          className="bg-transparent text-lg font-semibold w-full mr-4 outline-none placeholder-white  transition"
          placeholder="Untitled"
        />
        <button onClick={togglefun} className="hover:scale-110 transition-transform">
          {todo.isCompleted ? (
            <span className="text-xl">✅</span>
          ) : (
            <div className="border border-black h-[18px] w-[18px] rounded-sm bg-white"></div>
          )}
        </button>
      </div>
      <div className="relative w-full overflow-hidden text-sm text-white">
  <textarea
    value={des}
    onChange={(e) => setDes(e.target.value)}
  
    rows={4}
    className="w-full bg-transparent outline-none resize-none text-sm placeholder-white leading-snug h-[100px] pr-2 whitespace-pre-wrap break-words text-ellipsis overflow-hidden"
    style={{
      display: '-webkit-box',
      WebkitLineClamp: islist?1:4,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }}
  />
</div>


      <div className="flex justify-end">
        <button 
          onClick={delte} 
          className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1 rounded-full shadow-sm transition duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todocard;
