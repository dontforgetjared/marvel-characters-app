import { useGetAllCharactersQuery } from '../services/api';
import Main from '../components/Layout/Main';
import MarvelCharacters from '../features/MarvelCharacters';
import Navbar from '../components/Navbar/Navbar';
import Pagination from '../components/Pagination/Pagination';

function App() {
  const { data, isLoading, isFetching, isError, isSuccess } = useGetAllCharactersQuery();
  const characters = data?.results;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar includeSearch />
      <Main>
        <MarvelCharacters characters={characters} />
        <Pagination limit={data?.limit} totalResults={data?.total} />
      </Main>
    </>
  );
}

export default App;
