import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Divider, Button } from 'semantic-ui-react'

export default class HomePage extends Component {
    state = {
        dateId: ''
    }

    getDateId = () => {
        const date = new Date()
        const day = date.getDate()
        const month = date.getMonth()
        let dateId = 0
        for (let i = 0; i < month; i++) {
            if (i === 4 || i === 6 || i === 9 || i === 11) {
                dateId += 30
            } else if (i === 2) {
                dateId += 28
            } else {
                dateId += 31
            }
        }
        dateId += day
        return dateId
    }

    componentWillMount = async () => {
        let dateId = await this.getDateId()
        this.setState({ dateId })
    }

    render() {
        return (
            <div>
                <Container textAlign='center'>
                    <Divider hidden />
                    <Header as='h1'>Welcome to Word-of-the-Day!</Header>
                    <Divider hidden />
                    <Divider />
                    <Divider hidden />
                    <Link to={`/words/${this.state.dateId}`}>
                        <Button color='olive' size='massive'>Learn Today's Word</Button>
                    </Link>
                </Container>
            </div>
        )
    }
}