import { IModel } from "../../helpers/collection";
import { ballModel } from "../../constants/blocks";
import { IModelProps } from "../GLTFModel";
import GhostBall from "./GhostBall";
import PlayerBall from "./PlayerBall";
import { useGame } from "../../store/game";

interface IBallProps extends IModelProps {
  models: Record<string, IModel>;
  playerId: string;
}

export default function Ball(props: IBallProps) {
  const { models, playerId, ...modelProps } = props;
  const yourPlayerId = useGame(state => state.playerId);
  const model = models[ballModel];

  if (playerId !== yourPlayerId) {
    return <GhostBall {...modelProps} model={model} playerId={playerId} />;
  }

  return <PlayerBall {...modelProps} model={model} />;
}
