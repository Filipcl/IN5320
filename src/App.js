import React from "react";
import i18n from "@dhis2/d2-i18n";
import { Menu, MenuItem, MenuSectionHeader } from "@dhis2/ui";
import ProgramList from "./ProgramList";
import DatasetList from "./DatasetList";
import styles from "./App.module.css";
import { useState } from "react";

const MyApp = () => {
  const [programs, setPrograms] = useState(false);
  const [dataset, setDataset] = useState(false);

  function getPrograms() {
    setPrograms(true);
    setDataset(false);
  }
  function getDataset() {
    setDataset(true);
    setPrograms(false);
  }
  return (
    <div className={styles.container}>
      <nav className={styles.menu} data-test-id="menu">
        <MenuSectionHeader label={i18n.t("Menu")} />
        <Menu>
          <MenuItem
            label={i18n.t("Programs")}
            onClick={() => getPrograms()}
            dataTest="menu-programs"
          />
          <MenuItem
            label={i18n.t("Data sets")}
            onClick={() => getDataset()}
            dataTest="menu-dataSets"
          />
        </Menu>
      </nav>
      <main className={styles.main}>
        {programs && <ProgramList />}
        {dataset && <DatasetList />}
      </main>
    </div>
  );
};

export default MyApp;
