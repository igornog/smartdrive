/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from "@artsy/fresnel";
import { Link } from "react-router-dom";
import "./App.css";
import heroImg from "./images/turbo-hero.svg";
import scoreImg from "./images/score.svg";
import scoreColorImg from "./images/scorecolor.svg";
import agreementsImg from "./images/agreements.svg";
import offersImg from "./images/offers.svg";
import securityImg from "./images/security.svg";
import carImg from "./images/car.png";
import cadastroImg from "./images/cadastro.svg";
import descontoImg from "./images/desconto.png";
import scoreSmImg from "./images/score-sm.svg";
import boletoImg from "./images/boleto.svg";
import PropTypes from "prop-types";
import React, { Component, useState } from "react";
import { send } from "emailjs-com";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Form,
  Checkbox,
} from "semantic-ui-react";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

function FormExampleForm() {

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "SmartDriver",
    message: "",
    reply_to: "",
  });

  /* --- METHOD TO SEND THE MAIL --- */
  const onSubmit = (e) => {
    e.preventDefault();
    send('service_2mp6txq', 'template_w19hr36', toSend, 'user_ZvIillRJQKxuAvQOOGW1A')
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert('Interesse enviado com sucesso!');
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={onSubmit} id="form">
      <h1>Fique por dentro sobre o SmartDrive</h1>
      <Form.Field>
        <label>Nome completo</label>
        <input
          value={toSend.message}
          onChange={handleChange}
          name='message'
          type='text'
          placeholder="Seu nome completo"
        />
      </Form.Field>
      <Form.Field>
        <label>E-mail</label>
        <input
          value={toSend.from_name}
          onChange={handleChange}
          type='text'
          name='from_name'
          placeholder="Seu e-mail"
        />
      </Form.Field>
      <Button type="submit">Enviar interesse</Button>
    </Form>
  );
}

const HomepageHeading = ({ mobile }) => (
  <Container
    text
    style={{
      maxWidth: mobile ? "" : "1000px!important",
    }}
  >
    <Container
      style={{
        display: mobile ? "unset" : "flex",
        alignItems: "flex-end",
        marginTop: "15%",
      }}
    >
      {mobile ? (
        ""
      ) : (
        <>
          {" "}
          <Image
            bordered
            rounded
            className="watermark-bkg"
            size="large"
            src={scoreImg}
            style={{
              border: "none",
            }}
          />
          <Image
            bordered
            className="score-bkg"
            rounded
            size="large"
            src={scoreColorImg}
            style={{
              border: "none",
            }}
          />
          <Image
            bordered
            className="car-bkg"
            rounded
            size="large"
            src={carImg}
            style={{
              border: "none",
            }}
          />
        </>
      )}
      <Container>
        <Header
          as="h1"
          content="SmartDrive"
          inverted
          style={{
            fontSize: mobile ? "2em" : "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: mobile ? "1.5em" : "3em",
          }}
        />

        <Header
          as="h2"
          content="Quem dirige bem, economiza bem"
          inverted
          style={{
            fontSize: mobile ? ".7em" : "1em",
            fontWeight: "normal",
            marginTop: "0",
          }}
        />
        <Header
          as="h2"
          content="Ganhe descontos através do seu comportamento no trânsito."
          inverted
          style={{
            fontSize: mobile ? "1.5em" : "1.7em",
            fontWeight: "normal",
            marginTop: mobile ? "0.5em" : "1em",
          }}
        />
        <Header
          as="h2"
          content="IA dedicada para um trânsito mais inteligente."
          inverted
          style={{
            fontSize: mobile ? ".7em" : "1em",
            fontWeight: "normal",
            marginTop: "0",
          }}
        />
        <Button
          href="#form"
          style={{
            margin: "1rem 0",
            fontSize: "1.5rem",
          }}
        >
          Quero saber mais
        </Button>
      </Container>
    </Container>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="left"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container style={{ zIndex: "999" }}>
                <Link to="/">
                  {" "}
                  <Menu.Item as="a" active>
                    Home
                  </Menu.Item>
                </Link>
                <Link to="/parceiros">
                  {" "}
                  <Menu.Item as="a">Parceiros</Menu.Item>
                </Link>

                <Link to="/sobre-nos">
                  {" "}
                  <Menu.Item as="a">Sobre nós</Menu.Item>
                </Link>

                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed}>
                    Entrar
                  </Button>
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Cadastre-se
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Link to="/">
              <Menu.Item as="a">Entrar</Menu.Item>
            </Link>
            <Link to="/">
              <Menu.Item as="a">Cadastre-se</Menu.Item>
            </Link>
            <Link to="/parceiros">
              <Menu.Item as="a">Parceiros</Menu.Item>
            </Link>
            <Link to="/sobre-nos">
              <Menu.Item as="a">Sobre-nós</Menu.Item>
            </Link>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const HomepageLayout = (mobile) => (
  <ResponsiveContainer>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <p style={{ fontSize: "3em" }}>
              <Image avatar src={offersImg} />
            </p>
            <Header as="h4" style={{ fontSize: mobile ? "1.5em" : "2em" }}>
              Ofertas exclusivas
            </Header>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <p style={{ fontSize: "3em" }}>
              <Image avatar src={securityImg} />
            </p>
            <Header as="h4" style={{ fontSize: mobile ? "1.5em" : "2em" }}>
              Confiável e seguro
            </Header>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <p style={{ fontSize: "3em" }}>
              <Image avatar src={agreementsImg} />
            </p>
            <Header as="h4" style={{ fontSize: mobile ? "1.5em" : "2em" }}>
              Gerencie suas ocorrências
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "4em 0em 8em" }} vertical>
      <Container text>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">Como funciona?</a>
        </Divider>

        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <p style={{ fontSize: "3em" }}>
                <Image avatar src={cadastroImg} />
              </p>
              <Header as="h3" style={{ fontSize: "1.5em", fontWeight: "400" }}>
                Após o cadastro no aplicativo, o SmartDrive estará pronto para
                monitorar a sua velocidade em segundo plano.
              </Header>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <p style={{ fontSize: "3em" }}>
                <Image avatar src={scoreSmImg} />
              </p>
              <Header as="h3" style={{ fontSize: "1.5em", fontWeight: "400" }}>
                Nosso algoritmo calculará o seu score levando em consideração;{" "}
                <strong>os limites de velocidade nas vias</strong> em conjunto
                com o seu <strong>histórico de ocorrências</strong>. <br />
                <br />
                Você poderá acompanhar tudo em tempo real no seu app.
              </Header>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <p style={{ fontSize: "3em" }}>
                <Image avatar src={descontoImg} />
              </p>
              <Header as="h3" style={{ fontSize: "1.5em", fontWeight: "400" }}>
                Com o seu score você poderá acumular pontos e ganhar descontos
                em seguradoras, locadoras e até para pagar o seu IPVA.
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

    <Segment style={{ padding: "4em 0em 8em" }} className="company" vertical>
      <Container text>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">Solução para empresas</a>
        </Divider>

        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <p style={{ fontSize: "6em" }}>
                <Image avatar src={boletoImg} />
              </p>
              <Header
                as="h3"
                style={{
                  fontSize: "1.5em",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Use o SmartDrive como ferramenta para complementar o cálculo de
                risco.
              </Header>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <p style={{ fontSize: "6em" }}>
                <Image style={{ width: "100%" }} avatar src={heroImg} />
              </p>
              <Header
                as="h3"
                style={{
                  fontSize: "1.5em",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Monitore a sua frota por aplicativo, de maneira prática e em
                tempo real.
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

    <Segment vertical style={{ padding: "5em 0em" }}>
      <Container>{FormExampleForm()}</Container>
    </Segment>

    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                SmartDrive
              </Header>
              <p>IA dedicada para um trânsito mais inteligente.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;
