import React from 'react';

const LayersPanel = ({ layers, setLayers, currentLayerId, setCurrentLayerId }: any) => {
  return (
    <div className="w-64 bg-zinc-900 border-l border-zinc-800 p-4 flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Layers</h2>
      <div className="flex-1 space-y-2 overflow-auto">
        {layers.map((layer: any) => (
          <div 
            key={layer.id} 
            onClick={() => setCurrentLayerId(layer.id)}
            className={`p-3 rounded-xl cursor-pointer flex justify-between items-center ${currentLayerId === layer.id ? 'bg-blue-600' : 'bg-zinc-800 hover:bg-zinc-700'}`}
          >
            <span>{layer.name}</span>
            <span className="text-xs">{layer.visible ? '👁️' : '🙈'}</span>
          </div>
        ))}
      </div>
      <button className="mt-auto py-3 bg-blue-600 hover:bg-blue-700 rounded-2xl text-sm font-medium">+ New Layer</button>
    </div>
  );
};

export default LayersPanel;