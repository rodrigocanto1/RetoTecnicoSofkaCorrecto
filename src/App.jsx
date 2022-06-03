import preguntas from "./preguntas";
import { useState } from "react";
import "./App.css";

function App() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answersShown, setAnswersShown] = useState(false);
  const [hasName, setHasName] = useState(false);
  const [name, setName] = useState("");

  function handleAnswerSubmit(isCorrect, e) {
    // añadir score
    if (isCorrect) setScore(score + 1);
    // añadir estilos de pregunta
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    // cambiar a la siguiente pregunta

    setTimeout(() => {
      if (preguntaActual === preguntas.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
      }
    }, 1500);
  }

  if (isFinished)
    return (
      <main className="app">
        <div className="juego-terminado">
          <span>
            {" "}
            Congratulations {name}
            You got {score} of {preguntas.length}{" "}
          </span>
          <button
            onClick={() => {
              window.location.href = "/";
              localStorage.setItem("Name", name);
              localStorage.setItem("score", score);
            }}
          >
            {" "}
            Play again
          </button>
          <button
            onClick={() => {
              setIsFinished(false);
              setAnswersShown(true);
              setPreguntaActual(0);
            }}
          >
            See answers
          </button>
        </div>
      </main>
    );

  if (answersShown)
    return (
      <main className="app">
        <div className="lado-izquierdo">
          <div className="numero-pregunta">
            <span> Question {preguntaActual + 1} of</span> {preguntas.length}
          </div>
          <div className="titulo-pregunta">
            {preguntas[preguntaActual].titulo}
          </div>
          <div>
            {
              preguntas[preguntaActual].opciones.filter(
                (opcion) => opcion.isCorrect
              )[0].textoRespuesta
            }
          </div>
          <button
            onClick={() => {
              if (preguntaActual === preguntas.length - 1) {
                window.location.href = "/";
              } else {
                setPreguntaActual(preguntaActual + 1);
              }
            }}
          >
            {preguntaActual === preguntas.length - 1 ? "Play again" : "Next"}
          </button>
        </div>
      </main>
    );

  return (
    <main className="app">
      {(hasName && (
        <>
          <div className="lado-izquierdo">
            <div className="titulo-pregunta">
              {preguntas[preguntaActual].titulo}
            </div>
            <div>{preguntas[preguntaActual].seccion}</div>
            <div className="numero-pregunta">
              <span> Question {preguntaActual + 1} of</span> {preguntas.length}
            </div>
          </div>
          <div className="lado-derecho">
            {preguntas[preguntaActual].opciones.map((respuesta) => (
              <button
                key={respuesta.textoRespuesta}
                onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
              >
                {respuesta.textoRespuesta}
              </button>
            ))}
          </div>
        </>
      )) || (
        <div>
          <div className="text-name">Insert your name</div>
          <input
            className="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => setHasName(true)} type="submit">
            Play
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
