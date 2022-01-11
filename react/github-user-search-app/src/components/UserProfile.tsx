type PropsTypes = {
  name: string;
  userName: string;
  joinedAt: string;
  bio: string;
};

export function UserProfile(prop: PropsTypes) {
  return (
    <div className="bg-blue-dark rounded-lg h-[517px] p-6">
      <div className="">
        <div className="flex gap-2">
          <div
            className="bg-profile-pic
            bg-no-repeat
            bg-[length:68px_68px]
            items-center h-[80px] w-[80px]"
          ></div>

          <div className="flex flex-col">
            <h1 className="font-bold lg:text-[26px] order-2">{prop.name}</h1>
            <span className="lg:place-self-center order-4">
              {prop.joinedAt}
            </span>
            <span className="text-blue-light order-3">{prop.userName} </span>
          </div>
        </div>

        <p className="mt-5">{prop.bio}</p>

        <div className="bg-blue-veryDark mt-8 text-[11px]  rounded-lg flex flex-row gap-9 justify-center p-6">
          <div className="flex flex-col">
            <h2>Repos</h2>
            <span className="font-bold text-[16px] lg:text-[22px]">8</span>
          </div>
          <div className="flex flex-col">
            <h2>Followers</h2>
            <span className="font-bold text-[16px] lg:text-[22px]">3938</span>
          </div>
          <div className="flex flex-col">
            <h2>Following</h2>
            <span className="font-bold text-[16px] lg:text-[22px]">9</span>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2">
          <div className="flex w-1/2">
            <div className="bg-icon-location bg-no-repeat p-4"></div>
            <span>San Francisco</span>
          </div>
          <div className="flex w-1/2">
            <div className="bg-icon-website bg-no-repeat p-4"></div>
            <span>https://github.blog</span>
          </div>
          <div className="flex w-1/2">
            <div className="bg-icon-twitter bg-no-repeat p-4"></div>
            <span className="opacity-50">Not Available</span>
          </div>

          <div className="flex w-1/2">
            <div className="bg-icon-company bg-no-repeat p-4"></div>
            <span>@github</span>
          </div>
        </div>
      </div>
    </div>
  );
}
