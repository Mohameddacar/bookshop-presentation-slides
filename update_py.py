import re

with open('csjs/scripts.js', 'r', encoding='utf-8') as f:
    scripts = f.read()

app_logic_index = scripts.find('// App Logic')
if app_logic_index != -1:
    slides_str = scripts[:app_logic_index].strip()
    
    with open('update.py', 'r', encoding='utf-8') as f:
        py_content = f.read()
        
    pattern = re.compile(r'slides_content = """(.*?)"""\s*new_content = slides_content', re.DOTALL)
    
    # We replace the inside of slides_content = """...""" with the new slides_str
    # Note: slides_str has string interpolation `${...}` or similar? No, the JS doesn't have `${` except maybe in scripts.js App Logic.
    
    new_py_content = pattern.sub('slides_content = """' + slides_str.replace('\\', '\\\\') + '\\n"""\n    new_content = slides_content', py_content)
    
    with open('update.py', 'w', encoding='utf-8') as f:
        f.write(new_py_content)
    print('update.py modified successfully.')
