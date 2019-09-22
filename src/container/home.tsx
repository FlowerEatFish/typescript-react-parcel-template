import React, { FunctionComponent } from "react";

import config from "../config";

interface Props {}

const HomeContainer: FunctionComponent<Props> = props => {
  return <h1>{config.projectTitle}</h1>;
};

export default HomeContainer;
