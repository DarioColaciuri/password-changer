const characterMap = {
    'A': 'q', 'B': 'V', 'C': 'g', 'D': '$', 'E': 'R', 'F': '7', 'G': 'b', 'H': 'L', 'I': '!', 'J': 'n',
    'K': 'S', 'L': '9', 'M': 'P', 'N': '4', 'Ñ': '%', 'O': 'c', 'P': 'Y', 'Q': 'm', 'R': '#', 'S': 'x',
    'T': '6', 'U': 'u', 'V': 'E', 'W': 'a', 'X': '(', 'Y': 'd', 'Z': 'F', 'a': 'i', 'b': 'A', 'c': 'J',
    'd': 'D', 'e': 'w', 'f': '1', 'g': 'X', 'h': 'k', 'i': 'K', 'j': 't', 'k': '0', 'l': 'v', 'm': 'G',
    'n': 's', 'ñ': '*', 'o': '5', 'p': '2', 'q': 'h', 'r': 'o', 's': 'f', 't': 'O', 'u': 'H', 'v': 'z',
    'w': '8', 'x': 'Q', 'y': 'W', 'z': 'N', '0': 'y', '1': 'Z', '2': 'j', '3': 'U', '4': 'e', '5': '3',
    '6': 'B', '7': '!', '8': '7', '9': '4', ' ': 's', '!': 'M', '"': 'l', '#': 'T', '$': '6', '%': 'b',
    '&': '?', "'": 'g', '(': 'V', ')': 'R', '*': 'J', '+': 'n', ',': 'f', '-': 'd', '.': 'W', '/': 'K',
    ':': 'I', ';': 'q', '<': 'Y', '=': 'u', '>': 'r', '?': '0', '@': 'B', '[': 'a', '\\': 'N', ']': 'G',
    '^': 't', '_': 'H', '`': '1', '{': 'e', '|': '5', '}': 'C', '~': '3',
  };
  
  function transformText() {
    const inputText = document.getElementById('inputText').value;
    let outputText = '';
  
    for (let char of inputText) {
      outputText += characterMap[char] || char;
    }
  
    document.getElementById('outputText').textContent = outputText;
  }
  