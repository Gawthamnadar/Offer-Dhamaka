import React from "react";
import Header from "../Header/Header";
import TopNav from "../NavBars/TopNav";
import HomeContainer from "../Containers/HomeContainer";
import { withRouter } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <TopNav />
      <HomeContainer />
    </>
  );
}

export default withRouter(Home);
