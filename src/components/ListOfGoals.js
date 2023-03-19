import React from "react";

const ListOfGoals = ({goals}) => {
    return (
      <ul>
        {goals.map(({ goal, by} ,i) => (
        <li key={i}>
            <p>My goal is to {goal}, by {by}.</p>
          </li>
        ))}
      </ul>
    );
}

export default ListOfGoals;