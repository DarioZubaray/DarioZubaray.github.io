import { useState, useEffect, useRef, useCallback } from 'react';
import Wiu from '../ui/flappy-wiu/Wiu';
import Pipe from '../ui/flappy-wiu/Pipe';
import { CONSTANTS } from '../ui/flappy-wiu/FlappyWiuConstants';

const { JUMP_STRENGTH, GRAVITY, WIU_SIZE: BIRD_SIZE, PIPE_SPEED, PIPE_WIDTH, PIPE_GAP } = CONSTANTS;

const FlappyWiuScreen = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [birdY, setBirdY] = useState(250);
  const [birdVelocity, setBirdVelocity] = useState(0);
  const [pipes, setPipes] = useState([]);
  const [rotation, setRotation] = useState(0);
  
  const gameLoopRef = useRef();
  const screenWidth = 800;
  const screenHeight = 600;

  const jump = useCallback(() => {
    if (!gameStarted) {
      setGameStarted(true);
      setPipes([{ x: screenWidth, topHeight: Math.random() * 250 + 100, passed: false }]);
    }
    if (!gameOver) {
      setBirdVelocity(JUMP_STRENGTH);
    }
  }, [gameStarted, gameOver]);

  const resetGame = () => {
    setBirdY(250);
    setBirdVelocity(0);
    setPipes([]);
    setScore(0);
    setGameOver(false);
    setGameStarted(false);
    setRotation(0);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        if (gameOver) {
          resetGame();
        } else {
          jump();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameOver, gameStarted, jump]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    gameLoopRef.current = setInterval(() => {
      setBirdVelocity(v => v + GRAVITY);
      setBirdY(y => {
        const newY = y + birdVelocity;
        if (newY < 0 || newY > screenHeight - BIRD_SIZE) {
          setGameOver(true);
          return y;
        }
        return newY;
      });

      setRotation(Math.min(Math.max(birdVelocity * 3, -30), 90));

      setPipes(currentPipes => {
        let newPipes = currentPipes.map(pipe => ({
          ...pipe,
          x: pipe.x - PIPE_SPEED
        }));

        newPipes.forEach(pipe => {
          const birdLeft = 100;
          const birdRight = 100 + BIRD_SIZE;
          const birdTop = birdY;
          const birdBottom = birdY + BIRD_SIZE;

          const pipeLeft = pipe.x;
          const pipeRight = pipe.x + PIPE_WIDTH;

          if (birdRight > pipeLeft && birdLeft < pipeRight) {
            if (birdTop < pipe.topHeight || birdBottom > pipe.topHeight + PIPE_GAP) {
              setGameOver(true);
            }
          }

          if (!pipe.passed && pipe.x + PIPE_WIDTH < 100) {
            pipe.passed = true;
            setScore(s => s + 1);
          }
        });

        newPipes = newPipes.filter(pipe => pipe.x > -PIPE_WIDTH);

        if (newPipes.length === 0 || newPipes[newPipes.length - 1].x < screenWidth - 300) {
          newPipes.push({
            x: screenWidth,
            topHeight: Math.random() * 250 + 100,
            passed: false
          });
        }

        return newPipes;
      });
    }, 1000 / 60);

    return () => clearInterval(gameLoopRef.current);
  }, [gameStarted, gameOver, birdY, birdVelocity]);

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center" style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #38bdf8, #7dd3fc)',
      padding: '20px'
    }}>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'relative',
            width: `${screenWidth}px`,
            height: `${screenHeight}px`,
            backgroundColor: '#bae6fd',
            overflow: 'hidden',
            cursor: 'pointer',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
          }}
          onClick={gameOver ? resetGame : jump}
        >
          {/* Nubes decorativas */}
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '80px',
            width: '100px',
            height: '50px',
            backgroundColor: 'white',
            borderRadius: '50px',
            opacity: 0.7
          }}></div>
          <div style={{
            position: 'absolute',
            top: '100px',
            right: '150px',
            width: '130px',
            height: '60px',
            backgroundColor: 'white',
            borderRadius: '60px',
            opacity: 0.6
          }}></div>
          <div style={{
            position: 'absolute',
            top: '180px',
            left: '350px',
            width: '110px',
            height: '45px',
            backgroundColor: 'white',
            borderRadius: '50px',
            opacity: 0.5
          }}></div>

          {/* Suelo */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100px',
            background: 'linear-gradient(to top, #15803d, #22c55e)'
          }}></div>

          {/* Tubos */}
          {pipes.map((pipe, i) => (
            <Pipe key={i} x={pipe.x} topHeight={pipe.topHeight} />
          ))}

          {/* Foquita */}
          <Wiu y={birdY} rotation={rotation} />

          {/* Puntaje */}
          <div style={{
            position: 'absolute',
            top: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '60px',
            fontWeight: 'bold',
            color: 'white',
            textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
            zIndex: 10
          }}>
            {score}
          </div>

          {/* Pantalla de inicio */}
          {!gameStarted && !gameOver && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 100
            }}>
              <h1 style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: 'white',
                textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                marginBottom: '20px'
              }}>
                Flappy Wiu 🦭
              </h1>
              <p style={{
                fontSize: '24px',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>
                Click o presiona ESPACIO para comenzar
              </p>
            </div>
          )}

          {/* Pantalla de game over */}
          {gameOver && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.6)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 100
            }}>
              <h2 style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: 'white',
                textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                marginBottom: '20px'
              }}>
                Game Over
              </h2>
              <p style={{
                fontSize: '36px',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                marginBottom: '20px'
              }}>
                Score: {score}
              </p>
              <p style={{
                fontSize: '20px',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>
                Click o presiona ESPACIO para reintentar
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlappyWiuScreen;