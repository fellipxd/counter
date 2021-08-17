import React from 'react'
import { connect } from 'react-redux'


  const mapStateToProps = state => state



const Display = ({counter}) => {
    return (
        <div>
            <p>Count:{counter}</p>
        </div>
    )
}

export default connect(mapStateToProps)( Display)
