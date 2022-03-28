import React from "react";
import { Button } from "./button/MyButton";
import Header from "./header/Header";
import Link from "./link/Link";
import Wrapper from "./wrapper/Wrapper";

const StyledComponent = () => {
  return (
    <Wrapper bgColor="bisque">
      <Header baslik="grey">Hello React</Header>

      <Link
        href="https://github.com/eminbulbul"
        target="_blank"
        rel="noopener"
        secondary
      >
        Go to my Github
      </Link>

      <Button renk="false">Mavi Buton</Button>
      <Button>Mor Buton</Button>
    </Wrapper>
  );
};

export default StyledComponent;
