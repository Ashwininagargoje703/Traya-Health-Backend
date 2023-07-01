const { connect } = require("mongoose");

const connection = () => {
  return connect(`mongodb://localhost:27017/traya_review_system`);
};

module.exports = connection;
