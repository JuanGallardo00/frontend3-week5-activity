import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#1a1a2e' }}>
      <Toolbar>
        <SportsEsportsIcon sx={{ mr: 1 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            TechStore
          </Link>
        </Typography>
        <Box>
          <Button
            color="inherit"
            component={Link}
            to="/"
            startIcon={<HomeIcon />}
          >
            Catálogo
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/cart"
            startIcon={<ShoppingCartIcon />}
          >
            Mi Carrito
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
