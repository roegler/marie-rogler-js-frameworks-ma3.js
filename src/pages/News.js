import React from "react";
import Heading from "../components/heading/Heading";
import NewsList from "../components/list/NewsList"

function News() {
    return (
        <div>
            <Heading title="News list" />

            <NewsList />
        </div>
    )
}

export default News