import { useState } from 'react';
import { useGetCharactersQuery } from '../services/api';
import Main from '../components/Layout/Main';
import MarvelCharacters from '../features/MarvelCharacters';
import Navbar from '../components/Navbar/Navbar';
import Pagination from '../components/Pagination/Pagination';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(20);
  const [offset, setOffset] = useState(0);
  const { data, isLoading, isFetching, isError, isSuccess } = useGetCharactersQuery(offset);
  const characters = data?.results;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handlePageChange = (page: number) => {
    const prevPage = page - 1;
    const newOffset = prevPage * count;
    setCurrentPage(page);
    setOffset(newOffset);
  };

  return (
    <>
      <Navbar includeSearch />
      <Main>
        <MarvelCharacters characters={characters} />
        <Pagination
          currentPageNum={currentPage}
          limit={data?.limit}
          offset={data?.offset}
          onPageChange={handlePageChange}
          totalResults={data?.total}
        />
      </Main>
    </>
  );
}

export default App;
