export default function User({ user }) {
  const { name, email } = user;
  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  return (
    <div style={teamStyle}>
      <h4>Name: {name} </h4>
      <p>Email: {email} </p>
    </div>
  );
}
