import React, { FormEvent, useCallback, useEffect, useRef } from "react";

function App() {
  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    nameInputRef.current?.focus();
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite seu nome"
          autoFocus
          ref={nameInputRef}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
