import React from 'react';
import styled from '@emotion/styled';

const Spacer = styled.div`
  margin-top: 4rem;
`;

const Form = styled.form`
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  border: 1px solid #000;
  border-radius: 0.25rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  & + & {
    margin-top: 1rem;
  }
`;

const Label = styled.label`
  width: 100%;
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  appearance: none;
  line-height: 1.25;
  padding: 0.5rem 0.75rem;
`;

const Button = styled.button`
  width: 20%;
  margin-top: 1rem;
  border: 1px solid #000;
  border-radius: 0.25rem;
`;

function LoginForm() {
  return (
    <>
    <Spacer></Spacer>
    <Form>
      <InputWrapper>
        <Label htmlFor="username">ID</Label>
        <Input
          id="username"
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="password">PW</Label>
        <Input
          id="password"
        />
      </InputWrapper>
      <Button>Submit</Button>
    </Form>
    </>
  );
}

export default LoginForm;