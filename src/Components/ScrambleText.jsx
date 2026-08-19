import { animate } from "motion";
import { RandomWorkdPickers } from "../js/RandomWordPicker";
import { useState, useEffect } from "react";

export function ScrambleText(){
  const [currentText, setText] = useState('Hola');
  const textToChange = "Hola Mundo";
  const letters = textToChange.split("");

  useEffect(() => {
    animate(0, 100, {
      duration: 5,
      onUpdate: (progreso) => {
        const resolvedCount = Math.floor((progreso / 100) * letters.length);

        let result = "";
        for (let i = 0; i < letters.length; i++) {
          if (i < resolvedCount) {
            result += letters[i];
          } else {
            result += RandomWorkdPickers();
          }
        }

        setText(result);
      }
    });
  }, []);

  return(
    <section className="Prueba">
      <div>
        <p className="Text">{currentText}</p>
      </div>
    </section>
  );
}