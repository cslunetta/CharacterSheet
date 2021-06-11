import { Col, Container, Row, Table } from "reactstrap";
import { AbilityScores } from "./AbilityScores";
import HealthTracker from "./HealthTracker";
import PassiveSkill from "./PassiveSkill";
import { Proficiency } from "./Proficiency";
import SavingThrows from "./SavingThrows";
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

                    {/* Passive Skills and Senses */}

                    <PassiveSkill />
                    {/* End of Passive Skills and Senses */}
                </Col>
                {/* end of left column */}
                <Col className="middleColumn">
                    {/* Skills */}
                    <Table>
                        <thead>
                            <tr>
                                <th>Prof</th>
                                <th>Mod</th>
                                <th>Skill</th>
                                <th>Bonus</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> O</td>
                                <td>DEX</td>
                                <td>Skill Name</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td> O</td>
                                <td>DEX</td>
                                <td>Skill Name</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td> O</td>
                                <td>DEX</td>
                                <td>Skill Name</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td> O</td>
                                <td>DEX</td>
                                <td>Skill Name</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td> O</td>
                                <td>DEX</td>
                                <td>Skill Name</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td> O</td>
                                <td>DEX</td>
                                <td>Skill Name</td>
                                <td>+2</td>
                            </tr>
                        </tbody>
                    </Table>
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
                        <p>Actions</p>
                        <p>Equipment</p>
                        <p>Spells</p>
                        <p>Features</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};
