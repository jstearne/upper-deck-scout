import React from 'react';
import InfoItem from '../InfoItem';

// note the function opens to Parentheses (JSX), NOT curly braces!!
const InfoList = (props) => (
    <div>
        {props.info.map((info, i) => (
            <InfoItem info={info.label} value={info.value} key={i} />
        ))}
    </div>
);

export default InfoList;