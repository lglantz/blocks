import React from "react"

import LinkSubTabItem from 'blocks-react/dist/tabs/LinkSubTabItem'
import LinkTabItem from 'blocks-react/dist/tabs/LinkTabItem'
import RadioSubTabItem from 'blocks-react/dist/tabs/RadioSubTabItem'
import RadioTabItem from 'blocks-react/dist/tabs/RadioTabItem'
import Tabs from 'blocks-react/dist/tabs/Tabs'

import Accordion from 'blocks-react/dist/accordion/AccordionSection';

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
                <RadioTabItem
                  name="vertical-tabs-nested"
                  key={`vertical-tabs-nested-${i}`}
                  checked={i === this.state.activeNestedTab}
                  onChange={(evt) => this.setState({ activeNestedTab: i })}
                  text={`Parent ${i + 1}`}
                >
                  {
                    FOUR_RANGE.map(j => (
                      <RadioSubTabItem
                        name="vertical-subtabs-nested"
                        key={`vertical-subtabs-nested-${j}`}
                        visible={i === this.state.activeNestedTab}
                        checked={i === this.state.activeNestedTab && j === this.state.activeNestedSubTab}
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
          <Tabs vertical>
            {
              FOUR_RANGE.map(i => (
                <LinkTabItem
                  key={`vertical-link-tabs-nested-${i}`}
                  active={i === 1}
                  href="#"
                  text={`Parent ${i + 1}`}
                >
                  {
                    FOUR_RANGE.map(j => (
                      <LinkSubTabItem
                        key={`vertical-link-subtabs-nested-${j}`}
                        visible={i === 1}
                        active={j === 3}
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
    );
  }
}

export default TabsNestedExample;
