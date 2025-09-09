import { Form, InputGroup, Button, Card, Row, Col } from "react-bootstrap";
import { Search } from "lucide-react";
import TopBar from "../topbar/TopBar";

const CitizenSearch = ({ onSearch, search }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <>
      <TopBar />
      <div className="container mt-3">
        {/* Card para el buscador */}
        <Card className="p-3 shadow-sm mb-3" style={{ borderRadius: "12px" }}>
          <Form.Group className="mb-0" controlId="searchCitizen">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Ingresar DNI..."
                onChange={handleSearch}
                value={search}
                style={{ borderRadius: "8px 0 0 8px" }}
              />
              <Button
                variant="success"
                className="d-flex align-items-center gap-2"
                style={{ borderRadius: "0 8px 8px 0" }}
              >
                <Search size={18} />
                Consultar Ciudadano
              </Button>
            </InputGroup>
          </Form.Group>
        </Card>

        {/* Sección con dos cards separados */}
        <Row>
          {/* Card consultas recientes */}
          <Col md={8}>
            <Card className="p-3 shadow-sm mb-3" style={{ borderRadius: "12px" }}>
              <h6 className="fw-bold">Consultas recientes</h6>
              <table className="table table-sm mb-0">
                <thead>
                  <tr>
                    <th>DNI</th>
                    <th>Fecha</th>
                    <th>Tipo de Incidencia</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>365788701</td>
                    <td>2-08-2025</td>
                    <td>Bolsón</td>
                    <td>Resuelto</td>
                  </tr>
                  <tr>
                    <td>365788701</td>
                    <td>2-08-2025</td>
                    <td>Bolsón</td>
                    <td>Resuelto</td>
                  </tr>
                  <tr>
                    <td>365788701</td>
                    <td>2-08-2025</td>
                    <td>Bolsón</td>
                    <td>Resuelto</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </Col>

          {/* Card contador ciudadanos */}
          <Col md={4}>
            <Card
              className="p-3 shadow-sm d-flex flex-column justify-content-center align-items-center"
              style={{ borderRadius: "12px", minHeight: "150px" }}
            >
              <h6 className="fw-bold">Ciudadanos Ingresados</h6>
              <h2 className="text-success">117</h2>
              <p className="text-muted mb-0">3 Nuevos Ingresados</p>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CitizenSearch;
