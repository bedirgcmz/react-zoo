import { getImageURL } from "../../utils/functions";
import AnimalBigCards from "../AnimalBigCards/AnimalBigCards";
import styles from "./AnimalCards.module.css";

const AnimalCards = ({ mainContents }) => {
  const readMode = () => {
    const modal = document.querySelector("#modal");
    modal.style.display = "block";
  };

  const closeModal = () => {
    const modal = document.querySelector("#modal");
    modal.style.display = "none";
  };

  return (
    typeof mainContents === "object" && (
      <div className={styles.cardContainer}>
        <div className={styles.cardImg}>
          <img src={getImageURL(mainContents.image)} alt="" />
        </div>
        <div className={styles.cardBody}>
          <p>
            {" "}
            <b>Name</b> :{mainContents.name}
          </p>
          <p>
            <b>Food</b> :{mainContents.food}
          </p>
          <p>
            <b>Description</b> :{mainContents.description.slice(0, 200)}...
          </p>
          <a href={`/group/${mainContents.group}`}>
            Go {mainContents.group.charAt(0).toUpperCase() + mainContents.group.slice(1)} Page
          </a>
          <button onClick={() => readMode()}>Read More</button>
        </div>
        <div id="modal" className={styles.modal}>
          <button onClick={() => closeModal()}>Close</button>
          <AnimalBigCards mainContents={mainContents} />
        </div>
      </div>
    )
  );
};

export default AnimalCards;
