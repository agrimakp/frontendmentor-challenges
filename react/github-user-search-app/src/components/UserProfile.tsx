type PropsTypes = {
  name: string;
  userName: string;
  joinedAt: string;
  bio: string;
};

export function UserProfile(prop: PropsTypes) {
  return (
    <div className="bg-blue-dark rounded-lg flex flex-row h-[419px] p-12">
      <div className="bg-profile-pic  bg-no-repeat w-1/4 items-center "></div>
      <div className="w-3/4" >
        <div className="flex flex-row justify-between">
          <h1 className="font-bold text-[26px]">{prop.name}</h1>
          <span className="place-self-center">{prop.joinedAt}</span>
        </div>
        <span className="text-blue-light ">{prop.userName} </span>
        <p className="mt-5">{prop.bio}</p>

        <div className="bg-blue-veryDark">
sd
        </div>
      </div>
    </div>
  );
}
