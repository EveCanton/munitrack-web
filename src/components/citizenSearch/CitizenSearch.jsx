import { Form, InputGroup, Button, Card } from "react-bootstrap";
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
        {/* Card para el cuadro con bordes redondeados */}
        <Card className="p-3 shadow-sm" style={{ borderRadius: "12px" }}>
          <Form.Group className="mb-0" controlId="searchCitizen">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Ingresar DNI..."
                onChange={handleSearch}
                value={search}
                style={{ borderRadius: "8px 0 0 8px" }} // bordes redondeados solo en la izquierda
              />
              <Button
                variant="success"
                className="d-flex align-items-center gap-2"
                style={{ borderRadius: "0 8px 8px 0" }} // bordes redondeados solo en la derecha
              >
                <Search size={18} />
                Consultar Ciudadano
              </Button>
            </InputGroup>
          </Form.Group>
        </Card>
         <Card className="p-3 shadow-sm" style={{ borderRadius: "12px" }}>
          <Form.Group className="mb-0" controlId="searchCitizen">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Ingresar DNI..."
                onChange={handleSearch}
                value={search}
                style={{ borderRadius: "8px 0 0 8px" }} // bordes redondeados solo en la izquierda
              />
              <Button
                variant="success"
                className="d-flex align-items-center gap-2"
                style={{ borderRadius: "0 8px 8px 0" }} // bordes redondeados solo en la derecha
              >
                <Search size={18} />
                Consultar Ciudadano
              </Button>
            </InputGroup>
          </Form.Group>
        </Card>
      </div>
    </>
  );
};

export default CitizenSearch;
