import React, { Component } from "react";
import styles from "./ui.css";

/** Theme Componenet */
export const theme = {
  textPrimary: "#FFFFFF",
  textSecondary: "#6a668e",
  white: "#ffffff",
  grey: "#6a668e",
  blue: "#29cae4",
  green: "#7ffacc",
  yellow: "#fdb640",
  red: "#e85e5e",
  pink: "#e74b86"
};

/** Main Component */
export const Main = props => {
  return <div className={styles.Main}>{props.children}</div>;
};

/** Card Component */
export const Card = props => {
  /** Manage clickable cards */
  if (props.onClick != Card.defaultProps.onClick) {
    var _cardClasses =
      styles.Card + " " + styles.cursor + " " + props.className;
  } else {
    var _cardClasses = styles.Card + " " + props.className;
  }
  return (
    <div className={_cardClasses} onClick={() => props.onClick()}>
      {DisplayCardIcon(props.icon)}
      {DisplayCardContent(props)}
      {props.children}
    </div>
  );
};
Card.defaultProps = {
  className: "",
  title: null,
  description: null,
  onClick: () =>
    _console("Add an onClick parameter to your card to handle click events.")
};

function DisplayCardIcon(icon) {
  if (icon) {
    var _classes = styles.inline_block + " " + styles.pright_15;
    return (
      <div className={_classes}>
        <img src={icon} width="40" height="40"></img>
      </div>
    );
  }
}
function DisplayCardContent(props) {
  if (props.title && props.description) {
    return (
      <div className={styles.inline_block + " " + styles.align_middle}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    );
  } else if (props.title) {
    return (
      <div className={styles.blockText + " " + styles.align_middle}>
        <h2>{props.title}</h2>
      </div>
    );
  } else if (props.description) {
    return (
      <div className={styles.blockText + " " + styles.align_middle}>
        <p>{props.description}</p>
      </div>
    );
  }
}

/** Tables Component includes (Table and TableRow) */
export const Table = props => {
  var _className = props.className + " " + styles.mdf_table;
  return <table className={_className}>{props.children}</table>;
};
Table.defaultProps = {
  className: ""
};
export class TableRow extends Component {
  DisplayColumns() {
    if (this.props.data.length == 0) {
      console.log(
        "Make sure to fill in the data props to populate your table."
      );
    }

    // We check if the row is the head of the table or not
    if (this.props.head === true) {
      return this.props.data.map((prop, key) => {
        return <th key={key}>{prop}</th>;
      });
    } else {
      return this.props.data.map((prop, key) => {
        return <td key={key}>{prop}</td>;
      });
    }
  }
  render() {
    /** Add cursor for clickable rows */
    if (this.props.onClick != TableRow.defaultProps.onClick) {
      var _rowClasses = styles.cursor + " " + this.props.className;
    } else {
      var _rowClasses = this.props.className;
    }
    return (
      <tr
        className={_rowClasses}
        onClick={e => StopPropagation(e, this.props.onClick)}
      >
        {this.DisplayColumns()}
      </tr>
    );
  }
}
TableRow.defaultProps = {
  data: [],
  head: false,
  onClick: () =>
    _console("Use the onClick parameter to this row to call a specific action.")
};

/** Text Component */
export const Text = props => {
  var _className = props.className;
  var _lineBreak = "";
  // Manage bold class
  if (props.bold) {
    _className = _className + " " + styles.bold;
  }

  // Manage italic class
  if (props.italic) {
    _className = _className + " " + styles.italic;
  }

  // Manage smallcaps class
  if (props.smallcaps) {
    _className = _className + " " + styles.smallcaps;
  }

  // Manage line break
  if (props.break) {
    _lineBreak = <br />;
  }
  return (
    <React.Fragment>
      <span
        onClick={() => props.onClick()}
        className={_className}
        style={{
          fontSize: props.size,
          color: props.color
        }}
      >
        {props.children}
      </span>
      {_lineBreak}
    </React.Fragment>
  );
};
Text.defaultProps = {
  className: "",
  smallcaps: false,
  size: "13px",
  color: "#FFFFFF",
  onClick: () =>
    _console(
      "Add an onClick parameter to your Text component to handle click events (optional)."
    )
};

/** Badge Component */
export class Badge extends Component {
  // Handle label for badge
  DisplayBadgeContent(_className) {
    const props = this.props;
    if (props.label) {
      return (
        <div className={styles.mdf_badge_container}>
          <div
            style={{
              fontSize: props.size,
              backgroundColor: props.backgroundColor,
              color: props.foregroundColor
            }}
            className={_className}
          >
            {props.children}
          </div>
          <div className={styles.mdf_badge_label + " " + styles.align_middle}>
            <div>{props.label}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            fontSize: props.size,
            backgroundColor: props.backgroundColor,
            color: props.foregroundColor
          }}
          className={_className}
        >
          {props.children}
        </div>
      );
    }
  }

  render() {
    const props = this.props;

    // Check if badge is rounded or not
    if (props.rounded === true) {
      var _shapeClass = styles.br_20;
    } else {
      var _shapeClass = styles.br_2;
    }

    // Create final classes
    var _className =
      props.className + " " + _shapeClass + " " + styles.mdf_badge;
    return this.DisplayBadgeContent(_className);
  }
}
Badge.defaultProps = {
  backgroundColor: "#FFFFFF",
  foregroundColor: "#000000",
  className: "",
  rounded: false,
  size: "12px",
  label: null,
  secondary_label: null
};

/** SidePanel Component */
export const SidePanel = props => {
  if (props.visible == true) {
    return (
      <div
        className={styles.Background_Wrapper}
        onClick={() => props.onClose()}
      >
        <div className={styles.SidePanel} onClick={e => StopPropagation(e)}>
          {DisplaySidePanelContent(props)}
          {props.children}
        </div>
      </div>
    );
  } else {
    return "";
  }
};
SidePanel.defaultProps = {
  onClose: () => _console("Add an onClose props to specify a close action.")
};
function DisplaySidePanelContent(props) {
  if (props.title && props.description) {
    return (
      <React.Fragment>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </React.Fragment>
    );
  } else if (props.title) {
    return <h2>{props.title}</h2>;
  } else if (props.description) {
    return <p>{props.description}</p>;
  }
}

/** Modal Component */
export const Modal = props => {
  if (props.visible == true) {
    return (
      <div
        className={styles.Background_Wrapper}
        onClick={() => props.onClose()}
      >
        <div className={styles.Modal} onClick={e => StopPropagation(e)}>
          {DisplayModalContent(props)}
          {props.children}
        </div>
      </div>
    );
  } else {
    return "";
  }
};
Modal.defaultProps = {
  onClose: () =>
    _console("Add an onClose props to specify a close action for the modal.")
};
function DisplayModalContent(props) {
  if (props.title && props.description) {
    return (
      <React.Fragment>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </React.Fragment>
    );
  } else if (props.title) {
    return <h2>{props.title}</h2>;
  } else if (props.description) {
    return <p>{props.description}</p>;
  }
}

/** Button Component */
export const Button = props => {
  // Select correct color
  var _classButton = styles.white_bg;
  switch (props.color) {
    case "green":
      _classButton = styles.green_bg;
      break;
    case "yellow":
      _classButton = styles.yellow_bg;
      break;
    case "pink":
      _classButton = styles.pink_bg;
      break;
    case "white":
      _classButton = styles.white_bg;
      break;
  }

  // Create final classes variable
  var _className =
    props.className + " " + _classButton + " " + styles.mdf_button;
  return (
    <button className={_className} onClick={() => props.onClick()}>
      {props.children}
    </button>
  );
};
Button.defaultProps = {
  className: "",
  color: "green",
  onClick: () => _console("Add an onClick parameter to your button.")
};

/** Field */
export const Field = props => {
  // Manage className
  var _className = styles.Field + " " + props.className;

  if (props.label) {
    return (
      <div className={_className}>
        <label>{props.label}</label>
        {props.children}
      </div>
    );
  } else {
    return <div className={_className}>{props.children}</div>;
  }
};
Field.defaultProps = {
  className: ""
};

export const CheckBox = props => {
  // Manage className
  var _className = styles.mdf_checkbox_container + " " + props.className;
  return (
    <label className={_className}>
      {props.label}
      <input type="checkbox" name="Checkbox" />
      <span
        className={styles.mdf_checkbox}
        style={{ backgroundColor: props.backgroundColor }}
      >
        <span
          className={styles.mdf_checkmark}
          style={{ borderColor: props.foregroundColor }}
        ></span>
      </span>
    </label>
  );
};
CheckBox.defaultProps = {
  label: "Label",
  backgroundColor: "#2d2950",
  foregroundColor: "#7ffacc"
};

/** Functions */
function StopPropagation(e, _onClick) {
  e.stopPropagation();

  if (_onClick) {
    _onClick();
  }
}
function _console(_msg) {
  console.log(_msg);
}
