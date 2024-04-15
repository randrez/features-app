import { useState, useEffect } from "react";
import { Feature } from "../domain/model/Feature";
import "../index.css";
import DialogComment from "./components/DialogComment";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import HeaderFeatures from "./components/HeaderFeatures";
import axios from "../data/Axios";
import request from "../data/Requests";
import ItemsFeature from "./components/ItemsFeature";

export default function Features() {
  const [open, setOpen] = useState(false);
  const [featureTitle, setFeatureTitle] = useState("");
  const [featureId, setFeatureId] = useState(0);
  const [loading, setLoading] = useState(true);
  const [perPage, setPerPage] = useState(10);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get(
          request.fetchFilterFeatures(currentPage, perPage, checkedList)
        );
        const data = response.data.data;
        const pagination = response.data.pagination;
        console.log(response.data);
        const newFeatures = data.map((element: any, index: number) => {
          let attributes = element.attributes;
          let coordinates = attributes.coordinates;
          return {
            id: index + 1,
            featureid: element.id,
            title: attributes.title,
            place: attributes.place,
            magType: attributes.mag_type,
            type: element.type,
            magnitude: attributes.magnitude,
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
          };
        });
        setTotal(pagination.total);
        setPerPage(pagination.per_page);
        setCurrentPage(pagination.current_page);
        setFeatures(newFeatures);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, [currentPage, perPage, checkedList]);

  const handleCommentClick = (feature: Feature) => {
    setFeatureId(feature.featureid);
    setFeatureTitle(feature.title);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleChangePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleOnSelectChecked = (item:string) => {
    if(item == "limpiar"){
      setCheckedList([]);
    }else{
      setCheckedList([...checkedList, item]);
    }
  };

  return (
    <div className="column" style={{ height: "100%", width: "100%" }}>
      <HeaderFeatures checkedList={checkedList} onSelectItemMenu={handleOnSelectChecked} />
      <section style={{ height: "100%", width: "100%" }}>
        {loading ? (
          <Box className="box">
            <CircularProgress size={100} style={{ color: 'coral' }} />
          </Box>
        ) : (
          <ItemsFeature
            features={features}
            currentPage={currentPage}
            perPage={perPage}
            total={total}
            onChangePage={handleChangePage}
            onSelectFeature={handleCommentClick}
          />
        )}
      </section>
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
