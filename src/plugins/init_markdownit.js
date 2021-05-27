import MarkdownIt from 'markdown-it';

const initMarkdownit = () => {
  const textarea = document.getElementById('editor');
  const preview = document.getElementById('preview');
  const markdown = new MarkdownIt();
  // JS syntax for class. It's equal to MarkdownIt.new()
  textarea.addEventListener('keyup', (event) => {
    const html = markdown.render(textarea.value);
    preview.innerHTML = html;
  });
}

export { initMarkdownit };