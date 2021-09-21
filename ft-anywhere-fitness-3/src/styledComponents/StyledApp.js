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

.signup-button.md-button {
  margin-top: -16px;
  width: 115px;
}

 .items-list-wrapper {
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.item-card {
  width: 250px;
  margin: 0 10px 32px;
  cursor: pointer;
}

${'' /*.item-card p {
  margin: 0 0 4px;
  text-align: left;
  color: #595959;
}

.items-list-image {
  width: 100%;
  border: 1px solid lightgray;
}

.item-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.item-header {
  display: flex;
}

.item-header h2,
.item-header h4 {
  color: #1c5d76;
  margin: 0;
}

.item-header h4 {
  margin-top: 16px;
}

.item-sub-nav {
  border-bottom: 1px solid #a1d5d4;
  justify-content: center;
}

.item-sub-nav a {
  color: #a5a5a5;
  text-decoration: none;
  padding: 12px;
}

.item-sub-nav a.active {
  color: #1c5d76;
  font-weight: bold;
}

.item-sub-nav a:first-of-type {
  margin-right: 32px;
}

.item-card a {
  text-decoration: none;
}

.image-wrapper {
  width: 50%;
  display: flex;
  justify-content: flex-start;
}

.item-title-wrapper {
  width: 50%;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}

.item-details {
  max-width: 720px;
  margin: 32px auto;
} */}

/* material design button */
.md-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
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

`
export default StyledApp;