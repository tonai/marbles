import Game from "../Game";
import Editor from "../Editor";

import styles from "./styles.module.css";
import { Mode } from "../../types";
import { useGame } from "../../store/game";

export default function StartScreen() {
  // const [mode, setMode] = useState<Mode>(Mode.WAIT);
  const mode = useGame(state => state.mode);

  return (
    <div className={styles.flex}>
      <div>
        {import.meta.env.DEV && (
          <button onClick={() => Dusk.actions.setMode(Mode.EDITOR)} type="button">
            Editor
          </button>
        )}
        <button onClick={() => Dusk.actions.setMode(Mode.PLAY)} type="button">
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
