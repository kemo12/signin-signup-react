import { React } from "react";
import "./Quote.css";

function Quote(props) {
  return (
    <div className="Quote">
      <span className={props.start}>“</span>
      <p className={props.para}>
        I always observe the people who pass by when I ride an escalator. I"ll
        never see most of them again, so I imagine a lot of things about their
        lives... about the day ahead of them.
      </p>
      <p className="writer">Hideo Kojima</p>
    </div>
  );
}

export default Quote;
