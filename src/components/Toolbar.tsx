import React from 'react';

const Toolbar = ({ tool, setTool, color, setColor, brushSize, setBrushSize }: any) => {
  return (
    <div className="w-16 bg-zinc-900 border-r border-zinc-800 flex flex-col items-center py-4 space-y-6">
      <div className="flex flex-col gap-2">
        <button onClick={() => setTool('brush')} className={`p-3 rounded-xl ${tool === 'brush' ? 'bg-blue-600' : 'hover:bg-zinc-800'}`}>🖌️</button>
        <button onClick={() => setTool('eraser')} className={`p-3 rounded-xl ${tool === 'eraser' ? 'bg-blue-600' : 'hover:bg-zinc-800'}`}>🧼</button>
        <button onClick={() => setTool('rect')} className={`p-3 rounded-xl ${tool === 'rect' ? 'bg-blue-600' : 'hover:bg-zinc-800'}`}>⬛</button>
        <button onClick={() => setTool('ellipse')} className={`p-3 rounded-xl ${tool === 'ellipse' ? 'bg-blue-600' : 'hover:bg-zinc-800'}`}>⚪</button>
        <button onClick={() => setTool('text')} className={`p-3 rounded-xl ${tool === 'text' ? 'bg-blue-600' : 'hover:bg-zinc-800'}`}>A</button>
      </div>
      <div className="w-10 h-px bg-zinc-700"></div>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-10 h-10 bg-transparent border-0 cursor-pointer" />
      <div className="px-2">
        <input type="range" min="1" max="50" value={brushSize} onChange={(e) => setBrushSize(Number(e.target.value))} className="w-full" />
        <span className="text-xs text-zinc-400">{brushSize}</span>
      </div>
    </div>
  );
};

export default Toolbar;