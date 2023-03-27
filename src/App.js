
import './App.css';
import { BasicTable } from './components/BasicTable';
import { ColumnHiding } from './components/ColumnHiding';
import { ColumnOrder } from './components/ColumnOrder';
import { FilteringTable } from './components/FilteringTable';
import { PaginationTable } from './components/PaginationTable';
import { SortingTable } from './components/SortingTable';
import { StickyTable } from './components/StickyTable';
import { RowSelection } from './components/RowSelection';

function App() {
  return (
    <div className="App">
      <FilteringTable />
    </div>
  );
}

export default App;
