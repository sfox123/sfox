import React, { useState } from "react";
import { Dialog, Grid } from "@mui/material";
import ScrollVideo from "../../components/ScrollVideo/ScrollVideo";

const demos = [{ name: "Scroll Video", component: <ScrollVideo /> }];

const ComponentsPage = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  const handleOpen = (item) => {
    setCurrent(item);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="container" style={{ padding: "40px 20px" }}>
      <h1>Components</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
          gap: "20px",
        }}
      >
        {demos.map((c) => (
          <div
            key={c.name}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={() => handleOpen(c)}
          >
            {c.name}
          </div>
        ))}
      </div>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <Grid style={{ padding: 20 }}>{current?.component}</Grid>
      </Dialog>
    </div>
  );
};

export default ComponentsPage;
