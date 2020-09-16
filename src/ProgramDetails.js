import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableCellHead,
} from "@dhis2/ui-core";

const ProgramDetails = (props) => {
  return (
    <div>
      <h3>Details</h3>
      <div>
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

export default ProgramDetails;
