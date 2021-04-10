import React, { useState, useEffect } from "react";
import loadable from "@loadable/component";
import Card from "react-bootstrap/Card";
import { Container, Col } from "react-bootstrap";
import { db } from "../../firebase";
import { Link } from "react-router-dom";

const Input = loadable(() => import("../../common/Input"));

const AllAssets = () => {
  const [assetList, setAssetList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await db.collectionGroup("assets").get();

        setAssetList(querySnapshot.docs.map((doc) => doc.data()));
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
    console.log(assetList);
  }, []);

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    console.log(values);
  };

  const AssetCard = ({
    assetName,
    assetValue,
    assetLocation,
    assetDescription,
    owner,
  }) => {
    return (
      <Col>
        <Link to={`/asset/${assetName} ,${owner}`}>
          <Card style={{ margin: "20px", cursor: "pointer" }} className="h-100">
            <Card.Body>
              <Card.Title>{assetName}</Card.Title>
              <Card.Text style={{ fontSize: "1rem" }} maxLength="12">
                <strong>Estimated Value: </strong> <br />
                {assetDescription.substring(0, 300)} . . .
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{owner}</small>
            </Card.Footer>
          </Card>
        </Link>
      </Col>
    );
  };

  if (loading) {
    return <Container style={{ minHeight: "80vh" }}></Container>;
  } else {
    return (
      <Container style={{ minHeight: "80vh", padding: "none" }}>
        <Input
          type="text"
          name="asset"
          placeholder="Search"
          value={values.asset || ""}
          onChange={handleChange}
        />
        {values.asset
          ? assetList
              .filter((doc) =>
                doc.name
                  .toLowerCase()
                  .trim()
                  .includes(values.asset.toLowerCase().trim())
              )
              .map(function (doc) {
                return (
                  <AssetCard
                    assetName={doc.name}
                    assetValue={doc.value}
                    assetLocation={doc.location}
                    assetDescription={doc.description}
                    owner={doc.owner}
                  />
                );
              })
          : assetList.map(function (doc) {
              return (
                <AssetCard
                  assetName={doc.name}
                  assetValue={doc.value}
                  assetLocation={doc.location}
                  assetDescription={doc.description}
                  owner={doc.owner}
                />
              );
            })}
      </Container>
    );
  }
};

export default AllAssets;
