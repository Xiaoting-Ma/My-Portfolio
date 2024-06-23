import React, { useState, useEffect } from 'react';
import '../index.css';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const mouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener('mousemove', mouseMove);
  
      return () => {
        window.removeEventListener('mousemove', mouseMove);
      };
    }, []);
  
    return <div className="cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>;
  };
  
  export default Cursor;