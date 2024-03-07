const Side = (props) => {
  const { messageParent, date } = props;

  return (
    <div>
      <b>
        {messageParent} - {date}
      </b>
    </div>
  );
};

export default Side;
