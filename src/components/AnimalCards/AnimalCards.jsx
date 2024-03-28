import { useRef, useEffect } from "react";
import { getImageURL } from "../../utils/functions";
import AnimalBigCards from "../AnimalBigCards/AnimalBigCards";
import styles from "./AnimalCards.module.css";

const AnimalCards = ({ mainContents }) => {
  const modalRef = useRef(null);

  const readMore = () => {
    const modal = document.querySelector("#modal");
    modal.style.display = "flex";
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
          <div className={styles.linkAndButton}>
            <a className={styles.goGroupPage} href={`/group/${mainContents.group}`}>
              Go {mainContents.group.charAt(0).toUpperCase() + mainContents.group.slice(1)} Page
            </a>
            <button className={styles.readMore} onClick={() => readMore()}>
              Read More
            </button>
          </div>
        </div>
        <div id="modal" className={styles.modal}>
          <div className={styles.modalBg} onClick={() => closeModal()}></div>
          <div className={styles.modalContent}>
            <button className={styles.closeModal} onClick={() => closeModal()}>
              Close
            </button>
            <AnimalBigCards mainContents={mainContents} />
          </div>
        </div>
      </div>
    )
  );
};

export default AnimalCards;
