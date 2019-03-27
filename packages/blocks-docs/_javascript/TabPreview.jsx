const React = require('react');
const ReactDOM = require('react-dom');

const getPreviewComponent = require('./common/getPreviewComponent.jsx');

const Tabs = require('blocks-react').Tabs.Tabs;
const RadioTabItem = require('blocks-react').Tabs.RadioTabItem;
const RadioSubTabItem = require('blocks-react').Tabs.RadioSubTabItem;
const LinkTabItem = require('blocks-react').Tabs.LinkTabItem;
const LinkSubTabItem = require('blocks-react').Tabs.LinkSubTabItem;

const Accordion = require('blocks-react').Accordion;

var FOUR_RANGE = [0,1,2,3];

class TabPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabHorizontal: 0,
      activeTabVertical: 0,
      activeNestedTab: 0,
      activeNestedSubTab: 0
    };
  }

  render() {
    return(
      <div>
        { getPreviewComponent('Horizontal',
            <Tabs>
              {
                FOUR_RANGE.map(i => (
                  <RadioTabItem
                    name="horizontal-tabs"
                    key={`horizontal-tabs-${i}`}
                    isChecked={i === this.state.activeTabHorizontal}
                    onChange={(evt) => this.setState({ activeTabHorizontal: i })}
                    text={`Tab ${i + 1}`}
                  />
                ))
              }
            </Tabs>
        ) }
        { getPreviewComponent('Horizontal disabled',
            <Tabs>
              {
                FOUR_RANGE.map(i => (
                  <RadioTabItem
                    name="horizontal-disabled-tabs"
                    key={`horizontal-disabled-tabs-${i}`}
                    isChecked={i === 0}
                    onChange={() => {}}
                    text={`Disabled Tab ${i + 1}`}
                  />
                ))
              }
            </Tabs>
        ) }
        { getPreviewComponent('Link Tabs',
            <Tabs>
              {
                FOUR_RANGE.map(i => (
                  <LinkTabItem
                    name="link-tabs"
                    key={`link-tabs-${i}`}
                    isActive={i === 1}
                    href="#"
                    text={`Link Tab ${i + 1}`}
                  />
                ))
              }
            </Tabs>
        ) }
        { getPreviewComponent('Vertical',
            <Tabs isVertical>
              {
                FOUR_RANGE.map(i => (
                  <RadioTabItem
                    name="vertical-tabs"
                    key={`vertical-tabs-${i}`}
                    isChecked={i === this.state.activeTabVertical}
                    onChange={(evt) => this.setState({ activeTabVertical: i })}
                    text={`Tab ${i + 1}`}
                  />
                ))
              }
            </Tabs>
        ) }
        { getPreviewComponent('Nested tabs',
            <div style={{ display: 'inline-block' }}>
              <Accordion
                id="blx_ex_grandparent_1"
                trigger={<span className="blx-h5">Grandparent</span>}
                open
              >
                <Tabs isVertical>
                  {
                    FOUR_RANGE.map(i => (
                      <RadioTabItem
                        name="vertical-tabs-nested"
                        key={`vertical-tabs-nested-${i}`}
                        isChecked={i === this.state.activeNestedTab}
                        onChange={(evt) => this.setState({ activeNestedTab: i })}
                        text={`Parent ${i + 1}`}
                      >
                        {
                          FOUR_RANGE.map(j => (
                            <RadioSubTabItem
                              name="vertical-subtabs-nested"
                              key={`vertical-subtabs-nested-${j}`}
                              isVisible={i === this.state.activeNestedTab}
                              isChecked={i === this.state.activeNestedTab && j === this.state.activeNestedSubTab}
                              onChange={(evt) => this.setState({ activeNestedSubTab: j })}
                              text={`Child ${j + 1}`}
                            />
                          ))
                        }
                      </RadioTabItem>
                    ))
                  }
                </Tabs>
              </Accordion>
              <Accordion
                id="blx_ex_grandparent_2"
                trigger={<span className="blx-h5">Grandparent 2</span>}
              >
                <Tabs isVertical>
                  {
                    FOUR_RANGE.map(i => (
                      <LinkTabItem
                        key={`vertical-link-tabs-nested-${i}`}
                        isActive={i === 1}
                        href="#"
                        text={`Parent ${i + 1}`}
                      >
                        {
                          FOUR_RANGE.map(j => (
                            <LinkSubTabItem
                              key={`vertical-link-subtabs-nested-${j}`}
                              isVisible={i === 1}
                              isActive={j === 3}
                              href="#"
                              text={`Child ${j + 1}`}
                            />
                          ))
                        }
                      </LinkTabItem>
                    ))
                  }
                </Tabs>
              </Accordion>
            </div>
        )}
      </div>
  )};
}

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<TabPreview />, rootElement);
