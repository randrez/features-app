import * as React from "react";
import { RowData } from "../domain/RowData";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "../index.css";
import { Comment } from "@mui/icons-material";
import DialogComment from "./components/DialogComment";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import HeaderFeatureList from "./components/HeaderFeatureList";

const rows: RowData[] = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: "null", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function FeatureList() {
  const [open, setOpen] = React.useState(false);
  const [featureTitle, setFeatureTitle] = React.useState("");
  const [featureId, setFeatureId] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [checkedList, setCheckedList] = React.useState<string[]>([]);

  const handleCommentClick = (rowData: RowData) => {
    console.log("Row clicked:", rowData.firstName);
    setFeatureId(rowData.id);
    setFeatureTitle(rowData.firstName);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const columns: GridColDef[] = [
    {
      field: "firstName",
      headerName: "First name",
      width: 130,
      sortable: false,
      headerClassName: "header_features",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 130,
      sortable: false,
      headerClassName: "header_features",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      sortable: false,
      width: 90,
      headerClassName: "header_features",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      headerClassName: "header_features",
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <IconButton onClick={() => handleCommentClick(params.row)}>
          <Comment />
        </IconButton>
      ),
    },
  ];

  const gridFeatures = (
    <DataGrid
      rows={rows}
      columns={columns}
      disableColumnMenu={true}
      initialState={{
        pagination: { paginationModel: { page: 0, pageSize: 10 } },
      }}
      pageSizeOptions={[5, 10]}
    />
  );

  return (
    <div className="column">
      <div style={{ height: "100%", width: "100%" }}>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "100%",
            }}
          >
            <CircularProgress size={100} style={{ color: "coral" }} />
          </Box>
        ) : (
          gridFeatures
        )}
      </div>
      <DialogComment
        featureTitle={featureTitle}
        featureId={featureId}
        open={open}
        onClose={handleCloseDialog}
        onCreateComment={handleCloseDialog}
      />
    </div>
  );
}
