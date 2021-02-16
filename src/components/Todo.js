import React from 'react';
export default function Todo({ todo }) {
    return (
        <li style={{ listStyleType: 'none' }}>
            <input type="checkbox" name="item" id="item" unchecked="true"/>{ todo }
        </li>      
    )
}
