import { Col, Container, Row } from "reactstrap";
import { AbilityScores } from "./AbilityScores";

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
            
            <AbilityScores />

            <p>Saving Throws</p>
            <Row>
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
            </Row>

            <p>Health</p>

            <p>Current</p>
            <p>Max</p>
            <p>Conditions</p>

            <p>AC</p>
            <p>Initiative</p>
            <p>Skills</p>
            <p>Senses</p>
            <p>Actions</p>
            <p>Equipment</p>
            <p>Spells</p>
            <p>Features</p>
        </Container>
    );
};
