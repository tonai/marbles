import { ballModel } from "../../constants/blocks";
import { IModelProps } from "../GLTFModel";
// import GhostBall from "./GhostBall";
// import PlayerBall from "./PlayerBall";
import { useGame } from "../../store/game";
import FreeBall from "./FreeBall";

interface IBallProps extends IModelProps {
  playerId: string;
}

export default function Ball(props: IBallProps) {
  const { playerId, ...modelProps } = props;
  const ghost = useGame(state => state.ghosts[playerId]);
  const models = useGame(state => state.models);
  const model = models?.[ballModel];

  return <FreeBall {...modelProps} ghost={ghost} model={model} />

  // if (playerId !== yourPlayerId) {
  //   return <GhostBall {...modelProps} model={model} playerId={playerId} />;
  // }

  // return <PlayerBall {...modelProps} model={model} />;
}
