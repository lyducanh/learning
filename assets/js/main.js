document.addEventListener('DOMContentLoaded', () => {
  console.log('Ly Duc Anh Tech Blog initialized.');

  // Code block copy button
  document.querySelectorAll('.article-body pre').forEach((pre) => {
    const button = document.createElement('button');
    button.className = 'copy-code-btn';
    button.innerText = 'Copy';
    button.style.position = 'absolute';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.padding = '4px 8px';
    button.style.fontSize = '12px';
    button.style.background = 'rgba(255, 255, 255, 0.1)';
    button.style.border = '1px solid rgba(255, 255, 255, 0.2)';
    button.style.borderRadius = '4px';
    button.style.color = '#fff';
    button.style.cursor = 'pointer';

    pre.style.position = 'relative';
    pre.appendChild(button);

    button.addEventListener('click', () => {
      const code = pre.querySelector('code');
      const text = code ? code.innerText : pre.innerText;
      navigator.clipboard.writeText(text).then(() => {
        button.innerText = 'Copied!';
        button.style.background = 'rgba(0, 242, 254, 0.3)';
        setTimeout(() => {
          button.innerText = 'Copy';
          button.style.background = 'rgba(255, 255, 255, 0.1)';
        }, 2000);
      });
    });
  });

  // Calculate Reading Time dynamically if element exists
  const articleBody = document.querySelector('.article-body');
  const readingTimeEl = document.getElementById('reading-time');
  if (articleBody && readingTimeEl) {
    const text = articleBody.innerText;
    const wpm = 200;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    readingTimeEl.innerText = `${time} min read`;
  }
});
