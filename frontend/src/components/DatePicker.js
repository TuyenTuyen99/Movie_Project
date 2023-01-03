const { CalendarContainer } = require("react-datepicker");

const datePickerContainer = ({ className, children }) => {
  return (
    <div style={{ padding: "5px", background: "#5521B5", color: "#fff", borderRadius: "5px"}}>
      <CalendarContainer className={className}>
        <div style={{ position: "relative" }}>{children}</div>
      </CalendarContainer>
    </div>
  );
};

export default datePickerContainer;