import React from 'react'
import { connect } from 'react-redux'


  const mapStateToProps = state => state



const Display = ({counter}) => {
    return (
        <div>
            <h1>Count:{counter}</h1>
        </div>
    )
}

export default connect(mapStateToProps)( Display)
