import React, { useEffect } from 'react';
import './App.css';
import DisplayBox from './components/DisplayBox/DisplayBox';

import { useSelector, useDispatch } from 'react-redux';
import { selectText } from './store/reducers/testSlice';
import { 
  selectId, 
  getidArray,
  setRecipient,
  fetchData
} from './store/reducers/crSlice';

function App() {
  const nuText: string = useSelector(selectText);
  const idArray: Array<string> = useSelector(selectId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getidArray())
  }, [dispatch])

  const handleSelect = (e: any) => {
    let rc_id = e.target.value;
    dispatch(setRecipient(rc_id));
    dispatch(fetchData(rc_id));
  };

  return (
    <div className="App">
      <p>test string- {nuText}</p>
      {idArray ? <select  onChange={handleSelect}><option>Select Recipient</option>{idArray.map(id => <option value={id}>{id}</option> )}</select> : <p>No id's</p>}
      <DisplayBox />
    </div>
  );
}

export default App;
