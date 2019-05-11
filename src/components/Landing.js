import React, { Component } from "react";
import PanelDescription from "./PanelDescription";
import AboutPanel from "./AboutPanel";
import ContactPanel from "./ContactPanel";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { showAbout: true, showService: false, showContact: false };
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({ showAbout: false, showService: false, showContact: false });
    this.setState({ [e.target.dataset.panel]: true });
  };

  render() {
    return (
      <div className="landing">
        <section className="hero">
          <div className="dark-overlay">
            <div className="hero-text-box">
              <h1 className="hero-text-box__heading">Power User</h1>
              <p className="hero-text-box__lead">
                Bring realtime analytics and cloud solutions to empower your
                customers
              </p>
            </div>
          </div>
        </section>

        <section className="info bg-dark">
          <div className="content">
            <div className="panel">
              <div className="panel__button">
                <button
                  className="btn panel__button--about"
                  data-panel="showAbout"
                  onClick={this.handleClick}
                >
                  About
                </button>
              </div>
              <div className="panel__button">
                <button
                  className="btn panel__button--services"
                  data-panel="showService"
                  onClick={this.handleClick}
                >
                  Services
                </button>
              </div>
              <div className="panel__button">
                <button
                  className="btn panel__button--contact"
                  data-panel="showContact"
                  onClick={this.handleClick}
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="description">
              {this.state.showAbout && <AboutPanel />}
              {this.state.showService && (
                <PanelDescription
                  title="What We'll Provide"
                  description="Voluptas qui doloremque maxime mollitia aut quos. Assumenda ab culpa ipsam impedit ut. At neque quia quia quo consequatur veniam. Magnam quis quae voluptate hic sint aliquid nemo. Qui eum aut vel similique. Est sapiente voluptatem enim excepturi."
                />
              )}
              {this.state.showContact && <ContactPanel />}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
