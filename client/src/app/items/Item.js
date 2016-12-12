import React, {PropTypes} from 'react'

const Item = ({onClick, data}) => (

    <div onClick={onClick}>{data}</div>

)

Item.PropTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default Item
