import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { animals } from "../../assets/data/animals";
import styles from "./Sidebar.module.css";
import "./Sidebar.module.css";
import { getImageURL } from "../../utils/functions";

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
  const [menuImg, setMenuImg] = useState("menuIcon.png");

  useEffect(() => {
    if (groupName) {
      const filteredList = animals.filter((an) => an.group === groupName);
      setSidebarListData(filteredList);
      setTitle(filteredList);
    }
  }, [groupName, clickedAnimal, mainContents]);

  const handeClick = (pAnimalId) => {
    const targetAnimal = animals.find((an) => an.id === pAnimalId);
    setClickedAnimal(targetAnimal);

    if (clickedAnimal) {
      if (clickedAnimal.id !== pAnimalId) {
        setMainContents(targetAnimal);
        animals.filter((an) => (an.isActive = false));
        targetAnimal.isActive = true;
      } else {
        if (mainContents === mainMessage) {
          setMainContents(targetAnimal);
          animals.filter((an) => (an.isActive = false));
          targetAnimal.isActive = true;
        } else {
          setMainContents(mainMessage);
          animals.filter((an) => (an.isActive = false));
        }
      }
    } else {
      setMainContents(targetAnimal);
      animals.filter((an) => (an.isActive = false));
      targetAnimal.isActive = true;
    }
  };

  const openCloseSidebar = () => {
    const sideBar = document.getElementById("side-bar");

    if (sideBar.style.display == "none") {
      sideBar.style.display = "inline-block";
      setMenuImg("close.png");
    } else {
      sideBar.style.display = "none";
      setMenuImg("menuIcon.png");
    }
  };

  return (
    <div className={styles.overSidaber}>
      <img
        onClick={() => openCloseSidebar()}
        className={styles.sidebarMenuIcon}
        src={getImageURL(menuImg)}
        alt="menu icon"
      />
      <div id="side-bar" className={styles.sidebarContainer}>
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
                className={`${styles.sidebarItem} ${an.isActive}`}
              >
                {an.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
