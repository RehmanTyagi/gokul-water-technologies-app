import "./backdrop.css";
const BackDrop = (props) => {
  return <div onClick={props.onCloseLayer} className="back-drop"></div>;
};

export default BackDrop;
