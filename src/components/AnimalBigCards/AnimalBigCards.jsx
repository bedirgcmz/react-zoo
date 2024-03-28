import { getImageURL } from "../../utils/functions";
import styles from "./AnimalBigCards.module.css";

const AnimalBigCards = ({ mainContents }) => {
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
            <b>Description</b> :{mainContents.description}
          </p>
          <p>
            <b>Group</b> :{mainContents.group}
          </p>
          <p>
            <b>Food</b> :{mainContents.food}
          </p>
          <p>
            <b>Length</b> :{mainContents.length}
          </p>
          <p>
            <b>Weight</b> :{mainContents.weight}
          </p>
          <p>
            <b>Lifespan</b> :{mainContents.lifespan}
          </p>
          <p>
            <b>Found</b> :{mainContents.found}
          </p>
        </div>
      </div>
    )
  );
};

export default AnimalBigCards;
