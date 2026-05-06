from pathlib import Path
import re

path = Path('src/data/redux/learning.js')
text = path.read_text(encoding='utf-8')
lines = text.splitlines()
out_lines = []
in_example = False
example_indent = ''
example_lines = []

for line in lines:
    if not in_example:
        match = re.match(r'^(\s*code:\s*)`(.*)$', line)
        if match:
            in_example = True
            example_indent = match.group(1)
            rest = match.group(2)
            example_lines = [rest]
            continue
        out_lines.append(line)
        continue

    # inside example block
    end_match = re.match(r'^(.*)`\s*,\s*$', line)
    if end_match:
        example_lines.append(end_match.group(1))
        escaped = []
        for ex_line in example_lines:
            escaped_line = ex_line.replace('\\', '\\\\').replace('"', '\\"')
            escaped.append(escaped_line)
        joined = '\\n'.join(escaped)
        out_lines.append(f'{example_indent}"{joined}",')
        in_example = False
        example_indent = ''
        example_lines = []
        continue

    example_lines.append(line)

if in_example:
    raise SystemExit('Unterminated example block')

path.write_text('\n'.join(out_lines) + '\n', encoding='utf-8')
print('Updated', path)
