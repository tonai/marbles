import styles from "./styles.module.css";

interface IHeaderProps {
  camera?: "free" | "fp";
  onCamera: () => void;
  onStart: () => void;
}

export default function GameHeader(props: IHeaderProps) {
  const { camera, onCamera, onStart } = props;

  return (
    <header className={styles.header}>
      <button type="button" onClick={onStart}>
        Start
      </button>
      {camera && (
        <button type="button" onClick={onCamera}>
          Change camera
        </button>
      )}
    </header>
  );
}
