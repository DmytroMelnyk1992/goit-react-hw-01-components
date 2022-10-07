export const Profile = () => {
  const { username, tag, location, avatar } = user;

  return (
    <div>
      <div>
        <img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};
