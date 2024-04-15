import { Feature } from "../../domain/model/Feature";
import { ListProps } from "./ListProps";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { Comment } from "@mui/icons-material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function ItemsFeature(props: ListProps) {
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
    <ListItem>
      <ListItemText
        primary={<h3>{feature.title}</h3>}
        secondary={
          <div className="column">
            <div className="feature-details">
              <strong>Magnitud: </strong> {feature.magnitude}
              <br />
              <strong>Lugar: </strong> {feature.place}
              <br />
              <strong>Mag tipo :</strong> {feature.magType}
              <br />
              <strong>Tipo :</strong> {feature.type}
              <br />
              <strong>Latitud: </strong> {feature.latitude}
              <br />
              <strong>Longitud: </strong> {feature.longitude}
              <br />
              <strong>Comentar: </strong>
              <IconButton onClick={() => onSelectFeature(feature)}>
                <Comment className="icon_comment" />
              </IconButton>
            </div>
          </div>
        }
      />
    </ListItem>
  );

  return (
    <>
      {features.map((feature: Feature, key: number) => (
        <List key={key}>
          {itemFeature(feature)}
          <Divider />
        </List>
      ))}

      <Stack spacing={2} mt={2}>
        {features.length > 0 && (
          <Pagination
            className="pagination"
            count={Math.ceil(total / perPage)}
            page={currentPage}
            onChange={handleChangePage}
          />
        )}
      </Stack>
    </>
  );
}
