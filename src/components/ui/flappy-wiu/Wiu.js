import { CONSTANTS } from './FlappyWiuConstants';
const { WIU_SIZE: BIRD_SIZE } = CONSTANTS;

const Wiu = ({ y, rotation }) =>  {
  const sealStyle = {
    position: 'absolute',
    left: '100px',
    top: `${y}px`,
    width: `${BIRD_SIZE}px`,
    height: `${BIRD_SIZE}px`,
    transform: `rotate(${rotation}deg)`,
    transition: 'transform 0.1s'
  };

  return (
    <div style={sealStyle}>
      {/* Cuerpo principal celeste */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#67e8f9',
        borderRadius: '50%',
        border: '2px solid #22d3ee'
      }}>
        {/* Pancita blanca */}
        <div style={{
          position: 'absolute',
          bottom: '2px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '28px',
          height: '18px',
          backgroundColor: 'white',
          borderRadius: '50%',
          clipPath: 'ellipse(50% 40% at 50% 100%)'
        }}></div>
        
        {/* Ojo izquierdo */}
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          width: '8px',
          height: '8px',
          backgroundColor: '#000',
          borderRadius: '50%'
        }}>
          {/* Brillo del ojo */}
          <div style={{
            position: 'absolute',
            top: '1px',
            left: '1px',
            width: '3px',
            height: '3px',
            backgroundColor: 'white',
            borderRadius: '50%'
          }}></div>
        </div>
        
        {/* Ojo derecho */}
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          width: '8px',
          height: '8px',
          backgroundColor: '#000',
          borderRadius: '50%'
        }}>
          {/* Brillo del ojo */}
          <div style={{
            position: 'absolute',
            top: '1px',
            left: '1px',
            width: '3px',
            height: '3px',
            backgroundColor: 'white',
            borderRadius: '50%'
          }}></div>
        </div>
        
        {/* Nariz */}
        <div style={{
          position: 'absolute',
          top: '18px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '5px',
          height: '3px',
          backgroundColor: '#374151',
          borderRadius: '50%'
        }}></div>
        
        {/* Bigotes izquierdos */}
        <div style={{
          position: 'absolute',
          top: '18px',
          left: '2px',
          width: '10px',
          height: '1px',
          backgroundColor: '#6b7280',
          transform: 'rotate(-15deg)'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '21px',
          left: '1px',
          width: '10px',
          height: '1px',
          backgroundColor: '#6b7280',
          transform: 'rotate(5deg)'
        }}></div>
        
        {/* Bigotes derechos */}
        <div style={{
          position: 'absolute',
          top: '18px',
          right: '2px',
          width: '10px',
          height: '1px',
          backgroundColor: '#6b7280',
          transform: 'rotate(15deg)'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '21px',
          right: '1px',
          width: '10px',
          height: '1px',
          backgroundColor: '#6b7280',
          transform: 'rotate(-5deg)'
        }}></div>
        
        {/* Aleta izquierda */}
        <div style={{
          position: 'absolute',
          left: '-4px',
          top: '50%',
          transform: 'translateY(-50%) rotate(-30deg)',
          width: '10px',
          height: '14px',
          backgroundColor: '#22d3ee',
          borderRadius: '50%'
        }}></div>
        
        {/* Aleta derecha */}
        <div style={{
          position: 'absolute',
          right: '-4px',
          top: '50%',
          transform: 'translateY(-50%) rotate(30deg)',
          width: '10px',
          height: '14px',
          backgroundColor: '#22d3ee',
          borderRadius: '50%'
        }}></div>
      </div>
    </div>
  );
};

export default Wiu;