from pathlib import Path
import re

path = Path('src/data/redux/interview.js')
text = path.read_text(encoding='utf-8')

# Remove numeric prefixes from question fields
# Pattern: question: "number. text" -> question: "text"
pattern = r'(question\s*:\s*["\'])\d+\.\s*'
replacement = r'\1'

result = re.sub(pattern, replacement, text)

path.write_text(result, encoding='utf-8')
print('Removed numeric prefixes from questions in redux/interview.js')