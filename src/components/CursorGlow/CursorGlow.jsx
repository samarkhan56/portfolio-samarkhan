import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed w-72 h-72 rounded-full bg-purple-500/20 blur-[120px] z-0"
      style={{
        left: position.x - 140,
        top: position.y - 140,
      }}
    />
  );
}

export default CursorGlow;