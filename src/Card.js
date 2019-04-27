import React from 'react';

const Card = ({id , name , email}) => {
    return (
        <div id ={id} className='tc bg-gold dib br3 pa3 ma2 grow  shadow-5  '>
            <img alt='robot' src={`https://robohash.org/${id}`} />
            <div >
                <h2 className ='' >{name}</h2>
                <div className=''>{email}</div>
            </div>
        </div>
    );
    
}

export default Card ;