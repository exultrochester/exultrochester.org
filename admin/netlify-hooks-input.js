/**
 * To update netlify-hooks.js, edit netlify-hooks-input.js and then
 * copy-paste the entire file into Babel:
 * 
 * https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.18.1&externalPlugins=&assumptions=%7B%7D
 * 
 * Then paste the result into netlify-hooks.js
 * AND make two replacements:
 * 
 * React.createElement( -> h(
 * ___ -> createClass(
 */

const React = { createElement: h };

console.log('netlify-hooks loaded');
console.log('Netlify:', CMS);

const safeStringify = (value, orThis='(JSON-dump error)') => {
  try {
    return JSON.stringify(value, null, 2);
  } catch (err) {
    console.warn('Unable to dump JSON', value, err);
    return orThis;
  }
}

const JsonDump = ({ name, value }) => {
  console.log(`Dumping JSON: ${name}`, value);
  return (
    <div>
      {name && (<h2>{name}</h2>)}
      <code><pre>{safeStringify(value)}</pre></code>
    </div>
  )
};

const PostPreview = (props) => {
  const { entry, widgetFor } = props;
  console.log('Rendering PostPreview', props);
  const title = entry.getIn(['data', 'title']);
  return (
    <div>
      <JsonDump name="Entry" value={entry} />
      <hr />
      <div className="text">
        {widgetFor('body')}
      </div>
    </div>
  );
}

const ConferencePreview = (props) => {
  const { entry, widgetFor } = props;
  console.log('Rendering PostPreview', props);
  return (
    <div>
      <JsonDump name="Entry" value={entry} />
    </div>
  );
}

CMS.registerPreviewTemplate("page", PostPreview);
CMS.registerPreviewTemplate("conference", ConferencePreview);

const simpleIncludeComponent = {
  // Internal id of the component
  id: "simple-include",
  // Visible label
  label: "Include Template",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: 'name',
      label: 'Name',
      widget: 'string'
    },
  ],
  // Regex pattern used to search for instances of this block in the markdown document.
  // Patterns are run in a multline environment (against the entire markdown document),
  // and so generally should make use of the multiline flag (`m`). If you need to capture
  // newlines in your capturing groups, you can either use something like
  // `([\S\s]*)`, or you can additionally enable the "dot all" flag (`s`),
  // which will cause `(.*)` to match newlines as well.
  //
  // Additionally, it's recommended that you use non-greedy capturing groups (e.g.
  // `(.*?)` vs `(.*)`), especially if matching against newline characters.
   pattern: /^{% include (['"]?)(.*?)\1 %}$/m,
  // Given a RegExp Match object
  // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#return_value),
  // return an object with one property for each field defined in `fields`.
  //
  // This is used to populate the custom widget in the markdown editor in the CMS.
  fromBlock: function (match) {
    return {
      name: match[2],
    };
  },
  // Given an object with one property for each field defined in `fields`,
  // return the string you wish to be inserted into your markdown.
  //
  // This is used to serialize the data from the custom widget to the
  // markdown document
  toBlock: ({ name }) => `{% include '${name}' %}`,
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: ({ name }) => {
    if (name === 'speakers') {
      return <div>Speakers Go Here</div>
    }
    if (name === 'register-link') {
      return <button>Go Register!</button>
    }
    if (name === 'register-links') {
      return (
        <div>
          <button>Go Register (in-person)!</button>
          <button>Go Register (online only)!</button>
        </div>
      )
    }
    return (
      <p>
        Include: {name}
      </p>
    );
  }
};

const complexIncludeComponent = {
  // Internal id of the component
  id: "complex-include",
  // Visible label
  label: "Include Template (Complex)",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: 'name',
      label: 'Name',
      widget: 'string'
    },
    {
      name: 'more',
      label: 'More',
      widget: 'string'
    }
  ],
  // Regex pattern used to search for instances of this block in the markdown document.
  // Patterns are run in a multline environment (against the entire markdown document),
  // and so generally should make use of the multiline flag (`m`). If you need to capture
  // newlines in your capturing groups, you can either use something like
  // `([\S\s]*)`, or you can additionally enable the "dot all" flag (`s`),
  // which will cause `(.*)` to match newlines as well.
  //
  // Additionally, it's recommended that you use non-greedy capturing groups (e.g.
  // `(.*?)` vs `(.*)`), especially if matching against newline characters.
   pattern: /^{% include (['"]?)(.*?)\1( (.*?)) %}$/m,
  // Given a RegExp Match object
  // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#return_value),
  // return an object with one property for each field defined in `fields`.
  //
  // This is used to populate the custom widget in the markdown editor in the CMS.
  fromBlock: function (match) {
    console.log('Matching include:', JSON.stringify(match));
    return {
      name: match[2],
      more: match[4],
    };
  },
  // Given an object with one property for each field defined in `fields`,
  // return the string you wish to be inserted into your markdown.
  //
  // This is used to serialize the data from the custom widget to the
  // markdown document
  toBlock: ({ name, more = '' }) => `{% include '${name}'${more} %}`,
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: ({ name, more = '' }) => {
    if (name === 'speakers') {
      return <div>Speakers Go Here</div>
    }
    if (name === 'register-link') {
      return <button>Go Register!</button>
    }
    if (name === 'register-links') {
      return (
        <div>
          <button>Go Register (in-person)!</button>
          <button>Go Register (online only)!</button>
        </div>
      )
    }
    return (
      <p>
        Include: {name}{more && `, ${more}`}
      </p>
    );
  }
};

CMS.registerEditorComponent(simpleIncludeComponent)
CMS.registerEditorComponent(complexIncludeComponent)