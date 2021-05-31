import React from "react";
import "./App.scss";
import COURSES_DATA from "./data/courses.data";
import SUBJECTS_DATA from "./data/subjects.data";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: COURSES_DATA,
      hoursPerWeek: 0,
      completedCourses: [],
      totalHours: 0,
      completedHours: 0,
      totalTime: 0,
    };
  }

  handleInputChange = (event) => {
    this.setState({
      hoursPerWeek: event.target.value,
      totalTime: this.getTotalTime(
        this.state.totalHours,
        parseInt(event.target.value)
      ),
    });
  };

  toggleCourseClick = (id) => {
    const { completedCourses, completedHours } = this.state;
    const newCompletedState = completedCourses.includes(id)
      ? completedCourses.filter((courseId) => courseId !== id)
      : [...completedCourses, id];
    const thisCourse = COURSES_DATA.find((course) => course.id === id);

    const newCompletedHours = completedCourses.includes(id)
      ? completedHours - thisCourse.length
      : completedHours + thisCourse.length;

    this.setState({
      completedCourses: newCompletedState,
      completedHours: newCompletedHours,
    });
  };

  getTotalTime = (totalHours, hoursPerWeek) => {
    const totalWeeks = totalHours / hoursPerWeek;
    let totalTimeValue = 0;
    let offsetYears;
    let offsetMonths;
    let offsetWeeks;

    if (!hoursPerWeek || hoursPerWeek === 0) {
      return 0;
    }

    if (totalWeeks > 52) {
      let countYears = totalWeeks / 52;

      if (countYears >= 1) {
        totalTimeValue = Math.floor(countYears) + " v ";
      }
      offsetYears = countYears % 1;
    } else {
      offsetYears = totalWeeks / 52;
    }

    if (offsetYears > 0) {
      let countMonths = offsetYears * 12;
      if (countMonths >= 1) {
        totalTimeValue = totalTimeValue
          ? totalTimeValue + Math.floor(countMonths) + " kk "
          : Math.floor(countMonths) + " kk ";
      }
      offsetMonths = countMonths % 1;
    }

    if (offsetMonths > 0) {
      let countWeeks = offsetMonths * 4.3482;
      if (countWeeks >= 1) {
        totalTimeValue = totalTimeValue
          ? totalTimeValue + Math.floor(countWeeks) + " vko "
          : Math.floor(countWeeks) + " vko ";
      }
      offsetWeeks = countWeeks % 1;
    }

    if (offsetWeeks > 0) {
      let countDays = offsetWeeks * 7;
      if (countDays >= 1) {
        totalTimeValue = totalTimeValue
          ? totalTimeValue + Math.floor(countDays) + " pv "
          : Math.floor(countDays) + " pv ";
      }
    }

    return totalTimeValue;
  };

  componentDidMount() {
    let totalHours = 0;
    this.state.courses.map((course) => (totalHours += course.length));
    this.setState({ totalHours: totalHours });
  }

  render() {
    const { hoursPerWeek, totalHours, totalTime, completedHours } = this.state;
    const maxCourses = 9;
    return (
      <div className="App">
        <div className="study-counter">
          <div className="study-counter__header">
            <h1>Opintolaskuri opiskelijalle</h1>
            <span>
              Kirjoita kenttään kuinka monta tuntia viikossa opiskelet
            </span>
          </div>
          <div className="study-counter__content">
            <input
              type="number"
              className="study-counter__input"
              onChange={this.handleInputChange}
            ></input>
            <div className="study-counter__summary">
              <div>
                <span>Tunteja viikossa</span>
                <span>{hoursPerWeek}</span>
              </div>
              <div>
                <span>Kurssitunnit</span>
                <span>{totalHours}</span>
              </div>
              <div>
                <span>Opiskelujen kokonaisaika</span>
                <span>{totalTime}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="subjects">
          <div className="subjects__header">
            <h1>Aineet</h1>
            <span>Klikkaa kurssia asettaaksesi sen suoritetuksi</span>
          </div>
          <div className="subjects__content">
            <div className="subjects__summary">
              <div>
                <span>Suoritettu (tunteja)</span>
                <span>{completedHours}</span>
              </div>
              <div>
                <span>Jäljellä</span>
                <span>
                  {this.getTotalTime(
                    totalHours - completedHours,
                    hoursPerWeek
                  ) === 0
                    ? "Kaikki tehty!"
                    : this.getTotalTime(
                        totalHours - completedHours,
                        hoursPerWeek
                      )}
                </span>
              </div>
            </div>

            <div></div>
            <div className="subjects__data">
              {SUBJECTS_DATA.map((subject) => {
                let subjectCourses = COURSES_DATA.filter(
                  (course) => course.subject === subject.identifier
                );
                let offSetCourses = Array.from(
                  { length: maxCourses - subjectCourses.length },
                  (value, index) => ({ id: "empty" + index, name: "empty" })
                );
                let courseRow = [...subjectCourses, ...offSetCourses];

                return (
                  <div key={subject.identifier} className="subject">
                    <div className="subject__header">{subject.identifier}</div>
                    <div className="subject__courses">
                      {courseRow.map((course, index) => (
                        <div
                          onClick={
                            course.name !== "empty"
                              ? this.toggleCourseClick.bind(null, course.id)
                              : null
                          }
                          key={course.id}
                          className={`subject__course ${
                            course.name === "empty"
                              ? "subject__course--empty"
                              : "subject__course--available"
                          } ${
                            this.state.completedCourses.includes(course.id)
                              ? "state-PASSED"
                              : ""
                          }`}
                        >
                          {index + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
