import React, { Component } from 'react';
import { Grid, Button, Card, Typography } from '@material-ui/core';
import ReactPlayer from 'react-player/youtube';
import InvestmentSection from './InvestmentSection';
import '../css/ArticleSection.css';
import TabSwitch from './TabSwitch';
import '../css/TaxPart.css';
import '../css/Mobileversion.css';

class BodySection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabtype: 'defaultTab',
            playingVideo: false
        };
    }
    componentDidMount() {
        localStorage.setItem('tabProps', 'LPtab');
    }

    changeTab2 = () => {
        this.setState({ tabtype: 'notdefault' });
        localStorage.setItem('tabProps', 'SPtab');
        document.getElementById('Sip').style.color = '#2462ed';
    }
    changeTab1 = () => {
        document.getElementById('lumpSum').style.color = '#2462ed';
        localStorage.setItem('tabProps', 'LPtab');
        document.getElementById('Sip').style.color = '#333f52;';
    }

    playVideo = () => {
        this.setState({ 'playingVideo': true });
    }

    pauseVideo = () => {
        this.videoBlock.getInternalPlayer().pauseVideo();
    }

    render() {
        return (
            <div>
                <div id='bdy_section'>
                    <Grid container spacing={24} id='contentSec'>
                        <Grid item sm={8} md={8} xs={12}>
                            <Typography id='StartNow'>Start Now for Wealth Creation</Typography>
                            <Typography id='toGenerate'>To generate long term capital appreciation and income distribution to investors from a portfolio that is predominantly invested in equity and equity related securities of large cap companies.</Typography>

                            <Grid container direction='row' justify='center' alignItems='center' id='dyk'>
                                <Typography id='dykText'>Did you know </Typography>&nbsp;&nbsp;
                        <Typography id='investText'>if you had invested Rs.50,000 in last 3 years, you would have grown by % now</Typography>
                            </Grid>
                            <br />

                            <Grid container direction='row' justify='flex-start' alignItems='center' id='tabBtn'>
                                {this.state.tabtype == 'defaultTab' && <Button id='lumpSumdef'>LumpSum</Button>}
                                {this.state.tabtype != 'defaultTab' && <Button id='lumpSum' onClick={this.changeTab1}>LumpSum</Button>}
                                <Button id='Sip' onClick={this.changeTab2}>SIP</Button>
                            </Grid>


                            <TabSwitch whichTab={localStorage.getItem('tabProps')} />
                            <br /><br />
                            <Typography id='fyear'>For how many years?</Typography>
                            <br /><br /><br />
                            <div id='threebtns'>
                                <Button id='fbtn'>1Y</Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Button id='sbtn'>3Y</Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Button id='tbtn'>5Y</Button>

                            </div>
                            <br /><br /><br />
                            <Grid container direction='row' justify='space-between' alignItems='stretch' id='scrollerA'>
                                <Typography id='empvalue'>Estimated Values as per Historical Returns</Typography>
                                <div >
                                    <Typography id='totaltext'> Rs 23,00,000 </Typography>
                                    <Typography id='returntext'> with 9.3% annual returns</Typography>
                                </div>
                            </Grid>
                            <br /><br /><br />
                            <div id='threebtns'>
                                <Button id='btn_begin'>Begin Investment</Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button id='btn_check'>Check your investment need</Button>
                            </div>



                        </Grid>
                        <Grid item sm={4} md={4} xs={12}>
                            <Grid id='learn_more' container direction justify='flex-start' alignItems='center'><Typography id='learnText'>Learn More</Typography></Grid>
                            <Grid id='video_block' container direction justify='center' alignItems='center'>
                                <ReactPlayer url="https://www.youtube.com/watch?v=LCiHGuTIuLk"
                                    width="65%"
                                    pip={true}
                                    ref={videoBlock => this.videoBlock = videoBlock}
                                    controls={true}
                                    playing={this.state.playingVideo}
                                ></ReactPlayer>
                            </Grid>
                            <br />
                            <Grid id='learn_more' container direction justify='flex-start' alignItems='center'><Typography id='learnText'><b>Scheme Details</b></Typography></Grid>
                            <br />
                            <Grid id='learn_more' container direction justify='flex-start' alignItems='center'><Typography id='bluechip'>ICICI Prudential Bluechip Fund</Typography></Grid>
                        </Grid>

                    </Grid>
                </div>
                <InvestmentSection />
            </div>
        );
    }
}

export default BodySection;