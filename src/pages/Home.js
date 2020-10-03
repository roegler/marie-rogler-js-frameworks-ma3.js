import React from "react";
import HomeContent from "../components/content/HomeContent";
import Heading from "../components/heading/Heading";

function Home() {
    return (
        <div>
            <Heading title="MA3" />

            <HomeContent children="Lorem ipsum" />
        </div>
    );
}

export default Home;