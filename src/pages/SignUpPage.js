import React from "react";
import styled from "styled-components";

const SignUpPageStyle = styled.div`
  /* background-color: ${(props) => props.theme.primary}; */
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }

  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-size: 40px;
    font-style: bold;
  }
`;

const SignUpPage = () => {
  return (
    <SignUpPageStyle>
      <div className="container">
        <img srcSet="./logo.png 2x" alt="monkey-blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
      </div>
    </SignUpPageStyle>
  );
};

export default SignUpPage;
