import { CONSTANTS } from './FlappyWiuConstants';
const { PIPE_WIDTH, PIPE_GAP} = CONSTANTS;

const Pipe = ({ x, topHeight }) => (
  <>
    {/* Tubo superior */}
    <div style={{
      position: 'absolute',
      left: `${x}px`,
      top: 0,
      width: `${PIPE_WIDTH}px`,
      height: `${topHeight}px`,
      backgroundColor: '#16a34a',
      border: '3px solid #166534'
    }}>
      <div style={{
        position: 'absolute',
        bottom: '-8px',
        left: '-5px',
        right: '-5px',
        height: '35px',
        backgroundColor: '#15803d',
        border: '3px solid #166534'
      }}></div>
    </div>
    
    {/* Tubo inferior */}
    <div style={{
      position: 'absolute',
      left: `${x}px`,
      top: `${topHeight + PIPE_GAP}px`,
      width: `${PIPE_WIDTH}px`,
      height: `${600 - topHeight - PIPE_GAP}px`,
      backgroundColor: '#16a34a',
      border: '3px solid #166534'
    }}>
      <div style={{
        position: 'absolute',
        top: '-8px',
        left: '-5px',
        right: '-5px',
        height: '35px',
        backgroundColor: '#15803d',
        border: '3px solid #166534'
      }}></div>
    </div>
  </>
);

export default Pipe;