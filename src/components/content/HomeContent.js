import React from "react";

function HomeContent(props) {
    return <div>
        <strong>
            {props.children}
        </strong>
    </div>;
}

export default HomeContent;