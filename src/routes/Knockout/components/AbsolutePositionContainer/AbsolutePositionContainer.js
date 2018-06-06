import React from 'react'
import PropTypes from 'prop-types';
import './AbsolutePositionContainer.css';
class AbsolutePositionContainer extends React.Component {
    render() {
        const { left,top,width, height } = this.props;
        const style = {
            top: top +"px",
            left: left +"px",
            width: width +"px",
            height: height +"px"
        }
        return (
            <div className="absolute-position-container" style={style} width={style.width} height={style.height}>
                {this.props.children}
            </div>
        )
    }
}

AbsolutePositionContainer.propTypes = {
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default AbsolutePositionContainer;