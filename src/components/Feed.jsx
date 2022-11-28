import { Add, Delete, MoreVert } from '@mui/icons-material';
import {
  Box,
  Card,
  CardHeader,
  IconButton,
  InputBase,
  Paper,
} from '@mui/material';
import React from 'react';

import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'card1',
    label: 'card1',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default function Feed() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#efefef',
        height: '100%',
      }}
    >
      <Box sx={{ ml: '300px', height: '100%' }}>
        <Box sx={{ mt: '30px' }}>
          <h1>Adminstration</h1>

          <Box sx={{ display: 'flex' }}>
            <button
              style={{
                border: 'none',
                fontSize: '16px',
                borderRadius: '5px',
                padding: '5px',
                marginRight: '16px',
              }}
            >
              Group
            </button>
            <button
              style={{
                border: 'none',
                fontSize: '16px',
                borderRadius: '10%',
                padding: '5px',
                marginRight: '16px',
              }}
            >
              Users
            </button>
            <button
              style={{
                border: 'none',
                fontSize: '16px',
                borderRadius: '10%',
                padding: '5px',
                marginRight: '16px',
              }}
            >
              Fleets and spare Availabity
            </button>
            <button
              style={{
                border: 'none',
                fontSize: '16px',
                backgroundColor: '#4f92eb',
                borderRadius: '5px',
                padding: '5px',
                marginRight: '16px',
                color: 'white',
              }}
            >
              Master Data
            </button>
          </Box>
        </Box>
        <Box
          sx={{
            mb: '10px',
          }}
        >
          <h2>Master Data category</h2>
          <Paper
            component='form'
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder='Search...'
              inputProps={{ 'aria-label': 'search...' }}
            />
            <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
              <SearchIcon />
            </IconButton>
          </Paper>
          <TextField
            sx={{ mt: '10px', mb: '10px', width: 400 }}
            id='outlined-select-currency'
            select
            label='Select'
            value={currency}
            onChange={handleChange}
            helperText='Please select your currency'
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Card sx={{ mb: '16px', width: '350px' }} >
          <CardHeader
            action={
              <Box>
                <Button
                  id='demo-customized-button'
                  aria-controls={open ? 'demo-customized-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  disableElevation
                  onClick={handleClick}
                >
                  <IconButton aria-label='settings'>
                    <MoreVert />
                  </IconButton>
                </Button>
                <StyledMenu
                  id='demo-customized-menu'
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <Add />
                    Add
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <Delete />
                    Delete
                  </MenuItem>
                </StyledMenu>
              </Box>
            }
            title={'FAK ULD Location'}
          />
        </Card>
        <Card sx={{ mb: '16px', width: '350px' }}>
          <CardHeader
            action={
              <Box>
                <Button
                  id='demo-customized-button'
                  aria-controls={open ? 'demo-customized-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  disableElevation
                  onClick={handleClick}
                >
                  <IconButton aria-label='settings'>
                    <MoreVert />
                  </IconButton>
                </Button>
                <StyledMenu
                  id='demo-customized-menu'
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <Add />
                    Add
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <Delete />
                    Delete
                  </MenuItem>
                </StyledMenu>
              </Box>
            }
            title={'FAK Exception Types'}
          />
        </Card>
        <Card sx={{ mb: '16px', width: '350px' }}>
          <CardHeader
            action={
              <Box>
                <Button
                  id='demo-customized-button'
                  aria-controls={open ? 'demo-customized-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  disableElevation
                  onClick={handleClick}
                >
                  <IconButton aria-label='settings'>
                    <MoreVert />
                  </IconButton>
                </Button>
                <StyledMenu
                  id='demo-customized-menu'
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <Add />
                    Add
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <Delete />
                    Delete
                  </MenuItem>
                </StyledMenu>
              </Box>
            }
            title={'Daily FAK Email'}
          />
        </Card>
        <Card sx={{ mb: '16px', width: '350px' }}>
          <CardHeader
            action={
              <Box>
                <Button
                  id='demo-customized-button'
                  aria-controls={open ? 'demo-customized-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  disableElevation
                  onClick={handleClick}
                >
                  <IconButton aria-label='settings'>
                    <MoreVert />
                  </IconButton>
                </Button>
                <StyledMenu
                  id='demo-customized-menu'
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <Add />
                    Add
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <Delete />
                    Delete
                  </MenuItem>
                </StyledMenu>
              </Box>
            }
            title={'Daily FAK Email CC'}
          />
        </Card>
        <Card sx={{ mb: '16px', width: '350px' }}>
          <CardHeader
            action={
              <Box>
                <Button
                  id='demo-customized-button'
                  aria-controls={open ? 'demo-customized-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  disableElevation
                  onClick={handleClick}
                >
                  <IconButton aria-label='settings'>
                    <MoreVert />
                  </IconButton>
                </Button>
                <StyledMenu
                  id='demo-customized-menu'
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <Add />
                    Add
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <Delete />
                    Delete
                  </MenuItem>
                </StyledMenu>
              </Box>
            }
            title={'Upliftment station Email'}
          />
        </Card>
        <Card sx={{ mb: '16px', width: '350px' }}>
          <CardHeader
            action={
              <Box>
                <Button
                  id='demo-customized-button'
                  aria-controls={open ? 'demo-customized-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  disableElevation
                  onClick={handleClick}
                >
                  <IconButton aria-label='settings'>
                    <MoreVert />
                  </IconButton>
                </Button>
                <StyledMenu
                  id='demo-customized-menu'
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <Add />
                    Add
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <Delete />
                    Delete
                  </MenuItem>
                </StyledMenu>
              </Box>
            }
            title={'Plan remarks'}
          />
        </Card>
        <Card sx={{ mb: '16px', width: '350px' }}>
          <CardHeader
            action={
              <Box>
                <Button
                  id='demo-customized-button'
                  aria-controls={open ? 'demo-customized-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  disableElevation
                  onClick={handleClick}
                >
                  <IconButton aria-label='settings'>
                    <MoreVert />
                  </IconButton>
                </Button>
                <StyledMenu
                  id='demo-customized-menu'
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <Add />
                    Add
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <Delete />
                    Delete
                  </MenuItem>
                </StyledMenu>
              </Box>
            }
            title={'Supplier'}
          />
        </Card>
        <Card sx={{ mb: '16px', width: '350px' }}>
          <CardHeader
            action={
              <Box>
                <Button
                  id='demo-customized-button'
                  aria-controls={open ? 'demo-customized-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  disableElevation
                  onClick={handleClick}
                >
                  <IconButton aria-label='settings'>
                    <MoreVert />
                  </IconButton>
                </Button>
                <StyledMenu
                  id='demo-customized-menu'
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <Add />
                    Add
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <Delete />
                    Delete
                  </MenuItem>
                </StyledMenu>
              </Box>
            }
            title={'Default Upliftment To Email'}
          />
        </Card>
        <Card sx={{ mb: '16px', width: '350px' }}>
          <CardHeader
            action={
              <Box>
                <Button
                  id='demo-customized-button'
                  aria-controls={open ? 'demo-customized-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  disableElevation
                  onClick={handleClick}
                >
                  <IconButton aria-label='settings'>
                    <MoreVert />
                  </IconButton>
                </Button>
                <StyledMenu
                  id='demo-customized-menu'
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <Add />
                    Add
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <Delete />
                    Delete
                  </MenuItem>
                </StyledMenu>
              </Box>
            }
            title={'Default Upliftment CC Email'}
          />
        </Card>
        <Card sx={{ mb: '16px', width: '350px' }}>
          <CardHeader
            action={
              <Box>
                <Button
                  id='demo-customized-button'
                  aria-controls={open ? 'demo-customized-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  disableElevation
                  onClick={handleClick}
                >
                  <IconButton aria-label='settings'>
                    <MoreVert />
                  </IconButton>
                </Button>
                <StyledMenu
                  id='demo-customized-menu'
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <Add />
                    Add
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <Delete />
                    Delete
                  </MenuItem>
                </StyledMenu>
              </Box>
            }
            title={'Base station'}
          />
        </Card>
      </Box>
    </Box>
  );
}
