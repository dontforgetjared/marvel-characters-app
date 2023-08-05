import type { CharacterURLs } from '../services/types';

function getComicLinkFromProfileURLs(characterURLs: CharacterURLs[]) {
  return characterURLs.filter((url) => url.type === 'comiclink')[0];
}

export default getComicLinkFromProfileURLs;
