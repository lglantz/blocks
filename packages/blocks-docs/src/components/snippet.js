import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import ReactDOMServer from 'react-dom/server'
import { find } from 'lodash'
import formatXml from 'xml-formatter'
import SyntaxHighlighter from 'react-syntax-highlighter';

import reqUtil from '../js_utils/request'

import './syntax.css';

const { Tabs, RadioTabItem } = require('blocks-react').Tabs;


class Snippet extends React.Component {
  constructor(props) {
    super(props);

    this.views = ['Preview', 'React Code', 'HTML Code'];
    this.reactCode = '';

    this.state = {
      currentView: this.views[0],
      scriptLoaded: false
    };
  }

  componentDidMount() {
    reqUtil.get(this.props.exampleURL)
      .then((result) => {
        this.reactCode = result;
        this.setState({ scriptLoaded: true });
      });
  }

  render() {
    return (
      <div className="snippet-container">
        <Tabs>
          {
            this.views.map(view => (
              <RadioTabItem
                key={`${view}-${this.props.name}`}
                name={`snippet-views-${this.props.name}`}
                value={view}
                text={view}
                isChecked={view === this.state.currentView}
                onChange={() => this.setState({ currentView: view })}
              />
            ))
          }
        </Tabs>
        <div className="snippet">
          { this.state.currentView === this.views[0] && // preview
            <div className="snippet-preview">
              { this.props.example }
            </div>
          }
          { this.state.currentView === this.views[1] &&  // react
            <div className="snippet-react">
              <SyntaxHighlighter
                language="jsx"
              >
                { this.reactCode }
              </SyntaxHighlighter>
            </div>
          }
          { this.state.currentView === this.views[2] && // html
            <div className="snippet-html">
              <SyntaxHighlighter
                language="html"
              >
                { formatXml(ReactDOMServer.renderToStaticMarkup(this.props.example)) }
              </SyntaxHighlighter>
            </div>
          }
        </div>
      </div>
    );
  }
}

Snippet.propTypes = {
  name: PropTypes.string.isRequired, // must match a code example filename from code_examples/
  exampleURL: PropTypes.string.isRequired // comes from GraphQL query below
};

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: {
          sourceInstanceName: { eq: "code_examples" }
        }) {
          edges {
            node {
              extension
              name
              publicURL
              dir
            }
          }
        }
      }
    `}
    render={(data) => {
      const exampleFile = find(data.allFile.edges, ['node.name', props.name]);
      if (!exampleFile) return null;
      return (
        <Snippet
          name={props.name}
          example={props.example}
          exampleURL={exampleFile.node.publicURL}
        />
      );
    }}
  />
)
