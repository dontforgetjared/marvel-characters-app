import { useDispatch } from 'react-redux';
import Card from '../../components/Card/Card';
import Grid from '../../components/Layout/Grid';
import truncateText from '../../utils/truncateText';
import type { Character } from '../../services/types';
import { active, profileOpen } from './characterSlice';
import getComicLinkFromProfileURLs from '../../utils/getComicLinkFromProfileURLs';

interface ICharactersProps {
  characters?: Character[];
}

function CharacterCards({ characters }: ICharactersProps) {
  const dispatch = useDispatch();

  return (
    <Grid>
      {characters?.map((character) => {
        const charactersComicList = getComicLinkFromProfileURLs(character.urls);
        const actions = [
          {
            type: 'Details',
            onClick: () => {
              dispatch(active(character));
              dispatch(profileOpen(true));
            },
          },
          {
            type: 'Comics',
            url: charactersComicList.url,
            isExternal: true,
          },
        ];

        return (
          <Card key={character.id}>
            <Card.Body>
              <Card.Image
                imageSrc={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                altText={character.name}
              />
              <Card.Header>{character.name}</Card.Header>
              {character.description && <Card.Text>{truncateText(character.description, 80)}</Card.Text>}
            </Card.Body>
            <Card.Actions actions={actions} />
          </Card>
        );
      })}
    </Grid>
  );
}

export default CharacterCards;
