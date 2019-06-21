import React from "react"

const { Tabs } = require('blocks-react');
const { Accordion } = require('blocks-react');

const FOUR_RANGE = [0, 1, 2, 3];


class TabsNestedExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNestedTab: 0,
      activeNestedSubTab: 0
    };
  }

  render() {
    return (
      <div>
        <Accordion
          id="blx_ex_grandparent_1"
          trigger={<span className="blx-h5">Grandparent</span>}
          open
        >
          <Tabs vertical>
            {
              FOUR_RANGE.map(i => (
                <Tabs.RadioItem
                  name="vertical-tabs-nested"
                  key={`vertical-tabs-nested-${i}`}
                  checked={i === this.state.activeNestedTab}
                  onChange={(evt) => this.setState({ activeNestedTab: i })}
                  text={`Parent ${i + 1}`}
                >
                  {
                    FOUR_RANGE.map(j => (
                      <Tabs.RadioSubItem
                        name="vertical-subtabs-nested"
                        key={`vertical-subtabs-nested-${j}`}
                        visible={i === this.state.activeNestedTab}
                        checked={i === this.state.activeNestedTab && j === this.state.activeNestedSubTab}
                        onChange={(evt) => this.setState({ activeNestedSubTab: j })}
                        text={`Child ${j + 1}`}
                      />
                    ))
                  }
                </Tabs.RadioItem>
              ))
            }
          </Tabs>
        </Accordion>
        <Accordion
          id="blx_ex_grandparent_2"
          trigger={<span className="blx-h5">Grandparent 2</span>}
        >
          <Tabs vertical>
            {
              FOUR_RANGE.map(i => (
                <Tabs.LinkItem
                  key={`vertical-link-tabs-nested-${i}`}
                  active={i === 1}
                  href="#"
                  text={`Parent ${i + 1}`}
                >
                  {
                    FOUR_RANGE.map(j => (
                      <Tabs.LinkSubItem
                        key={`vertical-link-subtabs-nested-${j}`}
                        visible={i === 1}
                        active={j === 3}
                        href="#"
                        text={`Child ${j + 1}`}
                      />
                    ))
                  }
                </Tabs.LinkItem>
              ))
            }
          </Tabs>
        </Accordion>
      </div>
    );
  }
}

export default TabsNestedExample;
