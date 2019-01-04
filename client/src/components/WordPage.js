import React, { Component } from 'react'
import axios from 'axios'
import { Container, Header, Divider, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class WordPage extends Component {
    state = {
        word: {
            name: '',
            definition: ''
        }
    }

    getWord = async () => {
        const wordData = await axios.get(`/api/words/${this.props.match.params.dateId}`)
        this.setState({ word: wordData.data[0] })
    }

    componentDidMount = () => {
        this.getWord()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.dateId !== this.props.match.params.dateId) {
            this.getWord()
        }
    }

    render() {
        return (
            <div>
                <Container textAlign='center'>
                    <Divider hidden />
                    <Header as='h1'>{this.state.word.name}</Header>
                    <Divider hidden />
                    <Header as='h2'>definition: {this.state.word.definition}</Header>
                </Container>
            </div>
        )
    }
}