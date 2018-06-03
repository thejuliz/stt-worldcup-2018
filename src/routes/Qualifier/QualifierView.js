import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import QualifierTable from 'components/QualifierTable'
import PageTitle from 'components/PageTitle'
class QualifierView extends React.Component {
    render() {
        return (
            <div>
            <PageTitle>Qualifier Round</PageTitle>
            <Grid>
                <Row>
                    <Col md={3}>
                        <QualifierTable groupId={'a'}/>
                    </Col>
                    <Col md={3}>
                        <QualifierTable groupId={'b'}/>
                    </Col>
                    <Col md={3}>
                        <QualifierTable groupId={'c'}/>
                    </Col>
                    <Col md={3}>
                        <QualifierTable groupId={'d'}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <QualifierTable groupId={'e'}/>
                    </Col>
                    <Col md={3}>
                        <QualifierTable groupId={'f'}/>
                    </Col>
                    <Col md={3}>
                        <QualifierTable groupId={'g'}/>
                    </Col>
                    <Col md={3}>
                        <QualifierTable groupId={'h'}/>
                    </Col>
                </Row>
            </Grid>
            </div>
        )
    }
}

export default QualifierView