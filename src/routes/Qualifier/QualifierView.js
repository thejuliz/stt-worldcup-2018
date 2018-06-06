import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import QualifierTable from 'components/QualifierTable'
import PageTitle from 'components/PageTitle'

class QualifierView extends React.Component {
    render() {
        return (
            <div className="container">
            <PageTitle>Qualifier Round</PageTitle>
            <Grid>
                <Row>
                    <Col md={4}>
                        <QualifierTable groupId={'a'}/>
                    </Col>
                    <Col md={4}>
                        <QualifierTable groupId={'b'}/>
                    </Col>
                    <Col md={4}>
                        <QualifierTable groupId={'c'}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <QualifierTable groupId={'d'}/>
                    </Col>
                
                    <Col md={4}>
                        <QualifierTable groupId={'e'}/>
                    </Col>
                    <Col md={4}>
                        <QualifierTable groupId={'f'}/>
                    </Col>
                </Row>
                <Row>
                    <Col mdOffset={2} md={4}>
                        <QualifierTable groupId={'g'}/>
                    </Col>
                    <Col md={4}>
                        <QualifierTable groupId={'h'}/>
                    </Col>
                </Row>
            </Grid>
            </div>
        )
    }
}

export default QualifierView