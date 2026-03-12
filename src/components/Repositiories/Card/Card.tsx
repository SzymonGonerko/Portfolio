import './card.scss';
import { Play } from '../graficsLogo/Play/Play';

interface props {
  finished: string;
  library: string;
  name: string;
  key: number;
  description: string;
  github: string;
  live: string;
}

export const Card = ({ name, description, live }: props) => {
  return (
    <div className="card">
      <div className="poster">
        <div className="graphics" />
        <Play live={live} />
      </div>

      <div className="generalInfo">
        <div className="wrapperInfo">
          <p className="projectTitle">{name}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};
