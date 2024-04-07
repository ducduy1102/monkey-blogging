import { Button } from "components/button";
import React from "react";
import styled from "styled-components";

const HomeBannerStyles = styled.div`
  min-height: 520px;
  padding: 40px 0;
  margin-bottom: 60px;

  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );

  .banner {
    display: flex;
    justify-content: center;
    align-items: center;

    &-content {
      max-width: 600px;
      color: white;
    }

    &-heading {
      font-size: 36px;
      margin-bottom: 20px;
    }

    &-desc {
      line-height: 1.75;
      margin-bottom: 40px;
    }
  }
`;

const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">Monkey Blogging</h1>
            <p className="banner-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis esse vel quod quidem et ipsum quo. Explicabo mollitia
              voluptas nulla suscipit neque nisi iusto, repellat quisquam,
              voluptatibus libero necessitatibus fugiat?
            </p>
            <Button to={"/sign-up"} kind="secondary">
              Get Started
            </Button>
          </div>
          <div className="banner-image">
            <img srcSet="/img-banner.png" alt="" />
          </div>
        </div>
      </div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
