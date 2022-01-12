import { Link } from "./Link";

type PropsTypes = {
  name: string;
  userName: string;
  joinedAt: string;
  bio: string;
  repositoryCount: number;
  followerCount: number;
  followingCount: number;
  location: string;
  website: string;
  twitterHandle: string;
  organisation: string;
};

export function UserProfile(prop: PropsTypes) {
  return (
    <div className="bg-blue-dark rounded-lg h-[517px] lg:h-[444px] lg:p-8 p-6 ">
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
          className="flex flex-col gap-1
          lg:col-span-1 lg:grid lg:grid-cols-[260px_260px]"
        >
          <h1 className="font-bold lg:text-[26px] order-2 lg:order-1">
            {prop.name}
          </h1>
          <span className="lg:place-self-center order-4 lg:order-2">
            {prop.joinedAt}
          </span>
          <span className="text-blue-light order-3">{prop.userName}</span>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <p className="mt-5 ">{prop.bio}</p>

          <div
            className="bg-blue-veryDark mt-8
             text-[11px]
          rounded-lg flex
          flex-row gap-9
          justify-center
          p-6"
          >
            <div className="flex flex-col">
              <h2>Repos</h2>
              <span
                className="font-bold text-[16px]
              lg:text-[22px]"
              >
                {prop.repositoryCount}
              </span>
            </div>
            <div className="flex flex-col">
              <h2>Followers</h2>
              <span
                className="font-bold text-[16px]
              lg:text-[22px]"
              >
                {prop.followerCount}
              </span>
            </div>
            <div className="flex flex-col">
              <h2>Following</h2>
              <span
                className="font-bold text-[16px]
              lg:text-[22px]"
              >
                {prop.followingCount}
              </span>
            </div>
          </div>
          <div className="mt-8 flex flex-col
          lg:grid lg:grid-cols-[200px_200px] gap-2 gap-x-14">
            <Link
              title={prop.location}
              className="lg:order-1"
              iconName="bg-icon-location"
            />
            <Link
              title={prop.website}
              className="lg:order-3"
              iconName="bg-icon-website"
            />
            <Link
              title={prop.twitterHandle || "Not Available"}
              className={`lg:order-2 ${prop.twitterHandle ? "" : `opacity-50`}`}
              iconName="bg-icon-twitter"
            />
            <Link
              title={prop.organisation}
              className="lg:order-4"
              iconName="bg-icon-company"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
