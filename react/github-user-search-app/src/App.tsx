import { HeaderComponent } from "./components/HeaderComponent";
import { UserSearch } from "./components/UserSearch";
import { UserProfile } from "./components/UserProfile";

function App() {
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
        <UserSearch />
        <UserProfile
          name="The Octocat"
          joinedAt="Joined 25 Jan 2011"
          userName="@octocat"
          bio="Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."
          followerCount={3938}
          followingCount={9}
          repositoryCount={8}
          location="San Francisco"
          organisation="@github"
          twitterHandle=""
          website="https://github.blog"
        />
      </div>
    </div>
  );
}

export default App;
