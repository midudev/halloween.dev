import { useEffect, useRef, useState } from "preact/hooks";
import { drawCircle, drawLine } from "🛠️/canvas.ts";

export default function Canvas(props: { uid: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [density, setDensity] = useState(1);
  const [penSize, setPenSize] = useState(2);

  const pallete = [
    "#000000",
    "#a7f3d0",
  ];

  const [color, setColor] = useState("#000000");

  const getContext = (canvas: HTMLCanvasElement) => {
    return canvas.getContext("2d") as CanvasRenderingContext2D;
  };

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = getContext(canvas);
    ctx.fillStyle = pallete[pallete.length - 1];
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const down = (e: PointerEvent) => {
    (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId);
    setIsDrawing(true);
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = getContext(canvas);
    const scale = canvas.width / canvas.offsetWidth;
    const x = Math.floor(e.offsetX * scale);
    const y = Math.floor(e.offsetY * scale);
    drawCircle(ctx, x, y, penSize, density, color);
    setLastX(x);
    setLastY(y);
  };

  const up = (e: PointerEvent) => {
    setIsDrawing(false);
  };

  const move = (e: PointerEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = getContext(canvas);
    const scale = canvas.width / canvas.offsetWidth;
    const x = Math.floor(e.offsetX * scale);
    const y = Math.floor(e.offsetY * scale);

    drawLine(ctx, lastX, lastY, x, y, penSize, density, color);
    setLastX(x);
    setLastY(y);
  };

  const prevent = (e: TouchEvent) => {
    e.preventDefault();
  };

  const cancel = (e: PointerEvent) => {
    setIsDrawing(false);
  };
  const save = async () => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const promise = new Promise((resolve) => {
      canvas.toBlob(resolve, `image/png`);
    });

    const blob = await promise as Blob;
    const formData = new FormData();
    formData.append("image", blob);
    const res = await fetch("/api/image", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      location.href = "/user/" + props.uid + "";
    }
  };

  function onChangeDensity(e: Event) {
    setDensity(Number((e.target as HTMLSelectElement).value));
  }
  function onChangePenSize(e: Event) {
    setPenSize(Number((e.target as HTMLSelectElement).value));
  }
  function onChangeColor(e: Event) {
    setColor((e.target as HTMLSelectElement).value);
  }

  return (
    <div>
      <div class="flex flex-col border-2 border-green-400 rounded shadow-xl">
        <canvas
          ref={canvasRef}
          class="bg-green-200 touch-none image-crisp"
          style="image-rendering: pixelated;"
          width={200}
          height={200}
          onPointerDown={down}
          onPointerUp={up}
          onPointerMove={move}
          onTouchMove={prevent}
          onPointerCancel={cancel}
        />
        <div>
          <select
            onInput={onChangeDensity}
          >
            <option value="0.1">10%</option>
            <option value="0.3">30%</option>
            <option value="0.5">50%</option>
            <option value="1.0">100%</option>
          </select>

          <select onInput={onChangePenSize}>
            <option value="1">1px</option>
            <option value="2">2px</option>
            <option value="3">3px</option>
            <option value="4">4px</option>
            <option value="5">5px</option>
            <option value="6">6px</option>
            <option value="7">7px</option>
            <option value="8">8px</option>
            <option value="9">9px</option>
            <option value="10">10px</option>
            <option value="10">15px</option>
            <option value="10">20px</option>
          </select>

          <select onInput={onChangeColor}>
            <option value="#000000">Black</option>
            <option value="#ffffff">White</option>
          </select>

          <button
            class="px-4 py-3 bg-gray-800 text-white"
            onClick={save}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
