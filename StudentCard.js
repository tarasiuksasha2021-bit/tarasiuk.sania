function StudentCard(props) {
  return (
    <div>
      <h2>
        {props.firstName} {props.lastName}
      </h2>

      <p>Група: {props.group}</p>
    </div>
  );
}

export default StudentCard;