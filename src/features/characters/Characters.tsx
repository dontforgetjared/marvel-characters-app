import { SyntheticEvent, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useGetCharactersQuery } from '../../services/api';
import Alert from '../../components/Alert/Alert';
import CharacterCards from './CharacterCards';
import CharacterProfile from './CharacterProfile';
import Pagination from '../../components/Pagination/Pagination';
import Result from '../../components/Result/Result';
import Select from '../../components/Form/Select';
import SkeletonCardGrid from '../../components/Skeleton/SkeletonCardGrid';

interface ICharactersP {
  searchTerm?: string;
}

function Characters({ searchTerm = '' }: ICharactersP) {
  const [count, setCount] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);

  const { data, isLoading, isFetching, isError } = useGetCharactersQuery({
    offset,
    searchTerm,
    limit: count,
  });
  const characters = data?.results;

  const handlePageChange = (page: number) => {
    const prevPage = page - 1;
    const newOffset = prevPage * count;
    setCurrentPage(page);
    setOffset(newOffset);
  };

  const handleSelectChange = (e: SyntheticEvent) => {
    setCount(Number((e.target as HTMLSelectElement).value));
  };

  if (isError) return <Alert message="There was an error retrieving the data from the Marvel API." type="error" />;

  if (isLoading || isFetching)
    return (
      <div className="pt-14">
        <SkeletonCardGrid cardCount={count} />
      </div>
    );

  if (!characters?.length)
    return (
      <Result
        title="No results found for:"
        subtitle={`"${searchTerm}"`}
        content="Please try another search term."
        icon={<MagnifyingGlassIcon className="mx-auto my-0 h-12 w-12 text-red-500" aria-hidden="true" />}
      />
    );

  return (
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
            value={`${count}`}
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
      <CharacterProfile />
    </>
  );
}

export default Characters;
