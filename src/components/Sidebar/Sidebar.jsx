import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { animals } from "../../assets/data/animals";
import styles from "./Sidebar.module.css";

const Sidebar = ({
  sidebarListData,
  setSidebarListData,
  mainContents,
  setMainContents,
  mainMessage,
}) => {
  const { groupName } = useParams();
  const [title, setTitle] = useState();
  const [clickedAnimal, setClickedAnimal] = useState();

  useEffect(() => {
    if (groupName) {
      const filteredList = animals.filter((an) => an.group === groupName);
      setSidebarListData(filteredList);
      setTitle(filteredList);
    }
    console.log("useeeee");
  }, [groupName, clickedAnimal, mainContents]);

  const handeClick = (pAnimalId) => {
    const tergetAnimal = animals.find((an) => an.id === pAnimalId);
    setClickedAnimal(tergetAnimal);

    if (clickedAnimal) {
      if (clickedAnimal.id !== pAnimalId) {
        setMainContents(tergetAnimal);
        console.log("degilleer");
      } else {
        if (mainContents === mainMessage) {
          setMainContents(tergetAnimal);
          console.log("esitler");
          console.log(mainContents);
        } else {
          setMainContents(mainMessage);
          console.log(mainContents);
          console.log("esit degiller");
        }
      }
    } else {
      setMainContents(tergetAnimal);
    }
  };

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
          return (
            <li
              key={an.id}
              id={an.id}
              onClick={() => handeClick(an.id)}
              className={styles.sidebarItem}
            >
              {an.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
