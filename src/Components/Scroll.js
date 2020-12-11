const Scroll = (props) => {
  return (
    
    <h3 className="ui divider"
      style={{ overflow: "scroll", height: "500px" }}
    >
      {props.children}
    </h3>
  );
};

export default Scroll;
