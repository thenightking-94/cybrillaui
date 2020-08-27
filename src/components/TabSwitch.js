import React, { Component } from 'react';
import { Grid, Button, Card, Typography, Slider } from '@material-ui/core';
import '../css/ArticleSection.css';
import '../css/Mobileversion.css';


class TabSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueLP: 15000,
            valueSP: 20000
        };
    }

    SliderValueLP = (event, newValue) => {
        this.setState({ valueLP: newValue });
    };

    SliderValueSP = (event, newValue) => {
        this.setState({ valueSP: newValue });
    };

    convertToRs = (number) => {
        var num = number;
        var str, stc, i;
        var stn = num.toString();
        if (num < 1000) {
            stc = 'Rs' + ' ' + num.toString();
            return stc;
        }
        if (num >= 1000 && stn.length == 4) {

            str = stn.slice(stn.length - 3, stn.length);
            str = 'Rs' + ' ' + stn[0] + ',' + str;
            return str;
        }
        if (num >= 1000 && stn.length == 5) {

            str = stn.slice(stn.length - 3, stn.length);
            str = 'Rs' + ' ' + stn[0] + stn[1] + ',' + str;
            return str;
        }
        if (num == 100000) {
            str = stn.slice(stn.length - 3, stn.length);
            stc = stn.slice(stn.length - 5, stn.length - 3);
            str = 'Rs' + ' ' + '1' + ',' + stc + ',' + str;
            return str;

        }

    }


    render() {
        return (
            <div >

                {this.props.whichTab == 'LPtab' &&
                    <div><Grid container direction='row' justify='space-between' alignItems='stretch' id='scrollerA'>
                        <Typography id='i_can_invest'>I can invest</Typography>
                        <Typography id='value_scroll'> {this.convertToRs(this.state.valueLP)}</Typography>
                    </Grid>
                        <br /><br /><br />
                        <Grid id='Sliderpos' container direction='row' justify='center' alignItems="center">
                            <Slider min={0} max={100000}
                                value={(typeof (this.state.valueLP)) === 'number' ? this.state.valueLP : 0}
                                onChange={this.SliderValueLP}
                                aria-labelledby="input-slider"
                            />
                        </Grid>

                    </div>
                }

                {this.props.whichTab == 'SPtab' &&
                    <div><Grid container direction='row' justify='space-between' alignItems='stretch' id='scrollerA'>
                        <Typography id='i_can_invest'>I can invest</Typography>
                        <Typography id='value_scroll'> {this.convertToRs(this.state.valueSP)}</Typography>
                    </Grid>
                        <br /><br /><br />
                        <Grid id='Sliderpos' container direction='row' justify='center' alignItems="center">
                            <Slider min={0} max={90000}
                                value={(typeof (this.state.valueSP)) === 'number' ? this.state.valueSP : 0}
                                onChange={this.SliderValueSP}
                                aria-labelledby="input-slider"
                            />
                        </Grid>

                    </div>}

            </div>
        );
    }

}
export default TabSwitch;