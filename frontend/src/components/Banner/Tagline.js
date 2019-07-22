import React, { Component } from 'react';
import styled from 'styled-components';
import TextLoop from 'react-text-loop';

const Text = styled.div`
  width: 500px;
  text-align: center;
`;

class TagLine extends Component {
    render() {
        return (
            <h1 class="tagline">
                <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                    <Text>Software Engineer</Text>
                    <Text>System Engineer</Text>
                    <Text>Programmer</Text>
                </TextLoop>
            </h1>
        );
    }
}

export default TagLine;