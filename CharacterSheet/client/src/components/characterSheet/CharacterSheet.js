import { Button, Col, Container, Input, Row, Table } from "reactstrap";
import { AbilityScores } from "./AbilityScores";
import { Proficiency } from "./Proficiency";
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
                <Col>
                    <Row>
                        <Button>Heal</Button>
                    </Row>
                    <Row>
                        <Input />
                    </Row>
                    <Row>
                        <Button>Damage</Button>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <p>Current</p>
                    </Row>
                    <Row>
                        <span>56</span>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <span>/</span>
                    </Row>
                    <Row>
                        <span>/</span>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <p>Max</p>
                    </Row>
                    <Row>
                        <span>108</span>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <p>Temp</p>
                    </Row>
                    <Row>
                        <span>--</span>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col className="leftColumn">
                    {/* Saving Throws */}
                    <Col>
                        <Row>
                            <Col>
                                <p>Str</p>
                            </Col>
                            <Col>
                                <p>+2</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Dex</p>
                            </Col>
                            <Col>
                                <p>+2</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Con</p>
                            </Col>
                            <Col>
                                <p>+2</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <p>Int</p>
                            </Col>
                            <Col>
                                <p>+2</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Wis</p>
                            </Col>
                            <Col>
                                <p>+2</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Cha</p>
                            </Col>
                            <Col>
                                <p>+2</p>
                            </Col>
                        </Row>
                    </Col>
                    <p>Saving Throws</p>
                    {/* End of saving throws */}

                    {/* Passive Skills and Senses */}
                    <Col>
                        <Row>Passive Wis (Perception)</Row>
                        <Row>Passive Int (Investigation)</Row>
                        <Row>Passive Wis (Insight)</Row>
                        <Row>Darkvision 60ft.</Row>
                        <Row>
                            <p>Senses</p>
                        </Row>
                    </Col>
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
