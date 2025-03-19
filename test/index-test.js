import {expect} from 'chai';
import parseReasoning from '../src/index.js';

describe('parseReasoning', () => {
  it('should parse text with default tags', () => {
    const text = '<think>thought</think> about the problem.';
    const expected = [
      { type: 'reasoning', content: 'thought' },
      { type: 'text', content: 'about the problem.', reasoning_running: false}
    ];
    expect(parseReasoning(text)).to.deep.equal(expected);
  });

  it('should parse text with custom tags', () => {
    const text = 'This is a <idea>idea</idea> about the problem.';
    const tags = ['idea'];
    const expected = [
      { type: 'text', content: 'This is a' },
      { type: 'reasoning', content: 'idea' },
      { type: 'text', content: 'about the problem.', reasoning_running: false}
    ];
    expect(parseReasoning(text, tags)).to.deep.equal(expected);
  });

  it('should handle multiple reasoning sections', () => {
    const text = 'First <think>thought</think> and then <reason>reason</reason>.';
    const expected = [
      { type: 'text', content: 'First' },
      { type: 'reasoning', content: 'thought' },
      { type: 'text', content: 'and then' },
      { type: 'reasoning', content: 'reason' },
      { type: 'text', content: '.', reasoning_running: false}
    ];
    expect(parseReasoning(text)).to.deep.equal(expected);
  });

  it('should return text as is if no tags are found', () => {
    const text = 'This is plain text without any tags.';
    const expected = [
      { type: 'text', content: 'This is plain text without any tags.', reasoning_running: false }
    ];
    expect(parseReasoning(text)).to.deep.equal(expected);
  });

});