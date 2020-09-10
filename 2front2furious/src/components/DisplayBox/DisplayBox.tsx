import * as React from 'react';
import { selectRecipientData } from '../../store/reducers/crSlice';
import { useSelector } from 'react-redux';
import './DisplayBox.css'

const DisplayBox = () => {

    let dataSet = useSelector(selectRecipientData);
    return (
        <div id='displayMain'>
            {/* {dataSet ? <p>length: {dataSet.length}</p>: null} */}
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