import React from "react";
import { useDataQuery } from "@dhis2/app-runtime";
import { Menu, MenuItem } from "@dhis2/ui";
import { useState } from "react";
import ProgramDetails from "./ProgramDetails";
import style from "./App.module.css";

const query = {
  programs: {
    resource: "programs",
    params: {
      paging: false,
      fields: ["id", "name", "created"],
    },
  },
};

const ProgramList = () => {
  const [programDetails, setProgramDetails] = useState();
  const { loading, error, data } = useDataQuery(query);
  if (error) {
    return <p>Error</p>;
  }
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <div className={style.container}>
      {loading && <span>...</span>}
      {error && <span>{`ERROR: ${error.message}`}</span>}
      {data && (
        <div>
          <h3>List</h3>
          <Menu>
            {data.programs.programs.map((program) => (
              <MenuItem
                key={program.id}
                label={program.name}
                onClick={() => setProgramDetails(program)}
              />
            ))}
          </Menu>
        </div>
      )}
      <main className={style.main}>
        {programDetails && <ProgramDetails {...programDetails} />}
      </main>
    </div>
  );
};

export default ProgramList;
