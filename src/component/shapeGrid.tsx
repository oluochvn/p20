import { useRef, useEffect } from 'react';
import './ShapeGrid.css';

type Props = {
  direction?: 'left' | 'right' | 'up' | 'down';
  speed?: number;
  borderColor?: string;
  squareSize?: number;
  hoverFillColor?: string;
  shape?: 'square' | 'circle';
  hoverTrailAmount?: number;
  className?: string;
};

const ShapeGrid = ({
  direction = 'right',
  speed = 1,
  borderColor = '#999',
  squareSize = 40,
  hoverFillColor = '#222',
  shape = 'square',
  hoverTrailAmount = 0,
  className = ''
}: Props) => {
  // Minimal implementation to use props and avoid unused destructured elements
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // placeholder effect that uses speed/direction/hoverTrailAmount
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty('--sg-speed', String(speed));
    el.style.setProperty('--sg-direction', direction);
    el.style.setProperty('--sg-trail', String(hoverTrailAmount));
  }, [speed, direction, hoverTrailAmount]);

  const shapeStyle: React.CSSProperties = {
    width: squareSize,
    height: squareSize,
    border: `2px solid ${borderColor}`,
    background: 'transparent',
    borderRadius: shape === 'circle' ? '50%' : 0,
  };

  return (
    <div ref={containerRef} className={`shape-grid ${className}`}> 
      <div
        className="shape-grid__item"
        style={shapeStyle}
        onMouseEnter={e => (e.currentTarget.style.background = hoverFillColor)}
        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        aria-hidden
      />
    </div>
  );
};

export default ShapeGrid;