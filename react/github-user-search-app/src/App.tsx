import { HeaderComponent } from "./components/HeaderComponent";
import { UserSearch } from "./components/UserSearch";
import { UserProfile } from "./components/UserProfile";
import { useState } from "react";

const getUserInfo = async (userName: string) => {
  const response = await fetch("https://api.github.com/users/" + userName);
  const userInfo = await response.json();

  if (userInfo.message) {
    return { message: userInfo.message };
  }

  // contact github database with userName
  // fetch user details object from github database
  // return that object
  return {
    name: userInfo.name,
    joinedAt: userInfo.created_at,
    userName: userInfo.login,
    bio: userInfo.bio,
    followerCount: userInfo.followers,
    followingCount: userInfo.following,
    repositoryCount: userInfo.public_repos,
    location: userInfo.location,
    organisation: userInfo.company,
    twitterHandle: userInfo.twitter_username,
    website: userInfo.blog,
    avatarUrl: userInfo.avatar_url,
  };
};

function App() {
  const [userDetails, setUserDetails] = useState<any>(null);
  const [theme, setTheme] = useState("dark");

  const onSearch = async (name: string) => {
    const response = await getUserInfo(name);
    setUserDetails(response);
  };

  return (
    <div
      className={` ${
        theme == "dark" ? "" : "theme-light"
      } bg-skin-background-accent
      h-screen w-screen
    text-skin-base flex
    justify-center
    items-center
    text-[15px]
    font-body`}
    >
      <div className="w-[375px] md:w-[730px] flex flex-col gap-4 p-4">
        <HeaderComponent
          onSwitchTheme={() => {
            setTheme((currentTheme) => {
              return currentTheme == "dark" ? "light" : "dark";
            });
          }}
          theme={theme}
        />
        <UserSearch
          onSubmit={onSearch}
          message={userDetails ? userDetails.message : ""}
        />
        {userDetails && userDetails.userName ? (
          <UserProfile {...userDetails} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
