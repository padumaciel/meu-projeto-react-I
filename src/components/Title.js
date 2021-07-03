import React from 'react';

//Via Props
const Title = ({messageTitle}) => {
    return (
        <h1>
            {messageTitle} 
        </h1>
    )
}

//Via Children
// const Title = () => {
//     return (
//         <h1>
//             {children} 
//         </h1>
//     )
// }

export default Title