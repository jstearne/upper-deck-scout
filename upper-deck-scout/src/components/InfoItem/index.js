import React from 'react';

const InfoItem = (props) => (
    <div>
        {props.label}: {props.value}
    </div>
);

export default InfoItem;