import React from 'react'
import classNames from 'classnames'
class PageTitle extends React.Component {
    render() {
        return (
            <h2 className={classNames('page-title', 'text-center')}>{this.props.children}</h2>
        )
    }
}

export default PageTitle