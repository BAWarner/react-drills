import React from 'react';

export default function Image(props){

    return(
        <div>
            <img src={props.imageSource} alt={props.imageAlt} />
        </div>
    );

}