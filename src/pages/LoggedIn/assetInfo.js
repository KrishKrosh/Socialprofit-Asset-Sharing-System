import React, { useState, useEffect } from "react";
import loadable from "@loadable/component";
import { Link, useHistory } from "react-router-dom";
import { BrowserRouter as Router, useRouteMatch } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Container } from "react-bootstrap";
import { db } from "../../firebase";
const AssetBlock = loadable(() => import("../../components/AssetBlock"));

const AssetInfo = () => {
  const match = useRouteMatch("/asset/:assetName,:owner");
  const [asset, setAsset] = useState({});
  const [owner, setOwner] = useState({});
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const assetName = match.params.assetName;

        await db
          .collection("users")
          .where("orgName", "==", match.params.owner)
          .get()
          .then((querySnapshot) => {
            if (!querySnapshot.empty) {
              setOwner(querySnapshot.docs[0].data());
              querySnapshot.docs[0].ref
                .collection("assets")
                .doc(assetName.trim())
                .get()
                .then((doc) => {
                  setAsset(doc.data());

                  setLoading(false);
                });
            }
          });
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const deleteListing = async () => {
    try {
      console.log("trying to delete");
      await db
        .collection("users")
        .doc(currentUser.email)
        .collection("assets")
        .doc(match.params.assetName.trim())
        .delete();
    } catch (err) {
      console.error(err);
    }
    history.push("/");
    console.log("deleted");
  };

  if (loading) {
    return <Container style={{ minHeight: "80vh" }}></Container>;
  } else {
    if (currentUser.email === owner.email) {
      return (
        <Container style={{ minHeight: "80vh" }}>
          <AssetBlock
            title={asset.name}
            content={asset.description}
            owner={match.params.owner.trim()}
            value={asset.value}
            location={asset.location}
            phone={owner.phone}
            email={owner.email}
            button={deleteListing}
            id="info"
          />
        </Container>
      );
    } else {
      return (
        <Container style={{ minHeight: "80vh" }}>
          <AssetBlock
            title={asset.name}
            content={asset.description}
            owner={match.params.owner.trim()}
            value={asset.value}
            location={asset.location}
            phone={owner.phone}
            email={owner.email}
            id="info"
          />
        </Container>
      );
    }
  }
};

export default AssetInfo;
