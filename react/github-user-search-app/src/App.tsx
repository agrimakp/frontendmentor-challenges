import { HeaderComponent } from "./components/HeaderComponent";
import { UserSearch } from "./components/UserSearch";
import { UserProfile } from "./components/UserProfile";
import { useState } from "react";

const getUserInfo = (userName: string) => {
  // contact github database with userName
  // fetch user details object from github database
  // return that object
  return {
    name: "The Octocat",
    joinedAt: "Joined 25 Jan 2011",
    userName: "@octocat",
    bio: `Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.`,
    followerCount: 3938,
    followingCount: 9,
    repositoryCount: 8,
    location: "San Francisco",
    organisation: "@github",
    twitterHandle: "",
    website: "https://github.blog",
  };
};

function App() {
  const [userDetails, setUserDetails] = useState<any>(null);

  const onSearch = (name: string) => {
    const xx = getUserInfo(name);
    setUserDetails(xx);
    // userDetails = xx;
  };

  return (
    <div
      className="bg-blue-veryDark
      h-screen w-screen
    text-white flex
    justify-center
    items-center
    text-[15px]
    font-body"
    >
      <div className="w-[375px] lg:w-[730px] flex flex-col gap-4">
        <HeaderComponent />
        <UserSearch onSubmit={onSearch} a="ssd" name="agrima" />
        {userDetails ? <UserProfile {...userDetails} /> : null}
      </div>
    </div>
  );
}

export default App;
