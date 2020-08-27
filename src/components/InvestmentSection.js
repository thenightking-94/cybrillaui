import React, { Component } from 'react';
import { Grid, Button, Card, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import '../css/TaxPart.css';
import '../css/Mobileversion.css';

const InvestmentSection = () => {
    return (
        <div id='investmentsection'>
            <Grid id='plngrid' container direction='row' justify='flex-start' alignItems='center'><p id='pln'>Plan Your Investment Now</p></Grid>
            <Grid id='calgrid' container direction='row' justify='center' alignItems='flex-start'>
                <Grid id='textgrid' container direction='row' justify='center' alignItems='baseline'>
                    <p id='caltext'> You can check how much about you should be savings for mutual fund investment here before you decide to invest!</p>
                </Grid>
                <Grid id='fgoal' container direction='row' justify='center' alignItems='flex-start'>
                    <p id='fgoaltext'> I have a financial goal of</p>
                </Grid>
                <Grid id='inputchamber' container direction='row' justify='center' alignItems='flex-start'>
                    <TextField id="standard-name" label="Rs. 5000" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <p id='fgoaltext'> in next</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField id="standard-name" label="3" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <p id='fgoaltext'> Years</p>
                </Grid>
                <Grid id='fgoal' container direction='row' justify='center' alignItems='flex-start'>
                    <Button id='nextbtn'>Next</Button>
                </Grid>
            </Grid>

        </div>
    );
}

export default InvestmentSection;