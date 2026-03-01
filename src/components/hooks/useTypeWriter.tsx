import React, { useState, useEffect } from 'react';

export const useTypeWriter = (text: string, speed = 18) => {
  const [output, setOutput] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setOutput("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (!text) return;

    if (index >= text.length) return;

    const delay = Math.random() * (speed * 0.8) + speed * 0.2;

    const timeout = setTimeout(() => {
      setOutput((prev) => prev + text[index]);
      setIndex((i) => i + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  return output;
}