export function HighlightedWords({ text, highlightedWords }) {
  const words = text.split(" ");

  const result = [];
  let plainText = "";

  words.forEach((word, index) => {
    // Limpiar la palabra de puntuación para la comparación
    const cleanWord = word.replace(/[.,;:!?()"']/g, "");

    const match = highlightedWords.find(
      (highlight) => highlight.word.toLowerCase() === cleanWord.toLowerCase()
    );

    if (match) {
      // Si hay texto plano acumulado, lo agregamos como un solo nodo
      if (plainText) {
        result.push(plainText);
        plainText = "";
      }
      // Agregamos el span con la palabra destacada (preservando la puntuación original)
      result.push(
        <span key={index} style={{ color: match.color }}>
          {word}
        </span>
      );
      // Agregamos el espacio después del span
      result.push(" ");
    } else {
      // Acumulamos el texto plano
      plainText += word + " ";
    }
  });

  // Agregamos el texto plano restante
  if (plainText) {
    result.push(plainText);
  }

  return result;
}