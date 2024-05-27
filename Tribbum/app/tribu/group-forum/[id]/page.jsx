import GroupForumPage from "@/components/tribu/views/groupforumPage";

export async function getServerSideProps({ params }) {
    return {
        props: {
            groupId: params.id,
        },
    };
}

const GroupPage = ({ groupId }) => {
    return <GroupForumPage groupId={groupId} />;
};

export default GroupPage;
