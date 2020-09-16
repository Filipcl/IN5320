import React from "react";
import { useDataQuery } from "@dhis2/app-runtime";
import { Menu, MenuItem } from "@dhis2/ui";
import { useState } from "react";
import DatasetDetails from "./DatasetDetails";
import styles from "./App.module.css";

const query = {
  dataSets: {
    resource: "dataSets",
    params: {
      paging: false,
      fields: ["id", "name", "created"],
    },
  },
};

const DatasetList = () => {
  const [datasetDetails, setDatasetDetails] = useState();
  console.log(datasetDetails);

  const { loading, error, data } = useDataQuery(query);
  if (error) {
    return <p>Error</p>;
  }
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <div className={styles.container}>
      {loading && <span>...</span>}
      {error && <span>{`ERROR: ${error.message}`}</span>}
      {data && (
        <div>
          <h3>List</h3>
          <Menu>
            {data.dataSets.dataSets.map((details) => (
              <MenuItem
                key={details.id}
                label={details.name}
                onClick={() => setDatasetDetails(details)}
              />
            ))}
          </Menu>
        </div>
      )}
      <main className={styles.main}>
        {datasetDetails && <DatasetDetails {...datasetDetails} />}
      </main>
    </div>
  );
};

export default DatasetList;
