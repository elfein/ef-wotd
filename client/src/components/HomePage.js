import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Divider, Button } from 'semantic-ui-react'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Container textAlign='center'>
                    <Divider hidden />
                    <Header as='h1'>Welcome to Word-of-the-Day!</Header>
                    <Divider hidden />
                    <Divider />
                    <Divider hidden />
                    <Link to='/'>
                        <Button color='olive' size='massive'>Learn Today's Word</Button>
                    </Link>
                </Container>
            </div>
        )
    }
}