import './App.css';
import { Form } from './components/Form/Form';
import { Search } from './components/Search/Search';
import { Table } from './components/Table/Table';
import { BaseColaboradores } from './data';
import { useState } from 'react';

function App() {
	const [filter, setFilter] = useState(BaseColaboradores);

	return (
		<>
			<Search
				data={BaseColaboradores}
				setFilter={setFilter}
			/>
			<Form />
			<Table data={filter} />
		</>
	);
}

export default App;
