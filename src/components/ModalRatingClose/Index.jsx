import React from "react";
import { Modal, Fade } from "@material-ui/core";
import Card from "./Card";

function Index({
  singleJob,
  open,
  onClose,
  className,
  closeAfterTransition,
  BackdropComponent,
  BackdropProps,
  ClassNamePaper,
  modalStyle,
  setOpen,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className={className}
        closeAfterTransition={closeAfterTransition}
        BackdropComponent={BackdropComponent}
        BackdropProps={BackdropProps}
      >
        <Fade in={open}>
          <div
            style={{ width: "50%", height: "50%" }}
            className={ClassNamePaper}
          >
            <h1 style={{ fontSize: 30 }}>Da tu puntaje al reclutador</h1>
            <Card singleJob={singleJob} setOpen={setOpen} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Index;
