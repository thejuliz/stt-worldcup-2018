import React from 'react'
import { Table } from 'react-bootstrap'
import KnockoutWallchart from './components/KnockoutWallchart'
class KnockoutView extends React.Component {
    render() {
        return (
            <div>
                <KnockoutWallchart />
            </div>
        )
    }
}

export default KnockoutView