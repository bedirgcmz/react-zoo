import AnimalCards from "../AnimalCards/AnimalCards";
import AnimalBigCards from "../AnimalBigCards/AnimalBigCards";
import styles from "./MainContent.module.css";

const MainContent = ({ mainContents, groupName, mainMessage }) => {
  const groupMessage = `Welcome to the ${
    groupName?.charAt(0).toUpperCase() + groupName?.slice(1)
  } page. You can click on the animal you want to examine from the menu on the side.`;
  console.log(groupName);

  return (
    <div className={styles.MainContentContainer}>
      <h4>
        {mainContents == mainMessage && (groupName == undefined ? mainMessage : groupMessage)}
      </h4>
      <div>
        {mainContents !== mainMessage &&
          (groupName == undefined ? (
            <AnimalCards mainContents={mainContents} />
          ) : (
            <AnimalBigCards mainContents={mainContents} />
          ))}
      </div>
    </div>
  );
};

export default MainContent;
