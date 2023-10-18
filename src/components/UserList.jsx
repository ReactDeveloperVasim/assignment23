import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const UserList = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    );
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <TableContainer sx={{ bgcolor: "lightpink", marginBottom: "30px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">
                <b>
                  <span style={{ fontSize: "20px" }}>UserID</span>
                </b>
              </TableCell>
              <TableCell align="right">
                <b>
                  <span style={{ fontSize: "20px" }}>ID</span>
                </b>
              </TableCell>
              <TableCell align="left">
                <b>
                  <span style={{ fontSize: "20px" }}>Title</span>
                </b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow>
                <TableCell align="right">{item.userId}</TableCell>
                <TableCell align="right">{item.id}</TableCell>
                <TableCell align="left">{item.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
