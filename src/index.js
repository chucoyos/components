import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
          <div className="ui divider"></div>
          <ApprovalCard>
            Are you Shure?
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail 
              author={faker.name.firstName()} 
              timeAgo={faker.date.weekday()} 
              phrase={faker.hacker.phrase()} 
              avatar={faker.image.avatar()} 
            />
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail 
              author={faker.name.firstName()} 
              timeAgo={faker.date.weekday()} 
              phrase={faker.hacker.phrase()} 
              avatar={faker.image.avatar()} 
            />
          </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'))



