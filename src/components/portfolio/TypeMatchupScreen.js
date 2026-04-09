import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import TypeButton from '../ui/type-matchup-quiz/TypeButton'
import { types } from '../../data/type-matchup'

const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const TypeMatchupScreen = () => {
  const TOTAL = 18;
  const [shuffledIndex, setShuffledIndex] = useState(0);
  const [shuffledTypes, setShuffledTypes] = useState([]);
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState([]);
  const [respondida, setRespondida] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const shuffled = shuffleArray(types);
    setShuffledTypes(shuffled);
  }, []);

  useEffect(() => {
    if (shuffledTypes.length > 0 && shuffledIndex < shuffledTypes.length) {
      const tipo = shuffledTypes[shuffledIndex];
      const modo = "attacker"//Math.random() < 0.5 ? "attacker" : "defender";
      setQuestion({ tipo, modo });
      setSelected([]);
      setRespondida(false);
    }
  }, [shuffledTypes, shuffledIndex]);

  const toggleSelect = (t) => {
    setSelected((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  const checkAnswer = () => {
    if (!question) return;

    const currentType = question.tipo;
    if (!currentType) return;

    const correct = question.modo === "attacker"
                      ? currentType.effectiveTo
                      : [...currentType.weakTo, ...currentType.resistTo, ...currentType.immuneTo];
    let points = 0;

    selected.forEach((t) => {
      if (correct.includes(t.name)) points += 1;
      else points -= 0.5;
      if(points < 0) points = 0;
    });

    setScore(prev => prev + points);
    setRespondida(true);
  };

  if (!question) return <div>Cargando...</div>;

  const nextQuestion = () => {
    if (shuffledIndex + 1 < TOTAL) {
      setShuffledIndex(i => i + 1);
    } else {
      setGameOver(true);
    }
  };

  if (gameOver) {
    return (
      <div className="quiz-card">
        <h1>🏁 ¡Fin del juego!</h1>

        <div className='score'>
          <p>Puntaje final: <b>{score.toFixed(1)}</b> / {TOTAL}</p>
        </div>

        <button
          className="btn-siguiente btn-block"
          onClick={() => {
            const reshuffled = shuffleArray(types);
            setShuffledTypes(reshuffled);
            setShuffledIndex(0);
            setScore(0);
            setSelected([]);
            setRespondida(false);
            setGameOver(false);
          }}
        >
          Jugar otra vez
        </button>
      <style jsx="true">{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .quiz-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
        .quiz-card {
          max-width: 1200px;
          margin: 0 auto;
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          padding: 30px;
        }
        .header {
          margin: 2rem;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          flex-wrap: wrap;
          gap: 15px;
        }
        .header h1 {
          font-size: 2rem;
          color: #333;
        }
        .score {
          display: flex;
          margin: 2rem;
          justify-content: center;
        }
        .info {
          font-size: 1.1rem;
          font-weight: 600;
          color: #666;
        }
        .pregunta-box {
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
          color: white;
          padding: 30px;
          border-radius: 15px;
          margin-bottom: 30px;
          text-align: center;
        }
        .pregunta-texto {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .modo-texto {
          font-size: 0.9rem;
          opacity: 0.9;
        }
        .categorias {
          margin-bottom: 30px;
        }
        .categoria {
          margin-bottom: 30px;
        }
        .categoria-titulo {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .categoria-titulo.debil { color: #dc2626; }
        .categoria-titulo.resiste { color: #16a34a; }
        .categoria-titulo.inmune { color: #2563eb; }
        .tipos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 10px;
        }
        .tipo-btn {
          padding: 12px 15px;
          border: 3px solid transparent;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.95rem;
          color: white;
          cursor: pointer;
          transition: all 0.3s;
          opacity: 0.95;
        }
        .tipo-btn:hover:not(:disabled) {
          transform: scale(1.05);
          opacity: 1;
        }
        .tipo-btn:disabled {
          cursor: not-allowed;
        }
        .tipo-btn.seleccionado {
          opacity: 1;
          border-color: #fbbf24;
          box-shadow: 0 0 0 2px #fbbf24;
        }
        .tipo-btn.incorrecto {
          border-color: #dc2626;
          box-shadow: 0 0 0 2px #dc2626;
        }
        .tipo-btn.faltante {
          border-color: #16a34a;
          box-shadow: 0 0 0 2px #16a34a;
          animation: pulse 1s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .tipo-normal { background: #a8a878; }
        .tipo-fire { background: #f08030; }
        .tipo-water { background: #6890f0; }
        .tipo-grass { background: #78c850; }
        .tipo-electric { background: #f8d030; }
        .tipo-ice { background: #98d8d8; }
        .tipo-fight { background: #c03028; }
        .tipo-poison { background: #a040a0; }
        .tipo-ground { background: #e0c068; }
        .tipo-flying { background: #a890f0; }
        .tipo-psychic { background: #f85888; }
        .tipo-bug { background: #a8b820; }
        .tipo-rock { background: #b8a038; }
        .tipo-ghost { background: #705898; }
        .tipo-dragon { background: #7038f8; }
        .tipo-dark { background: #705848; }
        .tipo-steel { background: #b8b8d0; }
        .tipo-fairy { background: #ee99ac; }
        .acciones {
          display: flex;
          gap: 15px;
        }
        .btn-verificar,
        .btn-siguiente {
          flex: 1;
          padding: 15px 30px;
          border: none;
          border-radius: 10px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          color: white;
        }
        .btn-verificar {
          background: #667eea;
        }
        .btn-verificar:hover {
          background: #5568d3;
          transform: translateY(-2px);
        }
        .btn-siguiente {
          background: #16a34a;
        }
        .btn-siguiente:hover {
          background: #15803d;
          transform: translateY(-2px);
        }
        .feedback {
          margin-top: 20px;
          padding: 15px;
          background: #f3f4f6;
          border-radius: 10px;
          text-align: center;
          font-size: 1.1rem;
          font-weight: 600;
          color: #374151;
        }
        @media (max-width: 768px) {
          .header h1 {
            font-size: 1.5rem;
          }
          .pregunta-texto {
            font-size: 1.2rem;
          }
          .tipos-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
      </div>
    )
  }

  return (
    <div>
      <div className="quiz-card">
        <div className="header">
          <Link to="/demo">
            <button className="btn btn-light mx-2">⬅ Back</button>
          </Link>
          <h1>Type Matchup Quiz!</h1>
          <div className="info">
            Question { shuffledIndex + 1 }/{ TOTAL } | Points: { score }
          </div>
        </div>

        <div className="pregunta-box">
          <p className="pregunta-texto">
            Which types is the <span rel="icon">{question.tipo.icon}</span> { question.tipo.name.toUpperCase() } <span rel="icon">{question.tipo.icon}</span> type SUPER-EFFECTIVE (<span rel="icon">{question.modo === 'attacker' ? '⚔️' : '🛡️'}</span>) against?
          </p>
        </div>

        <div className="categorias">
          <div className="categoria">
            <div className="tipos-grid">
              {
                types.map(tm => {
                  let claseEstado = '';

                  const correctas = question && question.tipo.effectiveTo;
                  const seleccionado = selected.some(objeto => objeto.name.includes(tm.name));
                  const esCorrecto = correctas.includes(tm.name);
                  const esIncorrecto = respondida && seleccionado && !esCorrecto;
                  const faltante = respondida && esCorrecto && !seleccionado;

                  if (esIncorrecto) claseEstado = 'incorrecto';
                  if (faltante) claseEstado = 'faltante';
                  if (seleccionado && !esIncorrecto) claseEstado = 'seleccionado';

                  return (<TypeButton key={`${tm.id}-${tm.name}`}
                              type={ tm }
                              styles={ claseEstado }
                              handleClick={toggleSelect}/>
                )})
              }

            </div>
          </div>
        </div>

        <hr />

         {!respondida ? (
        <button onClick={checkAnswer} className="btn-verificar btn-block">Confirmar</button>
      ) : (
        <div className="space-y-3">
          <p className="text-lg">Puntaje: {score.toFixed(1)}</p>
          <button onClick={nextQuestion} className="btn-siguiente btn-block">Siguiente pregunta</button>
        </div>
      )}

        {respondida && (
          <div className="feedback">
            {
              (question.tipo.effectiveTo.length === selected.map(s => s.name).length) && 
              (question.tipo.effectiveTo.every(ans => selected.map(s => s.name).includes(ans)))
              ? `¡Correcto! 🎉 (${selected.map(s => s.name).filter(name => question.tipo.effectiveTo.includes(name)).length}/${question.tipo.effectiveTo.length}) `
              : `Incorrecto! 🙁 (${selected.map(s => s.name).filter(name => question.tipo.effectiveTo.includes(name)).length}/${question.tipo.effectiveTo.length}) Las respuestas correctas están resaltadas en verde.`
            }
          </div>
        )}

      </div>
      <style jsx="true">{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .quiz-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
        .quiz-card {
          max-width: 1200px;
          margin: 0 auto;
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          padding: 30px;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          flex-wrap: wrap;
          gap: 15px;
        }
        .header h1 {
          font-size: 2rem;
          color: #333;
        }
        .info {
          font-size: 1.1rem;
          font-weight: 600;
          color: #666;
        }
        .pregunta-box {
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
          color: white;
          padding: 30px;
          border-radius: 15px;
          margin-bottom: 30px;
          text-align: center;
        }
        .pregunta-texto {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .modo-texto {
          font-size: 0.9rem;
          opacity: 0.9;
        }
        .categorias {
          margin-bottom: 30px;
        }
        .categoria {
          margin-bottom: 30px;
        }
        .categoria-titulo {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .categoria-titulo.debil { color: #dc2626; }
        .categoria-titulo.resiste { color: #16a34a; }
        .categoria-titulo.inmune { color: #2563eb; }
        .tipos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 10px;
        }
        .tipo-btn {
          padding: 12px 15px;
          border: 3px solid transparent;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.95rem;
          color: white;
          cursor: pointer;
          transition: all 0.3s;
          opacity: 0.95;
        }
        .tipo-btn:hover:not(:disabled) {
          transform: scale(1.05);
          opacity: 1;
        }
        .tipo-btn:disabled {
          cursor: not-allowed;
        }
        .tipo-btn.seleccionado {
          opacity: 1;
          border-color: #fbbf24;
          box-shadow: 0 0 0 2px #fbbf24;
        }
        .tipo-btn.incorrecto {
          border-color: #dc2626;
          box-shadow: 0 0 0 2px #dc2626;
        }
        .tipo-btn.faltante {
          border-color: #16a34a;
          box-shadow: 0 0 0 2px #16a34a;
          animation: pulse 1s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .tipo-normal { background: #a8a878; }
        .tipo-fire { background: #f08030; }
        .tipo-water { background: #6890f0; }
        .tipo-grass { background: #78c850; }
        .tipo-electric { background: #f8d030; }
        .tipo-ice { background: #98d8d8; }
        .tipo-fight { background: #c03028; }
        .tipo-poison { background: #a040a0; }
        .tipo-ground { background: #e0c068; }
        .tipo-flying { background: #a890f0; }
        .tipo-psychic { background: #f85888; }
        .tipo-bug { background: #a8b820; }
        .tipo-rock { background: #b8a038; }
        .tipo-ghost { background: #705898; }
        .tipo-dragon { background: #7038f8; }
        .tipo-dark { background: #705848; }
        .tipo-steel { background: #b8b8d0; }
        .tipo-fairy { background: #ee99ac; }
        .acciones {
          display: flex;
          gap: 15px;
        }
        .btn-verificar,
        .btn-siguiente {
          flex: 1;
          padding: 15px 30px;
          border: none;
          border-radius: 10px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          color: white;
        }
        .btn-verificar {
          background: #667eea;
        }
        .btn-verificar:hover {
          background: #5568d3;
          transform: translateY(-2px);
        }
        .btn-siguiente {
          background: #16a34a;
        }
        .btn-siguiente:hover {
          background: #15803d;
          transform: translateY(-2px);
        }
        .feedback {
          margin-top: 20px;
          padding: 15px;
          background: #f3f4f6;
          border-radius: 10px;
          text-align: center;
          font-size: 1.1rem;
          font-weight: 600;
          color: #374151;
        }
        @media (max-width: 768px) {
          .header h1 {
            font-size: 1.5rem;
          }
          .pregunta-texto {
            font-size: 1.2rem;
          }
          .tipos-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  )
}

export default TypeMatchupScreen
