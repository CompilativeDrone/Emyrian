import { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Line, Rect, Circle, Text as KonvaText } from 'react-konva';
import Toolbar from './components/Toolbar';
import LayersPanel from './components/LayersPanel';

interface Layer {
  id: string;
  name: string;
  visible: boolean;
  opacity: number;
  elements: any[];
}

const App = () => {
  const [tool, setTool] = useState<'select' | 'brush' | 'eraser' | 'rect' | 'ellipse' | 'text'>('brush');
  const [color, setColor] = useState('#ff0000');
  const [brushSize, setBrushSize] = useState(5);
  const [layers, setLayers] = useState<Layer[]>([
    { id: '1', name: 'Background', visible: true, opacity: 1, elements: [] }
  ]);
  const [currentLayerId, setCurrentLayerId] = useState('1');
  const [history, setHistory] = useState<any[]>([]);
  const [stageScale, setStageScale] = useState(1);
  const [stageX, setStageX] = useState(0);
  const [stageY, setStageY] = useState(0);

  const stageRef = useRef<any>(null);
  const isDrawing = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const currentLayer = layers.find(l => l.id === currentLayerId);

  const addToHistory = () => {
    // Simplified history
  };

  const handleMouseDown = (e: any) => {
    if (!currentLayer) return;
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    lastPos.current = pos;
    // Start new element based on tool
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing.current || !currentLayer) return;
    const pos = e.target.getStage().getPointerPosition();
    // Draw logic based on tool (simplified for demo - full implementation in real)
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  // Zoom with wheel
  useEffect(() => {
    const stage = stageRef.current;
    if (stage) {
      stage.on('wheel', (e: any) => {
        e.evt.preventDefault();
        const scaleBy = 1.1;
        const oldScale = stageScale;
        const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;
        setStageScale(newScale);
      });
    }
  }, [stageScale]);

  return (
    <div className="flex h-screen bg-zinc-950 text-white">
      {/* Toolbar */}
      <Toolbar tool={tool} setTool={setTool} color={color} setColor={setColor} brushSize={brushSize} setBrushSize={setBrushSize} />
      
      {/* Canvas Area */}
      <div className="flex-1 flex items-center justify-center bg-[#1a1a1a] relative overflow-hidden">
        <Stage
          ref={stageRef}
          width={window.innerWidth - 300}
          height={window.innerHeight}
          scaleX={stageScale}
          scaleY={stageScale}
          x={stageX}
          y={stageY}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          draggable
        >
          <Layer>
            {currentLayer?.elements.map((el, i) => {
              if (el.type === 'line') return <Line key={i} points={el.points} stroke={el.color} strokeWidth={el.size} />;
              // Add more element types...
              return null;
            })}
          </Layer>
        </Stage>
      </div>

      {/* Layers Panel */}
      <LayersPanel layers={layers} setLayers={setLayers} currentLayerId={currentLayerId} setCurrentLayerId={setCurrentLayerId} />
    </div>
  );
};

export default App;