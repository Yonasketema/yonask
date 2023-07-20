import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#c6ff00",
  ...theme.typography.body2,
  padding: 3,
  paddingLeft: 7,
  paddingRight: 7,
  textAlign: "center",
  color: "#000",
  fontSize: 10,
  fontWeight: "bold",
}));

export default function Stacks({ stacks }) {
  return (
    <div
      style={{
        marginBottom: 21,
      }}
    >
      <Stack direction="row" spacing={2}>
        {stacks?.map((stack) => (
          <Item>{stack}</Item>
        ))}
      </Stack>
    </div>
  );
}
