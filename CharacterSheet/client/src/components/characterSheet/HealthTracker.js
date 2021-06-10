import { Button, Col, Input, Row } from "reactstrap";

const HealthTracker = () => {
    return (
        <>
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
        </>
    );
};

export default HealthTracker;
