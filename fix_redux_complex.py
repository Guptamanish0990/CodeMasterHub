from pathlib import Path
import re

path = Path('src/data/redux/learning.js')
text = path.read_text(encoding='utf-8')

# Find all multiline code blocks that start with code: ` 
# Pattern: code: ` at line start followed by any content and eventually `,
# But we need to handle escaped backticks inside

pattern = r'(code:\s*)`'
matches = list(re.finditer(pattern, text))

print(f"Found {len(matches)} code blocks")

if len(matches) == 0:
    print("No code blocks found")
else:
    # For each match, find where the backtick-enclosed block ends
    result = text
    
    for match in reversed(matches):  # Process in reverse to maintain positions
        start_pos = match.end()  # Position right after the opening backtick
        # Find the closing backtick followed by comma
        # Need to find `, not \` 
        
        search_text = result[start_pos:]
        
        # Find the real closing backtick (one that's followed by comma)
        # Skip escaped backticks (\`)
        i = 0
        found_end = False
        while i < len(search_text):
            if search_text[i:i+2] == '`,' or (search_text[i] == '`' and i+1 < len(search_text) and search_text[i+1] in '\n\r '):
                if i > 0 and search_text[i-1] != '\\':  # Not escaped
                    # Extract the code block
                    code_block = search_text[:i]
                    
                    # Escape special characters for use in a double-quoted string
                    escaped = code_block.replace('\\', '\\\\').replace('"', '\\"')
                    
                    # Join multiline with \n literal
                    lines = escaped.split('\n')
                    escaped = '\\n'.join(lines)
                    
                    # Replace in result
                    block_start = match.start()
                    block_end = start_pos + i + 1  # +1 to include the backtick
                    
                    replacement = f'code: "{escaped}",'
                    result = result[:block_start] + replacement + result[block_end:]
                    found_end = True
                    print(f"Fixed block at position {block_start}")
                    break
            i += 1
        
        if not found_end:
            print(f"Warning: Could not find closing backtick for block at {match.start()}")
    
    path.write_text(result, encoding='utf-8')
    print(f"Updated {path}")
