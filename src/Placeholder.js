import React from "react";
import { number, node, oneOfType, arrayOf } from "prop-types";

// [...Array(nLines)] = [null, null, ...]
// [...Array(nLines).keys()] = [{}]

const generateLinesBad = (nLines) => {
  return [...Array(nLines)].map((_, index) => (
    <div key={index} className="line" />
  ));
};

const generateLinesBad2 = (nLines) => {
  return [...Array(nLines).keys()].map((index) => (
    <div key={index} className="line" />
  ));
};

// This works
const generateLines = (nLines) => {
  return Array.from({ length: nLines }, (_, i) => (
    <div key={i} className="line" />
  ));
};

// This works
const generateLines2 = (nLines) => {
  let lines = [];
  for (let i = 0; i <= nLines; i++) {
    lines.push(<div key={i} className="line" />);
  }
  return lines;
};

/**
 * A placeholder is used to reserve space for content that soon will appear in a layout.
 */
const Placeholder = ({ children }) => {
  return <div className="ui placeholder">{children}</div>;
};

Placeholder.propTypes = {
  children: oneOfType([arrayOf(node), node]),
};

/**
 * A placeholder can have lines of text
 */
const Line = () => {
  return <div className="line"></div>;
};

/**
 * Header content will have a slightly larger block size from paragraph
 * @param nLines Generates the number of lines passed
 * @returns
 */
const Header = ({ nLines, children }) => {
  return (
    <div className="header">{nLines ? generateLinesBad(nLines) : children}</div>
  );
};
Header.propTypes = {
  nLines: number,
  children: oneOfType([arrayOf(node), node]),
};

/**
 * Paragraphs are used to group lines together
 * @param nLines Generates the number of lines passed
 */
const Paragraph = ({ nLines, children }) => (
  <div className="paragraph">
    {nLines ? generateLinesBad(nLines) : children}
  </div>
);
Paragraph.propTypes = {
  nLines: number,
  children: oneOfType([arrayOf(node), node]),
};

Placeholder.Line = Line;
Placeholder.Paragraph = Paragraph;
Placeholder.Header = Header;

export default Placeholder;
