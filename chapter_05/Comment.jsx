import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding : 8,
        display : "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    ContentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

function Comment(props) {
    return(
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    src="https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png"
                    style={styles.image}
                />
            </div>

            <div style={styles.ContentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    )
}

export default Comment;