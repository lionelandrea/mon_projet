function TeamMember({ nom, metier, photo }) {
  return (
    <div className="team-member">
      <img src={photo} alt={nom} />
      <h2>{nom}</h2>
      <p>{metier}</p>
    </div>
  );
}

export default TeamMember;
