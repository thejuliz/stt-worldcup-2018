import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'
import AbsolutePositionContainer from '../AbsolutePositionContainer'
import KnockoutMatchup from 'components/KnockoutMatchup'
import './KnockoutWallchart.css';
class KnockoutWallchart extends React.Component {
    render() {
        const { round_16, round_8, round_4, round_2, round_2_loser } = this.props;
        return (
            <div className='knockout-wallchart' style={ { width: '1600px', position: 'relative' }}>
                <div className="round-16">
                <AbsolutePositionContainer 
                    left="0" top="0"
                    width="200" height="80"
                ><KnockoutMatchup round={round_16.name} match={round_16.matches[0]} /></AbsolutePositionContainer>
                <AbsolutePositionContainer 
                    left="0" top="200"
                    width="200" height="80"
                ><KnockoutMatchup round={round_16.name} match={round_16.matches[1]} /></AbsolutePositionContainer>
                <AbsolutePositionContainer 
                    left="0" top="400"
                    width="200" height="80"
                ><KnockoutMatchup round={round_16.name} match={round_16.matches[2]} /></AbsolutePositionContainer>
                <AbsolutePositionContainer 
                    left="0" top="600"
                    width="200" height="80"
                ><KnockoutMatchup round={round_16.name} match={round_16.matches[3]} /></AbsolutePositionContainer>
                <AbsolutePositionContainer 
                    left="1550" top="0"
                    width="200" height="80"
                ><KnockoutMatchup round={round_16.name} match={round_16.matches[4]} /></AbsolutePositionContainer>
                <AbsolutePositionContainer 
                    left="1550" top="200"
                    width="200" height="80"
                ><KnockoutMatchup round={round_16.name} match={round_16.matches[5]} /></AbsolutePositionContainer>
                 <AbsolutePositionContainer 
                    left="1550" top="400"
                    width="200" height="80"
                ><KnockoutMatchup round={round_16.name} match={round_16.matches[6]} /></AbsolutePositionContainer>
                <AbsolutePositionContainer 
                    left="1550" top="600"
                    width="200" height="80"
                ><KnockoutMatchup round={round_16.name} match={round_16.matches[7]} /></AbsolutePositionContainer>
                </div>
                <div className="round-8">
                    <AbsolutePositionContainer 
                        left="250" top="100"
                        width="200" height="80"
                    ><KnockoutMatchup round={round_8.name} match={round_8.matches[0]} /></AbsolutePositionContainer>
                    <AbsolutePositionContainer 
                        left="250" top="500"
                        width="200" height="80"
                    ><KnockoutMatchup round={round_8.name} match={round_8.matches[1]} /></AbsolutePositionContainer>
                    <AbsolutePositionContainer 
                        left="1250" top="100"
                        width="200" height="80"
                    ><KnockoutMatchup round={round_8.name} match={round_8.matches[2]} /></AbsolutePositionContainer>
                    <AbsolutePositionContainer 
                        left="1250" top="500"
                        width="200" height="80"
                    ><KnockoutMatchup round={round_8.name} match={round_8.matches[3]} /></AbsolutePositionContainer>
                </div>
                <div className="round-4">
                    <AbsolutePositionContainer 
                        left="500" top="300"
                        width="200" height="80"
                    ><KnockoutMatchup round={round_4.name} match={round_4.matches[0]} /></AbsolutePositionContainer>
                    <AbsolutePositionContainer 
                        left="1000" top="300"
                        width="200" height="80"
                    ><KnockoutMatchup round={round_4.name} match={round_4.matches[1]} /></AbsolutePositionContainer>
                </div>
                <div className="round-2">
                    <AbsolutePositionContainer 
                        left="600" top="130"
                        width="500" height="150"
                    ><KnockoutMatchup round={round_2.name} match={round_2.matches[0]} /></AbsolutePositionContainer>
                </div>
                <div className="round-2-loser">
                    <AbsolutePositionContainer 
                        left="750" top="400"
                        width="200" height="80"
                    ><KnockoutMatchup round={round_2_loser.name} match={round_2_loser.matches[0]} /></AbsolutePositionContainer>
                </div>
            </div>
        )
        // return (
        //     <Table width={1600}>
        //         <tr>
        //             <td rowspan="2"><KnockoutMatchup round={round_16.name} match={round_16.matches[0]} /></td>
        //             <td colspan="7">&nbsp;</td>
        //             <td rowspan="2"><KnockoutMatchup round={round_16.name} match={round_16.matches[0]} /></td>
        //         </tr>
        //         <tr>
        //             <td colspan="1">&nbsp;</td>
        //             <td rowspan="2"><KnockoutMatchup round={round_16.name} match={round_16.matches[0]} /></td>
        //             <td colspan="3">&nbsp;</td>
        //             <td rowspan="2"><KnockoutMatchup round={round_16.name} match={round_16.matches[0]} /></td>
        //             <td colspan="1">&nbsp;</td>
        //         </tr>
        //         <tr>
        //             <td colspan="1">&nbsp;</td>
        //             <td colspan="2">&nbsp;</td>
        //             <td rowspan="2"><KnockoutMatchup round={round_16.name} match={round_16.matches[0]} /></td>
        //             <td colspan="2">&nbsp;</td>
        //             <td colspan="1">&nbsp;</td>
        //         </tr>
        //         <tr></tr>
        //         <tr></tr>
        //         <tr>
        //             <td colspan="1">&nbsp;</td>
        //             <td colspan="2">&nbsp;</td>
        //             <td rowspan="2"><KnockoutMatchup round={round_16.name} match={round_16.matches[0]} /></td>
        //             <td colspan="2">&nbsp;</td>
        //             <td colspan="1">&nbsp;</td>
        //         </tr>
        //         <tr>
        //              <td colspan="2">&nbsp;</td>
        //             <td rowspan="2"><KnockoutMatchup round={round_16.name} match={round_16.matches[0]} /></td>
        //             <td colspan="3">&nbsp;</td>
        //             <td rowspan="2"><KnockoutMatchup round={round_16.name} match={round_16.matches[0]} /></td>
        //             <td colspan="2">&nbsp;</td>
        //         </tr>
        //         <tr></tr>
        //         <tr>
        //             <td rowspan="2"><KnockoutMatchup round={round_16.name} match={round_16.matches[0]} /></td>
        //             <td colspan="7">&nbsp;</td>
        //             <td rowspan="2"><KnockoutMatchup round={round_16.name} match={round_16.matches[0]} /></td>
        //         </tr>
        //     </Table>
        // )
    }
}

KnockoutWallchart.propTypes = {
    round_16: PropTypes.object.isRequired,
    round_8: PropTypes.object.isRequired,
    round_4: PropTypes.object.isRequired,
    round_2_loser: PropTypes.object.isRequired,
    round_2: PropTypes.object.isRequired,
}
export default KnockoutWallchart;