import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import background from './map.png';

import { getFlights } from '../../state/Flight/actions';

const StyledMap = styled.div`
  position: relative;
  text-align: center;
  margin-left: 60px;
  width: 1024px;
  height: 500px;
  background-image: url(${background});
`;

const StyledSpan = styled.span`
  border-radius: 20px;
  background-color: black;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 0px;
  padding-bottom: 6px;
  font-size: 0.05em;
  position: absolute;
  top: 301.0417417px;
  left: 872.549504px;
`;

/*
Calcular latitud
const degreeInPixelsLat = 500 / 180;
const latPixels = degreeInPixelsLat * latitud del avión
Si es positiva la latitud
const latitud = 250 - latPixels; Este es el valor del Top
Si es negativa la latitud
const latitud = 250 + latPixels; Este es el valor del Top

Calcular longitud
const degreeInPixelsLat = 1024 / 360;
const latPixels = degreeInPixelsLat * longitud del avión
Si es longitud negativa:
const latitud = 512 - latPixels; Este es el valor del Top
Si es positiva la longitud
const latitud = 512 + latPixels; Este es el valor del Top

*/

class Flight extends Component {
  componentDidMount() {
    this.props.getFlights();
  }

  render() {
    return (
      <StyledMap>
        <StyledSpan />
      </StyledMap>
    );
  }
}

const mapStateToProps = state => {
  return {
    flights: state.flightReducer.flights,
  };
};

export default connect(mapStateToProps, { getFlights })(Flight);
