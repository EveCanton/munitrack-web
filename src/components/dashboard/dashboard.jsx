// import { Navbar, Container, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { FaUserCircle } from 'react-icons/fa';

// const Dashboard = ({ operator }) => {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         {/* Link a tu página principal (Buscar ciudadano) */}
//         <Navbar.Brand as={Link} to="/citizenSearch">
//           Home
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto d-flex align-items-center">
//             {/* Ícono usuario (con foto opcional a futuro) */}
//             {operator?.photo ? (
//               <img
//                 src={operator.photo}
//                 alt="operator"
//                 className="rounded-circle"
//                 style={{ width: "35px", height: "35px", objectFit: "cover" }}
//               />
//             ) : (
//               <FaUserCircle size={35} />
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Dashboard;
