import React, { Component } from 'react';
import Bar from './Bar';

class Chart extends Component {
  componentWillMount() {
    this.setState({
      transformedGrades: this.props.rawGrades.map(studentObj => {
        return {
          name: studentObj.name,
          score: studentObj.score * 5,
          student_id: studentObj.student_id
        }
      }) // end of map
    }); // end of setState
  }
  render() {
    return (
      <div className="chart-container">
        <h1>React.js Final Grades</h1>
        <div className="chart">
          {this.state.transformedGrades.map(studentObj => {
            return <Bar
                      key={studentObj.student_id}
                      grade={studentObj.score} />
          })}
        </div>
      </div>
    );
  }
}

export default Chart;
