import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CircularStatic from './Progress'
import { Paper } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  Width: 530,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: '#6A5ACD',
  mb: 2,
  borderRadius: 4
};


const CharacterItem = ({ item, loading }) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return loading ? <CircularStatic /> : (
    <div>
      <div className='content' onClick={handleOpen}>
        <div>
          <div className='content-front'>
            <img className='contant-imgModal' src={item?.thumbnail?.path + "/portrait_medium.jpg"} alt='' />
            <span className='content-name'>{item.name}</span>
          </div>
        </div>
      </div>
      <>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography position='absolute'>
              <button onClick={handleClose} className="popup__btn-close">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              color='#6A5ACD'
              display='flex'
              align='center'
              justifyContent='center'
              flexDirection='column'
            >
              <strong>{item.name}</strong>
              <Paper elevation={5}>
                <img src={item?.thumbnail?.path + "/landscape_incredible.jpg"} alt='' />
              </Paper>
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              color='#6A5ACD'
              display='flex'
              align='center'
              justifyContent='center'
              flexDirection='column'
              fontSize="8"
              mt={3}
            >
              <strong>Description:</strong> {item.description}
              <strong>Modified:</strong> {item.modified}
            </Typography>
          </Box>
        </Modal>
      </>
    </div>

  )
}

export default CharacterItem