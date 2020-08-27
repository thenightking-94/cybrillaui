import React, { Component } from 'react';
import { Grid, Button, Card, Typography } from '@material-ui/core';
import $ from 'jquery';
import '../css/Menu.css';
import BodySection from './BodySection.js';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state =
            { switcher: false };
    }

    openMenu = () => {
        document.getElementById('open_menu').style.width = '300px';
        document.getElementById('open_menu').style.left = '0px';
        document.getElementById('open_menu').style.transition = '1.3s';
        this.setState({ switcher: true });
    }

    componentDidUpdate() {
        if (this.state.switcher == true) {
            $('#Closebtn').on('click', () => {
                document.getElementById('open_menu').style.width = '0px';
                document.getElementById('open_menu').style.left = '-300px';
                document.getElementById('open_menu').style.transition = '1.3s';
                this.setState({ switcher: false });

            });
        }

    }

    render() {
        return (
            <div>
                <div id='open_menu'>
                    <Grid style={{ width: '100%' }} container direction="row" justify="flex-end" alignItems="center" >
                        <Button id='Closebtn'>X</Button></Grid>
                    <Grid style={{ padding: '20px', width: '100%' }} container direction="row" justify="flex-start" alignItems="center" >
                        <ul>
                            <li id='dummy_list'>Home</li>
                            <li id='dummy_list'>About</li>
                            <li id='dummy_list'>Blogs</li>
                        </ul></Grid>
                    <br />


                </div>

                <div id='basic_menu'>
                    <Grid id='ham_icon' container direction="row" justify="flex-start" alignItems="baseline" >
                        <a title='click to open menu' onClick={this.openMenu}><b style={{ opacity: '0.7' }}>☰</b></a></Grid>
                    <Typography id='logo'>LOGO</Typography>

                    <Grid id='invest_learn'
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="baseline">
                        <Grid direction="row"
                            justify="center"
                            alignItems="baseline" id='menu_text'>Invest</Grid>
                        <br />
                        <Grid direction="row"
                            justify="center"
                            alignItems="baseline" id='menu_text'>Learn</Grid>
                    </Grid>

                    <Grid id='menuButtons' container direction="row" justify="center" alignItems="center" >
                        <Grid style={{ textAlign: 'center' }} container spacing={24}>
                            <Grid class='linkMenu' direction="row"
                                justify="flex-end"
                                alignItems="baseline"><a id='linkTextDefault'>Home</a></Grid>
                            <Grid class='linkMenu' direction="row"
                                justify="center"
                                alignItems="baseline"><a id='linkText'>About</a></Grid>
                            <Grid class='linkMenu' direction="row"
                                justify="flex-start"
                                alignItems="baseline"><a id='linkText'>Blogs</a></Grid>
                        </Grid>
                    </Grid>

                    <Grid id='menuButton' container direction="row" justify="center" alignItems="center" >
                        <Button id='btnstyle' variant="contained" color="primary">
                            Login/Register
                    </Button>
                    </Grid>
                </div>


                <BodySection />



            </div >
        );
    }


}

export default Home;