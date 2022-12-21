import NavDropdown from "react-bootstrap/NavDropdown";

function StyledNavDropdown({ title, actions }) {
  return (
    <NavDropdown
      id="nav-dropdown-dark-example"
      title={title}
      menuVariant="dark"
    >
      {actions.map((action) => (
        <NavDropdown.Item key={action.label} href="#action/3.1">
          {action.label}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

export default StyledNavDropdown;
