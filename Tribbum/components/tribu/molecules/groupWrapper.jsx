import React, { useState, useEffect } from 'react';
import { getAllData } from '@/firebase/entities/database';
import GroupCard from '../elements/groupCard/groupCard';

const GroupWrapper = ({ toggleHouseSlideOver }) => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const handleGetGroups = async () => {
            const data = await getAllData("groups");
            setGroups(data);
            // console.log(data);
        };

        handleGetGroups();
    }, []);  // The empty array ensures this effect runs only once after the component mounts

    return (
        <div className="flex flex-row w-full h-auto overflow-scroll overflow-visible py-6">
            {groups.slice(0, 10).map((group, index) => {
                return (
                    <GroupCard  // Ensure the component name is capitalized
                        key={index}
                        groupData={group}
                        toggleHouseSlideOver={toggleHouseSlideOver}
                    />
                );
            })}
        </div>
    );
};

export default GroupWrapper;
