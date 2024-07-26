import { useState } from "react";

import Game from "../Game";
import Editor from "../Editor";

import styles from "./styles.module.css";

enum Mode {
  WAIT,
  EDITOR,
  PLAY,
}

export default function StartScreen() {
  const [mode, setMode] = useState<Mode>(Mode.WAIT);

  return (
    <div className={styles.flex}>
      <div>
        {import.meta.env.DEV && (
          <button onClick={() => setMode(Mode.EDITOR)} type="button">
            Editor
          </button>
        )}
        <button onClick={() => setMode(Mode.PLAY)} type="button">
          Play
        </button>
      </div>
      <div className={styles.flex1}>
        {mode === Mode.PLAY && <Game />}
        {mode === Mode.EDITOR && <Editor />}
      </div>
    </div>
  );
}
