import React from 'react'
import { Modal, Fade, Backdrop } from '@material-ui/core'
import Card from './Card'
function Index({
  selectedJob,
  open,
  onClose,
  className,
  closeAfterTransition,
  BackdropComponent,
  BackdropProps,
  ClassNamePaper,
  modalStyle,
  setOpenRecruiter,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpenRecruiter(false)}
        className={className}
        closeAfterTransition={closeAfterTransition}
        BackdropComponent={BackdropComponent}
        BackdropProps={BackdropProps}
      >
        <Fade in={open}>
          <div
            style={{ width: '90%', height: '80%' }}
            className={ClassNamePaper}
          >
            <h1 style={{ fontSize: 30 }}>Elige a un reclutador</h1>
            <Card
              selectedJob={selectedJob}
              setOpenRecruiter={setOpenRecruiter}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default Index
