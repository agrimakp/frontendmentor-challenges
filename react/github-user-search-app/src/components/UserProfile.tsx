type PropsTypes = {
  name: string;
  userName: string;
  joinedAt: string;
  bio: string;
};

export function UserProfile(prop: PropsTypes) {
  return (
    <div className="bg-blue-dark rounded-lg h-[517px] lg:h-[444px] p-8">
      <div
        className="grid grid-cols-[100px_230px]
      lg:grid-cols-[180px_480px] grid-rows-1"
      >
        <div
          className="bg-profile-pic
            bg-no-repeat
            lg:bg-[length:150px_150px]
            bg-[length:80px_80px]
            items-center
            h-[80px] w-[80px]
            lg:h-[170px] lg:w-[170px]
            row-span-2
            "
        ></div>

        <div
          className="flex flex-col gap-1  lg:col-span-1
        lg:grid lg:grid-cols-[260px_260px]"
        >
          <h1 className="font-bold lg:text-[26px] order-2 lg:order-1">
            {prop.name}
          </h1>
          <span className="lg:place-self-center order-4 lg:order-2">
            {prop.joinedAt}
          </span>
          <span className="text-blue-light order-3">{prop.userName} </span>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <p className="mt-5 ">{prop.bio}</p>

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
          <div className="mt-8 flex flex-col lg:grid lg:grid-cols-[200px_200px] gap-2 gap-x-14">
            <div className="flex lg:order-1">
              <div className="bg-icon-location bg-no-repeat p-4"></div>
              <span>San Francisco</span>
            </div>
            <div className="flex lg:order-3">
              <div className="bg-icon-website bg-no-repeat p-4"></div>
              <span>https://github.blog</span>
            </div>
            <div className="flex lg:order-2">
              <div className="bg-icon-twitter bg-no-repeat p-4"></div>
              <span className="opacity-50">Not Available</span>
            </div>

            <div className="flex lg:order-4">
              <div className="bg-icon-company bg-no-repeat p-4"></div>
              <span>@github</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
