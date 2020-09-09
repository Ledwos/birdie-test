import React, { useEffect } from 'react';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { selectText } from './store/reducers/testSlice';
import { 
  selectId, 
  getidArray,
  setRecipient
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
    // console.log(rc_id)
    dispatch(setRecipient(rc_id));
  };

  return (
    <div className="App">
      <p>test string- {nuText}</p>
      {idArray ? <select  onChange={handleSelect}><option>Select Recipient</option>{idArray.map(id => <option value={id}>{id}</option> )}</select> : <p>No id's</p>}
    </div>
  );
}

export default App;
