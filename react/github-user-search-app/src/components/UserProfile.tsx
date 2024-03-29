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
  avatarUrl?: string;
};

export function UserProfile(prop: PropsTypes) {
  const date = new Date(prop.joinedAt);
  return (
    <div
      className="bg-skin-background-muted
    rounded-lg h-auto md:p-8 p-6 "
    >
      <div
        className="grid grid-cols-[100px_230px]
      md:grid-cols-[150px_480px] grid-rows-1"
      >
        <div
          className="
            md:bg-[length:150px_150px]
            bg-[length:80px_80px]
            items-center
            h-[80px] w-[80px]
            md:h-[117px] md:w-[117px]
            row-span-2
            "
        >
          <img src={prop.avatarUrl} alt="avatar" className="rounded-full" />
        </div>

        <div
          className="flex flex-col gap-1
          md:col-span-1 md:grid md:grid-cols-[260px_260px]"
        >
          <h1 className="font-bold text-skin-due text-[26px] order-2 md:order-1">
            {prop.name}
          </h1>
          <span className="md:place-self-center order-4 md:order-2">
            Joined {date.toGMTString().slice(5).slice(0, 11)}
          </span>
          <span className="text-skin-blue order-3">{prop.userName}</span>
        </div>

        <div className="col-span-2 md:col-span-1">
          <p className="mt-5 ">
            {prop.bio ? prop.bio : "This profile has no bio"}
          </p>

          <div
            className="bg-skin-background-accent mt-8
             text-[11px]
          rounded-lg flex
          flex-row gap-9
          justify-center
          w-[90%]
          p-6"
          >
            <div className="flex flex-col">
              <h2>Repos</h2>
              <span
                className="font-bold text-[16px]
              md:text-[22px] text-skin-due"
              >
                {prop.repositoryCount}
              </span>
            </div>
            <div className="flex flex-col">
              <h2>Followers</h2>
              <span
                className="font-bold text-[16px]
              md:text-[22px] text-skin-due"
              >
                {prop.followerCount}
              </span>
            </div>
            <div className="flex flex-col">
              <h2>Following</h2>
              <span
                className="font-bold text-[16px]
              md:text-[22px] text-skin-due"
              >
                {prop.followingCount}
              </span>
            </div>
          </div>
          <div
            className="mt-8 flex flex-col
          md:grid md:grid-cols-[200px_200px] gap-2 gap-x-14"
          >
            <Link
              title={prop.location || "Not Available"}
              className={`md:order-1 ${prop.location ? "" : `opacity-50`}`}
              iconName="bg-icon-location"
            />
            <Link
              title={prop.website || "Not Available"}
              className={`md:order-3 ${prop.website ? "" : `opacity-50`}`}
              iconName="bg-icon-website"
            />
            <Link
              title={prop.twitterHandle || "Not Available"}
              className={`md:order-2 ${prop.twitterHandle ? "" : `opacity-50`}`}
              iconName="bg-icon-twitter"
            />
            <Link
              title={prop.organisation || "Not Available"}
              className={`md:order-4 ${prop.organisation ? "" : `opacity-50`}`}
              iconName="bg-icon-company"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
