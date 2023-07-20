import { SyntheticEvent, useState } from 'react';
import { useGetCharactersQuery } from '../services/api';
import useDebounce from '../hooks/useDebounce';
import Main from '../components/Layout/Main';
import MarvelCharacters from '../features/MarvelCharacters';
import Navbar from '../components/Navbar/Navbar';
import Page from '../components/Layout/Page';
import Pagination from '../components/Pagination/Pagination';
import SkeletonCardGrid from '../components/Skeleton/SkeletonCardGrid';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(20);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data, isLoading, isFetching, isError } = useGetCharactersQuery({
    offset,
    searchTerm: debouncedSearchTerm,
  });
  const characters = data?.results;

  const handlePageChange = (page: number) => {
    const prevPage = page - 1;
    const newOffset = prevPage * count;
    setCurrentPage(page);
    setOffset(newOffset);
  };

  const handleSearchChange = (e: SyntheticEvent) => {
    setSearchTerm((e.target as HTMLInputElement).value);
  };

  // TODO: make an error component
  if (isError) return <div>Error</div>;

  return (
    <Page>
      <Navbar onChangeHandler={(e) => handleSearchChange(e)} includeSearch />
      {isLoading || isFetching ? (
        <Main>
          <SkeletonCardGrid cardCount={count} />
        </Main>
      ) : (
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
      )}
    </Page>
  );
}

export default App;
