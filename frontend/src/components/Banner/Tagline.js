import React, { Component } from 'react';
import styled from 'styled-components';
import TextLoop from 'react-text-loop';

const Text = styled.div`
  width: 90vw;
  text-align: center;
`;

class TagLine extends Component {
    render() {
        return (
            <h2 class="tagline">
                <TextLoop springConfig={{ stiffness: 180, damping: 8, noWrap: false }}>
                    <Text>Software Engineer</Text>
                    <Text>System Engineer</Text>
                    <Text>Programmer</Text>
                </TextLoop>
            </h2>
        );
    }
}

export default TagLine;