import "./ProgressBarStyles.css"
 const ProgressBar = (props) => {
    const { bgcolor, completed, label } = props;
  
    const containerStyles = {
      height: 10,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 100,
      margin: 0
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      textAlign: 'right'
    }
  
    const labelStyles = {
      color: 'black',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div className="progressbar-container" style={fillerStyles}>
          <span className="progressbar-precentage" style={labelStyles}>{`${completed}%`}</span>
          <span className="progressbar-label">{`${label}`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;