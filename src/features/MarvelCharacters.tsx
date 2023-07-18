import Card from '../components/Card/Card';
import Grid from '../components/Layout/Grid';
import truncateText from '../utils/truncateText';
import type { Character } from '../services/types';

interface ICharactersProps {
  characters?: Character[];
}

function MarvelCharacters({ characters }: ICharactersProps) {
  if (!characters?.length) return <p className="text-sm text-gray-700 mb-4"> Nothing found :(</p>;

  return (
    <Grid>
      {characters?.map((character) => {
        const charactersComicList = character.urls.filter((url) => url.type === 'comiclink')[0];
        const actions = [
          {
            type: 'Details',
            onClick: () => console.log(character.id),
          },
          {
            type: 'Comics',
            url: charactersComicList.url,
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
            <Card.Actions actions={actions} isExternal />
          </Card>
        );
      })}
    </Grid>
  );
}

export default MarvelCharacters;
