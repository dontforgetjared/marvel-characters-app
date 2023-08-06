import { SyntheticEvent, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import Characters from '../features/characters/Characters';
import Main from '../components/Layout/Main';
import Navbar from '../components/Navbar/Navbar';
import Page from '../components/Layout/Page';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleSearchChange = (e: SyntheticEvent) => {
    setSearchTerm((e.target as HTMLInputElement).value);
  };

  return (
    <Page>
      <Navbar onChangeHandler={(e) => handleSearchChange(e)} includeSearch />
      <Main>
        <Characters searchTerm={debouncedSearchTerm} />
      </Main>
    </Page>
  );
}

export default App;
