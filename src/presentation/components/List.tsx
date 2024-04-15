import { Feature } from "../../domain/model/Feature";
import { ListProps } from "./ListProps";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { Comment } from "@mui/icons-material";

export default function List(props: ListProps) {
  const {
    features,
    currentPage,
    perPage,
    total,
    onChangePage,
    onSelectFeature,
  } = props;

  const handleChangePage = (event: any, newPage: any) => {
    onChangePage(newPage);
  };

  const itemFeature = (feature: Feature) => (
      <div>
        <h3>{feature.title}</h3>
        <p>
          <strong>Magnitud: </strong> {feature.magnitude}
        </p>
        <p>
          <strong>Lugar: </strong> {feature.place}
        </p>
        <p>
          <strong>Mag tipo :</strong>
          {feature.magType}
        </p>
        <p>
          <strong>Tipo :</strong>
          {feature.type}
        </p>
        <p>
          <strong>Latitud: </strong>
          {feature.latitude}
        </p>
        <p>
          <strong>Longitud: </strong>
          {feature.longitude}
        </p>
        <p>
          <strong>Comentar: </strong>
          <IconButton onClick={() => onSelectFeature(feature)}>
            <Comment />
          </IconButton>
        </p>
      </div>
  );

  return (
    <div>
      {features.map((feature: Feature, key:number) => (
        <div key={key}>
          {itemFeature(feature)}
          <hr />
        </div>
      ))}

      <Stack spacing={2} mt={2}>
        <Pagination
          variant="outlined"
          shape="rounded"
          count={Math.ceil(total / perPage)} // Calcular el número total de páginas
          page={currentPage}
          onChange={handleChangePage}
        />
      </Stack>
    </div>
  );
}
