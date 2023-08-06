import { useDispatch, useSelector } from 'react-redux';
import { profileOpen, selectActive, selectProfile } from './characterSlice';
import Accordion from '../../components/Accordion/Accordion';
import SlideOver from '../../components/SlideOver/SlideOver';
import type { Character } from '../../services/types';
import getComicLinkFromProfileURLs from '../../utils/getComicLinkFromProfileURLs';
import isObjectEmpty from '../../utils/isObjectEmpty';

function CharacterProfile() {
  const dispatch = useDispatch();
  const activeCharacter = useSelector(selectActive) as Character;
  const isProfileOpen = useSelector(selectProfile);

  const charactersComicList = !isObjectEmpty(activeCharacter) && getComicLinkFromProfileURLs(activeCharacter.urls);

  // TODO: add external link icon to comics list button and update brand colors

  const onProfileClose = () => {
    dispatch(profileOpen(false));
  };

  const generateContentList = (comics: { name: string }[]) => {
    const list = comics.map((comic: { name: string }) => <li key={comic.name}>{comic.name}</li>);
    return <ul>{list}</ul>;
  };

  return (
    <SlideOver isOpen={isProfileOpen} closeHandler={onProfileClose} panelTitle="Character Profile">
      <div className="divide-y divide-gray-200">
        <div className="pb-6">
          <div className="h-24 bg-indigo-700 sm:h-20 lg:h-28" />
          <div className="-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-16">
            <div>
              <div className="-m-1 flex">
                <div className="inline-flex overflow-hidden rounded-lg border-4 border-white">
                  {activeCharacter?.thumbnail && (
                    <img
                      className="h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                      src={`${activeCharacter?.thumbnail?.path}.${activeCharacter?.thumbnail?.extension}`}
                      alt={activeCharacter.name}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6 sm:ml-6 sm:flex-1">
              <div>
                <div className="flex items-center">
                  <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">{activeCharacter.name}</h3>
                </div>
              </div>
              {charactersComicList && (
                <div className="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                  <a
                    href={charactersComicList.url}
                    className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:flex-1"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Comics
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="px-4 py-5 sm:px-0 sm:py-0">
          <dl className="space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200">
            {activeCharacter.description && (
              <div className="sm:flex sm:px-6 sm:py-5">
                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">Bio</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                  <p>{activeCharacter?.description}</p>
                </dd>
              </div>
            )}
          </dl>
        </div>
        <div className="sm:divide-y">
          {activeCharacter?.comics?.available ? (
            <Accordion title="Comics" content={generateContentList(activeCharacter.comics.items)} />
          ) : null}
          {activeCharacter?.series?.available ? (
            <Accordion title="Series" content={generateContentList(activeCharacter.series.items)} />
          ) : null}
          {activeCharacter?.stories?.available ? (
            <Accordion title="Stories" content={generateContentList(activeCharacter.stories.items)} />
          ) : null}
        </div>
      </div>
    </SlideOver>
  );
}

export default CharacterProfile;
