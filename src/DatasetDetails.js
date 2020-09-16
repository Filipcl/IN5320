import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableCellHead,
} from "@dhis2/ui-core";
import styles from "./App.module.css";
const DatasetDetails = (props) => {
  return (
    <div>
      <div>
        <h3>Details</h3>
        <Table>
          <TableRow>
            <TableCellHead>Key</TableCellHead>
            <TableCellHead>Value</TableCellHead>
          </TableRow>
          <TableBody>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>{props.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>{props.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Created</TableCell>
              <TableCell>{props.created}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DatasetDetails;
