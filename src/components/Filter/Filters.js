import React, { Component } from 'react';
import { Form, InputNumber, Input, Switch, Button } from 'antd';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  text-align: center;
  margin-top: 70px;
  label {
    font-family: sans-serif;
    font-size: 14px;
    color: white;
    text-align: center;
  }
`;

const StyledInput = styled(Input)`
  width: 180px !important;
`;

const StyledImg = styled.img`
  width: 60px;
  margin-top: 10px;
  text-align: center;
  margin-left: 10px;
`;

class Filter extends Component {
  render() {
    return (
      <div>
        <StyledImg src="./logo.jpg" />
        <StyledForm>
          <Form.Item label="Amount" class="label">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Country">
            <StyledInput />
          </Form.Item>
          <Form.Item label="RealTime">
            <Switch />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Update</Button>
          </Form.Item>
        </StyledForm>
      </div>
    );
  }
}

export default Filter;
