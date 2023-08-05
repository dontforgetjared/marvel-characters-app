import { SyntheticEvent, useState } from 'react';
import { useGetCharactersQuery } from '../services/api';
import useDebounce from '../hooks/useDebounce';
import Alert from '../components/Alert/Alert';
import Main from '../components/Layout/Main';
import CharacterCards from '../features/characters/CharacterCards';
import CharacterProfile from '../features/characters/CharacterProfile';
import Navbar from '../components/Navbar/Navbar';
import Page from '../components/Layout/Page';
import Pagination from '../components/Pagination/Pagination';
import SkeletonCardGrid from '../components/Skeleton/SkeletonCardGrid';
import Select from '../components/Form/Select';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(20);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data, isLoading, isFetching, isError } = useGetCharactersQuery({
    offset,
    searchTerm: debouncedSearchTerm,
    limit: count,
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

  const handleSelectChange = (e: SyntheticEvent) => {
    setCount(Number((e.target as HTMLSelectElement).value));
  };

  return (
    <Page>
      <Navbar onChangeHandler={(e) => handleSearchChange(e)} includeSearch />
      <Main>
        {isError && <Alert message="There was an error retrieving the data from the Marvel API." type="error" />}

        {isLoading || isFetching ? (
          <SkeletonCardGrid cardCount={count} />
        ) : (
          <>
            <div className="flex justify-end">
              <div className="w-full sm:w-1/12 mb-4">
                <Select
                  labelText="Results per page"
                  options={[
                    { value: '20', label: '20' },
                    { value: '40', label: '40' },
                    { value: '60', label: '60' },
                    { value: '80', label: '80' },
                    { value: '100', label: '100' },
                  ]}
                  handleChange={(e) => handleSelectChange(e)}
                />
              </div>
            </div>
            <CharacterCards characters={characters} />
            <Pagination
              currentPageNum={currentPage}
              limit={data?.limit}
              offset={data?.offset}
              onPageChange={handlePageChange}
              totalResults={data?.total}
            />
          </>
        )}
      </Main>
      <CharacterProfile />
    </Page>
  );
}

export default App;
