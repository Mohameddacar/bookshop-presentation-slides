with open('d:/graduation/presentation/csjs/scripts.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('\\`', '`')

with open('d:/graduation/presentation/csjs/scripts.js', 'w', encoding='utf-8') as f:
    f.write(content)

with open('d:/graduation/presentation/update.py', 'r', encoding='utf-8') as f:
    update_content = f.read()

update_content = update_content.replace('\\`', '`')

with open('d:/graduation/presentation/update.py', 'w', encoding='utf-8') as f:
    f.write(update_content)
