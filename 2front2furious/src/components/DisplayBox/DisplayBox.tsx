import * as React from 'react';
import { useState, useEffect } from 'react';
import { selectRecipientData } from '../../store/reducers/crSlice';
import { useSelector } from 'react-redux';
import './DisplayBox.css'

const DisplayBox = () => {
    const [ eventList, seteventList ] = useState<Array<string>>([])

    let dataSet: Array<string> = useSelector(selectRecipientData);

    useEffect(() => {
        makeEventArray(dataSet)
    }, [dataSet])

    const makeEventArray = (data: any) => {
        let event_array: Array<string> = []
      for (let x = 0; x < data.length; x++) {
        event_array.push(data[x].event_type);
      };
      let event_type = Array.from(new Set(event_array));
      seteventList(event_type);
    }

    return (
        <div id='displayMain'>
            {eventList.length > 0 ? <select><option>Event type</option>{eventList.map(event => <option value={event}>{event}</option> )}</select> : <p>novalues</p>}
            {dataSet ? [
                dataSet.map((entry: any) => 
                    <div key={entry.id} className='entryBox'>
                        <div className='entryHead'>
                            <p className='entryHeadEvent'>event: {entry.event_type}</p>
                            <div className='entryHeadTime'>
                                <p>Date: {entry.timestamp.slice(0,10)}</p>
                                <p>Time: {entry.timestamp.slice(11,19)}</p>
                            </div>
                        </div>
                        <div className='entryBody'>
                            <p>Further details would go here</p>

                        </div>
                    </div>
                )
            ]: <p>Please select care recipient</p>}
        </div>
    );
};

export default DisplayBox;