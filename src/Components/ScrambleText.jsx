import { animate } from "motion";
import { RandomWorkdPickers } from "../js/RandomWordPicker";
import { useState, useEffect, useMemo } from "react";
import { HighlightedWords } from "./HighlightedWords";

export function ScrambleText({ InsertText, highlightedWords }) {
  const [currentText, setText] = useState(InsertText);
  const [isResolved, setIsResolved] = useState(false);

  // Memoizar las letras para no recalcular en cada render
  const letters = useMemo(() => InsertText.split(""), [InsertText]);

  useEffect(() => {
    const animation = animate(0, 100, {
      // Reducido de 20s a 3s: 20s @ 60fps = ~1200 renders por animación
      duration: 3,
      onUpdate: (progreso) => {
        const resolvedCount = Math.floor((progreso / 100) * letters.length);

        let result = "";
        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === " ") {
            // Preservar los espacios para que la estructura de palabras no cambie
            result += " ";
          } else if (i < resolvedCount) {
            result += letters[i];
          } else {
            result += RandomWorkdPickers();
          }
        }

        setText(result);
      },
      onComplete: () => {
        setIsResolved(true);
      }
    });

    // Limpieza: detiene la animación al desmontar o al re-ejecutar el effect
    // (requerido para evitar la doble ejecución de React StrictMode en dev)
    return () => {
      animation.stop();
    };
  }, [letters]);

  if (isResolved && highlightedWords && highlightedWords.length > 0) {
    return <HighlightedWords text={InsertText} highlightedWords={highlightedWords} />;
  }

  return currentText;
}