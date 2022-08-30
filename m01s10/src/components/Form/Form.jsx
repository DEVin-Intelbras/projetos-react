import PropTypes from "prop-types";

export const Form = ({ children }) => {
  return <form onSubmit={(event) => event.preventDefault()}>{children}</form>;
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
};
