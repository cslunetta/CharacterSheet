import { Col, Container, Row, Table } from "reactstrap";
import { AbilityScores } from "./AbilityScores";
import HealthTracker from "./HealthTracker";
import PassiveSkill from "./PassiveSkill";
import { Proficiency } from "./Proficiency";
import SavingThrows from "./SavingThrows";
import Skills from "./Skills";
import { Speed } from "./Speed";

export const CharacterSheet = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Character Sheet</h1>
                </Col>
                <Row>
                    <Col>
                        <p>Name</p>
                    </Col>
                    <Col>
                        <p>Class & Level</p>
                    </Col>
                </Row>
            </Row>

            <Row>
                <AbilityScores />
                <Proficiency />
                <Speed />
                <HealthTracker />
            </Row>

            <Row>
                <Col className="leftColumn">
                    <SavingThrows />
                    <PassiveSkill />
                </Col>
                {/* end of left column */}
                <Col className="middleColumn">
                    <Skills />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <p>Initiative</p>
                        </Col>
                        <Col>
                            <p>AC</p>
                        </Col>
                        <Col>
                            <p>Conditions</p>
                        </Col>
                    </Row>
                    <Row>
                        <Row>
                            <Col>
                        <p>Actions</p>
                            </Col>
                            <Col>
                        <p>Equipment</p>
                            </Col>
                            <Col>
                        <p>Spells</p>
                            </Col>
                            <Col>
                        <p>Features</p>
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};
