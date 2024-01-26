import { ListGroup, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Listado = ({ colaboradores }) => {
  return (
    <ListGroup>
      {colaboradores.map((colaborador) => (
        <ListGroup.Item key={colaborador.id}>
          <Row>
            <Col>{colaborador.nombre}</Col>
            <Col>{colaborador.correo}</Col>
            <Col>{colaborador.edad}</Col>
            <Col>{colaborador.cargo}</Col>
            <Col>{colaborador.telefono}</Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default Listado
