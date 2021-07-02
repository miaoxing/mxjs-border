import sass from 'sass';

describe('test', () => {
  test('render', () => {
    const result = sass.renderSync({
      file: 'index.scss',
    });

    const css = result.css.toString();

    expect(css).toContain('.border {');
    expect(css).toContain('.border-t {');
    expect(css).toContain('.border-r {');
    expect(css).toContain('.border-b {');
    expect(css).toContain('.border-l {');
    expect(css).toContain('.border-x {');
    expect(css).toContain('.border-y {');
    expect(css).toContain('.border-0');
  });
});
