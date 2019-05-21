import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"
import ExampleSection from "../../components/examples"
import ColorCard from "../../components/colorcard"

const ColorPage = () => (
  <Layout>
    <Header
      title="Colors & Shadows"
    >
      Colors are identified first by type (action, ui, support, brand)  and then with a number identifier which suggests how to use that swatch.
    </Header>
    <ExampleSection>
      <div className="color-container">
        <div className="color-grid color-grid-bg">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="color-grid">
          <div>
            <h3 className="blx-with-margin">00</h3>
            <p>Common uses:</p>
            <ul>
              <li>Default</li>
              <li>Normal</li>
            </ul>
          </div>
          <div>
            <h3 className="blx-with-margin">01</h3>
            <p>Common uses:</p>
            <ul>
              <li>Hover</li>
            </ul>
          </div>
          <div>
            <h3 className="blx-with-margin">02</h3>
            <p>Common uses:</p>
            <ul>
              <li>Active</li>
            </ul>
          </div>
          <div>
            <h3 className="blx-with-margin">03</h3>
            <p>Common uses:</p>
            <ul>
              <li>Disabled</li>
              <li>Shadow</li>
            </ul>
          </div>
        </div>

        <h3 className="blx-with-margin">Action Colors</h3>
        <div className="l-flex-horizontal">
          <p className="blx-with-margin">
            Only use to indicate which interface elements are actionable.
          </p>
        </div>
        <div className="color-grid">
          <ColorCard
            name="Focus"
            value="#49A1FF"
          />
          <div />
          <div />
          <div />
        </div>

        <div className="color-grid">
          <ColorCard
            name="Primary-00"
            value="#009F6F"
          />
          <ColorCard
            name="Primary-01"
            value="#008B61"
          />
          <ColorCard
            name="Primary-02"
            value="#00704F"
          />
          <ColorCard
            name="Primary-03"
            value="rgba(0, 159, 111, 0.35)"
            displayValue="#009F6F"
            opacity="35%"
          />
        </div>

        <div className="color-grid">
          <ColorCard
            name="Secondary-00"
            value="#FFFFFF"
          />
          <ColorCard
            name="Secondary-01"
            value="#ECF5F1"
          />
          <ColorCard
            name="Secondary-02"
            value="#D5F0E5"
          />
          <ColorCard
            name="Secondary-03"
            value="rgba(255, 255, 255, 0.35)"
            displayValue="#FFFFFF"
            opacity="35%"
          />
        </div>

        <h3 className="blx-with-margin">UI Colors</h3>
        <div className="l-flex-horizontal">
          <p className="blx-with-margin">
            Use for non-interactive text and background interface elements.
          </p>
        </div>
        <div className="color-grid">
          <ColorCard
            name="Shadow"
            value="rgba(170, 183, 178, 0.6)"
            displayValue="#AAB7B2"
            opacity="60%"
          />
          <div />
          <div />
          <div />
        </div>

        <div className="color-grid">
          <ColorCard
            name="Light-00"
            value="#F6F8F6"
          />
          <ColorCard
            name="Light-01"
            value="#D9E1E0"
          />
          <ColorCard
            name="Light-02"
            value="#AAB7B2"
          />
          <div />
        </div>

        <div className="color-grid">
          <ColorCard
            name="Dark-00"
            value="#2B3836"
          />
          <ColorCard
            name="Dark-01"
            value="#505958"
          />
          <ColorCard
            name="Dark-02"
            value="#7C8C88"
          />
          <ColorCard
            name="Dark-03"
            value="rgba(43, 56, 54, 0.35)"
            displayValue="#2B3836"
            opacity="35%"
          />
        </div>

        <h3 className="blx-with-margin">Support Colors</h3>
        <div className="l-flex-horizontal">
          <p className="blx-with-margin">
            Use to draw attention to a state or change in the application.
          </p>
        </div>

        <div className="color-grid">
          <ColorCard
            name="Danger-00"
            value="#EB5534"
          />
          <ColorCard
            name="Danger-01"
            value="#DB5030"
          />
          <ColorCard
            name="Danger-02"
            value="#AD4626"
          />
          <ColorCard
            name="Danger-03"
            value="rgba(235, 85, 52, 0.35)"
            displayValue="#EB5534"
            opacity="35%"
          />
        </div>

        <div className="color-grid">
          <ColorCard
            name="Warning"
            value="#FDB100"
          />
          <div />
          <div />
          <div />
        </div>

        <div className="color-grid">
          <ColorCard
            name="Success"
            value="#39CF94"
          />
          <div />
          <div />
          <div />
        </div>

        <div className="color-grid">
          <ColorCard
            name="Information"
            value="#6F6BF8"
          />
          <div />
          <div />
          <div />
        </div>

        <h3 className="blx-with-margin">Brand Colors</h3>
        <div className="l-flex-horizontal">
          <p className="blx-with-margin">
            Use sparingly for emphasis, large headings, and to grab attention.
          </p>
        </div>
        <div className="color-grid">
          <ColorCard
            name="Brand-00"
            value="#A2FFBB"
          />
          <ColorCard
            name="Brand-01"
            value="#00FF44"
          />
          <div />
          <div />
        </div>
      </div>
    </ExampleSection>
  </Layout>
);

export default ColorPage;
