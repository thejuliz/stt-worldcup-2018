import React from 'react'
import Moment from 'react-moment'

const DateLabel = (props) => (<Moment {...props} format='DD/MM/YYYY HH:mm' />)

export default DateLabel;