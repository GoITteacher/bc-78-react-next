import { Cat } from "../../../../types/cats";

interface CatItemProps {
  catInfo: Cat;
}
const CatItem = ({ catInfo }: CatItemProps) => {
  return (
    <div>
      <h5>{catInfo.name}</h5>
      <p>{catInfo.email}</p>
      <p>{catInfo.phone}</p>
      <img src={catInfo.image} alt={catInfo.name} height={100} />
    </div>
  );
};

export default CatItem;
