import {React, Component} from 'react';
import './Quote.css';

class Quote extends Component {
  
  render () {
    return (
      <div className="Quote">
          <span className={this.props.start}>“</span>
          <p className={this.props.para}>I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.</p>
          <p className="writer">Hideo Kojima</p>
      </div>
      )

  }
}

export default Quote;
