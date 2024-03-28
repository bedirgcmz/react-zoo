import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { animals } from "../../assets/data/animals";
import styles from "./Sidebar.module.css";

const Sidebar = ({ sidebarListData, setSidebarListData }) => {
  const { groupName } = useParams();
  const [title, setTitle] = useState();

  useEffect(() => {
    if (groupName) {
      const filteredList = animals.filter((an) => an.group === groupName);
      setSidebarListData(filteredList);
      setTitle(filteredList);
    }
  }, [groupName]);

  console.log(typeof title);
  return (
    <div className={styles.sidebarContainer}>
      <ul className={styles.sidebarList}>
        <li>
          <h3>
            {title
              ? `${
                  sidebarListData[0].group.charAt(0).toUpperCase() +
                  sidebarListData[0].group.slice(1)
                } Animals`
              : "All Animals"}
          </h3>
        </li>
        {sidebarListData?.map((an) => {
          return <li className={styles.sidebarItem}>{an.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
