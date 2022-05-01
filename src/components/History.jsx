import { nanoid } from "nanoid";

import HistoryLink from "./HistoryLink";

const History = (props) => {
  const { history } = props;

  return (
    <div className="history">
      <div className="history-box">
        {history.map((item) => (
          <HistoryLink key={nanoid()} {...item} {...props} />
        ))}
      </div>
    </div>
  );
};

export default History;
