import React from 'react'
import Moment from 'react-moment'

const DateLabel = (props) => (<div className="text-center"><Moment {...props} format='DD/MM/YYYY HH:mm' /></div>)

export default DateLabel;