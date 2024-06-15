// import ProfilePage from "@/components/tribu/views/ProfilePage";

// export default ProfilePage;
import ProfilePage from "@/components/tribu/molecules/peopleProfile/peopleProfile.jsx";

const ProfileForumPage = ({ params }) => {
    return <ProfilePage groupIdParams={params} />;
};

export default ProfileForumPage;
