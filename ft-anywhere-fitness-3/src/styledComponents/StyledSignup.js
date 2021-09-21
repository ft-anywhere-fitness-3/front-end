import styled from "styled-components";

const StyledSignup = styled.div`
    ${'' /* text-align: center; */}
display: flex;
justify-content: center;

  .container {
    width: 35%;
    box-sizing: border-box;
  position: relative;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px 0 30px 0;
  }

  input,
.btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none; 
}

input:hover,
.btn:hover {
  opacity: 1;
}

.checkbox-div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.col {
  float: left;
  width: 75%;
  margin: auto;
  padding: 0 50px;
  margin-top: 6px;
  text-align: left;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

} 
`

export default StyledSignup;