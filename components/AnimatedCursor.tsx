'use client';

import { useEffect } from 'react';

export function AnimatedCursor() {
  useEffect(() => {
    const dot = document.createElement('div');
    dot.className = 'cursor-glow';
    document.body.appendChild(dot);

    const moveCursor = (event: MouseEvent) => {
      dot.style.left = `${event.clientX}px`;
      dot.style.top = `${event.clientY}px`;
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(dot);
    };
  }, []);

  return null;
}
