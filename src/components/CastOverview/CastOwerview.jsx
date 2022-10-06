import { Img } from './CastOverview.styled';

import notFound from '../../images/404/404-page.jpg';

export default function CastOverview({ cast }) {
  return cast.map(
    ({ id, name, character = 'No information', profile_path }) => {
      return (
        <li key={id}>
          <Img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : notFound
            }
            alt={character}
          />
          <div>
            <h3>Name: {name || 'No information about name'}</h3>
            <p>Character: {character || 'No information about character.'}</p>
          </div>
        </li>
      );
    }
  );
}
