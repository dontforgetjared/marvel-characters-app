import './App.css';
import { useGetAllCharactersQuery } from '../services/api';

function App() {
  const { data, isLoading, isFetching, isError, isSuccess } = useGetAllCharactersQuery();
  console.log(data);
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
