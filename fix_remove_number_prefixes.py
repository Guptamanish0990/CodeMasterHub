import re
from pathlib import Path
pattern = re.compile(r'^(\s*(?:title|question)\s*:\s*["\"])\d+\.\s*', re.MULTILINE)
for path in Path('src/data').rglob('*.js'):
    if path.name in ['interview.js', 'problems.js', 'learning.js', 'questions.js']:
        text = path.read_text(encoding='utf-8')
        new_text, count = pattern.subn(r'\1', text)
        if count:
            path.write_text(new_text, encoding='utf-8')
            print(f'Updated {path} ({count} replacements)')
