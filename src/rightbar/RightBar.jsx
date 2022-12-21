import "./RightBar.css";
import { ButtonGroup, Button, Tab, Tabs } from "react-bootstrap";

function RightBar() {
  return (
    <div className="bar">
      <Tabs
        defaultActiveKey="Captions"
        id="uncontrolled-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="Captions" title="Captions">
          Test
        </Tab>
        <Tab eventKey="Adjuster" title="Adjuster">
          Test
        </Tab>
        <Tab eventKey="Assets" title="Assets">
          Test
        </Tab>
      </Tabs>
    </div>
  );
}

export default RightBar;
