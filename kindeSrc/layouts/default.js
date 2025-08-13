import React from "react";

const styles = {
  container: {
    display: "flex",
    height: "100vh",
  },
  sidePanel: {
    borderRadius: "1rem",
    backgroundColor: "dodgerblue",
    flex: 1,
    margin: "0.5rem",
    maxWidth: "1024px",
  },
};

export const DefaultLayout = (props) => {
  return (
    <div style={styles.container}>
      {props.children}
      <div style={styles.sidePanel}></div>
    </div>
  );
};
