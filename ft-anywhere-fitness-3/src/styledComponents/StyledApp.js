import styled from "styled-components";

const StyledApp = styled.div`
html,
body,
#root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.App {
  font-family: sans-serif;
  text-align: center;
  height: 100%;
  width: 100%;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid #efefef;
  margin-bottom: 32px;
}

nav a {
  text-decoration: none;
}

.nav-links {
  display: flex;
  justify-content: space-between;
}

.nav-links a {
  text-decoration: none;
  color: #1c5d76;
  font-weight: bold;
  margin-right: 8px;
}

.nav-links a:last-of-type {
  margin-right: 0;
}

.nav-links a.active {
  border-bottom: 1px solid #1c5d76;
}

.title-header {
  color: #1c5d76;
}

.home-wrapper {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.home-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}
.login-button.md-button,
.signup-button.md-button {
  margin-top: -16px;
  width: 115px;
}

 .classes-list-wrapper {
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.class-card {
  width: 250px;
  margin: 25px 15px;
  cursor: pointer;
  text-align: left;
  border-top: .1rem solid;
}

.container {
  width: 35%;
  box-sizing: border-box;
  position: relative;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px 0 30px 0;
  }

  input,select {
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

input:hover {
  opacity: 1;
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
/* material design button */
.md-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 115px;
  margin: 0 8px;
  border: none;
  border-radius: 2px;
  padding: 0 16px;
  min-width: 64px;
  height: 36px;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: #fff;
  background-color: #1c5d76;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  font-family: "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui,
    -apple-system;
  font-size: 14px;
  font-weight: 500;
  line-height: 36px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.md-button:hover,
.md-button:focus {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

.md-button:active {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}

.md-button:disabled {
  color: rgba(0, 0, 0, 0.38);
  background-color: rgba(0, 0, 0, 0.12);
  box-shadow: none;
  cursor: initial;
}

.md-button::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: currentColor;
  opacity: 0;
  transition: opacity 0.2s;
}

.md-button:hover::before {
  opacity: 0.12;
}

.md-button:focus::before {
  opacity: 0.2;
}

.md-button:active::before {
  opacity: 0.32;
}

.md-button:disabled::before {
  opacity: 0;
}

.md-button::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 18px;
  border-radius: 50%;
  padding: 50%;
  width: 32px;
  height: 32px;
  background-color: currentColor;
  opacity: 0;
  transform: translate(-50%, -50%) scale(1);
  transition: opacity 1s, transform 0.5s;
}

.md-button:active::after {
  opacity: 0.4;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0s;
}

.md-button:disabled::after {
  opacity: 0;
}

#delete {
  background-color: #df4759;
}

.modal {
  display:flex;
  flex-flow: column;
  align-items: center;
}

.errMsg {
  font-weight: bolder;
  color: #df4759;
}

.header-box {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.add {
  color:green;
}

.punchPasses {
  margin-top: 50px;
  width:100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

`
export default StyledApp;