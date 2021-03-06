import { Col, Row } from "reactstrap";

export const AbilityScores = () => {
    //  Standard Layout
    const Standard = () => {
        return (
            <>
                <Col>
                    <Row>
                        <h6>Strength</h6>
                    </Row>
                    <Row>
                        <Col>
                            <span>15</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span>+2</span>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <h6>Dexerity</h6>
                    <Row>
                        <Col>
                            <span>15</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span>+2</span>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <h6>Constitution</h6>
                    <Row>
                        <Col>
                            <span>15</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span>+2</span>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <h6>Intelligence</h6>
                    <Row>
                        <Col>
                            <span>15</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span>+2</span>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <h6>Wisdom</h6>
                    <Row>
                        <Col>
                            <span>15</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span>+2</span>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <h6>Charisma</h6>
                    <Row>
                        <Col>
                            <span>15</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span>+2</span>
                        </Col>
                    </Row>
                </Col>
            </>
        );
    };

    return <Standard />;
};
