import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { animals } from "../../assets/data/animals";

const Sidebar = ({ sidebarListData, setSidebarListData }) => {
  const { groupName } = useParams();

  console.log(groupName);
  useEffect(() => {
    const filteredList = animals.filter((an) => an.group === groupName);
    setSidebarListData(filteredList);
  }, [groupName]);

  return (
    <div>
      {sidebarListData?.map((an) => {
        return <li>{an.name}</li>;
      })}
    </div>
  );
};

export default Sidebar;
